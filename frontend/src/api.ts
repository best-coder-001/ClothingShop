import axios from "axios";
import { ACCESS_TOKEN, API_URL, REFRESH_TOKEN } from "./constants";
import { IContactForm, IFormSignIn, IFormSignup } from "./interfaces";

const api = axios.create({
  baseURL: API_URL,
});

export const defaultApi = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export const registerUser = async (
  data: IFormSignup,
  navigate: (path: string) => void
) => {
  try {
    const resp = await api.post("users/register/", {
      username: data.username,
      password: data.password,
      email: data.email,
      first_name: data.firstName,
      last_name: data.lastName,
    });

    if (resp.status === 201) {
      navigate("/sign-in");
    } else {
      console.log("registration failed", resp);
    }
  } catch (err) {
    console.log("registration error", err);
  }
};

export const loginUser = async (
  { username, password }: IFormSignIn,
  navigate: (path: string) => void
) => {
  try {
    const resp = await api.post("users/token/", {
      username,
      password,
    });
    if (resp.status === 200) {
      localStorage.setItem(ACCESS_TOKEN, resp.data.access);
      localStorage.setItem(REFRESH_TOKEN, resp.data.refresh);
      navigate("/");
    } else {
      console.log("login failed", resp);
    }
  } catch (err) {
    console.log("login error", err);
  }
};

export const sendContactData = async (data: IContactForm,navigate: (path: string) => void) => {
  const res = await defaultApi.post('shop/contact/',{...data})

  if (res.status === 201) {
    navigate('/')
  }
};

export default api;
