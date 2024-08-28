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
import React, { useState } from "react";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import { IFormSignup } from "../interfaces.ts";
import BackToHome from "../components/BackToHome.tsx";
import { useNavigate } from "react-router-dom";
import Dialog from "../components/Dialog.tsx";
import { registerUser } from "../api.ts";

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});

const SignupView: React.FC = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm<IFormSignup>({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<IFormSignup> = (data) => {
    setLoading(true);
    registerUser(data,navigate)
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
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Stack
            padding={1}
            spacing={1}
            boxSizing={"border-box"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography component={"h4"} variant="h4">
              Signup
            </Typography>
            {loading ? <CircularProgress /> : null}
          </Stack>
          <Box
            display={"flex"}
            gap={"8px"}
            width={"100%"}
            boxSizing={"border-box"}
            flexDirection={{ xs: "column", sm: "row" }}
          >
            <Controller
              name="firstName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  label="First name"
                />
              )}
            />
            <Controller
              name="lastName"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  variant="outlined"
                  label="Last name"
                />
              )}
            />
          </Box>
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Email"
                type="email"
              />
            )}
          />
          <Controller
            name="username"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                label="Create username"
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
                label="Create password"
                type="password"
              />
            )}
          />
          <Box height={36} />
          <Button fullWidth variant="contained" disableElevation type="submit">
            <Typography variant="subtitle1">Signup</Typography>
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
              navigate("/sign-in");
            }}
          >
            Already have an account? Sign in.
          </Link>
        </Box>
      </Stack>
    </Box>
  );
};

export default SignupView;
