import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  Stack,
  styled,
  TextField,
  Typography,
  Link,
  CircularProgress,
} from "@mui/material";
import { IFormSignIn } from "../interfaces";
import BackToHome from "../components/BackToHome";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api";
import Dialog from "../components/Dialog";
import { useState } from "react";

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const SignInView: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm<IFormSignIn>({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = (data: IFormSignIn) => {
    setLoading(true)
    loginUser(data,navigate)
      .catch(() => setOpen(true))
      .finally(() => setLoading(false))
  };
  return (
    <Box
      height={"100vh"}
      width={"100%"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Dialog
        msg={"Registration failed, try again..."}
        title={"Error"}
        open={open}
        handleClose={() => {setOpen(false)}}
      />
      <Stack
        maxHeight={"600px"}
        maxWidth={"600px"}
        width={500}
        height={600}
        padding={1}
        spacing={1}
        direction={"column"}
      >
        <BackToHome />
        <Stack
          padding={1}
          spacing={1}
          boxSizing={"border-box"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <Typography component={"h4"} variant="h4">
            Sign In
          </Typography>
          {loading ? <CircularProgress /> : null}
        </Stack>
        <Form onSubmit={handleSubmit(onSubmit)} method="post">
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Username"
                type="text"
              />
            )}
          />
          <Controller
            name="password"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Password"
                type="password"
              />
            )}
          />
          <Box height={56} />
          <Button fullWidth variant="contained" disableElevation type="submit">
            <Typography variant="subtitle1">Sign in</Typography>
          </Button>
        </Form>
        <Box
          height={56}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          padding={2}
          boxSizing={"border-box"}
        >
          <Link
            underline="hover"
            onClick={() => {
              navigate("/signup");
            }}
          >
            Dont have an account? Sign up.
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default SignInView;


