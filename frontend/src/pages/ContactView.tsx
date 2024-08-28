import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import {
  Box,
  Button,
  CircularProgress,
  Stack,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import BackToHome from "../components/BackToHome";
import { IContactForm } from "../interfaces";
import { sendContactData } from "../api";
import Dialog from "../components/Dialog";
import { useNavigate } from "react-router-dom";

const Form = styled("form")({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
});
const ContactView: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { handleSubmit, control } = useForm<IContactForm>({
    defaultValues: {
      fullname: "",
      email: "",
      opinion: "",
    },
  });
  const onSubmit = async (data: IContactForm) => {
    setLoading(true);
    await sendContactData(data, navigate)
      .catch(() => setOpen(true))
      .finally(() => setLoading(false));
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
        msg={"Sending failed, try again..."}
        title={"Error"}
        open={open}
        handleClose={() => {
          setOpen(false);
        }}
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
        <Box padding={2} boxSizing={"border-box"}>
          <Typography component={"h4"} variant="h4">
            Contact Form
          </Typography>
          {loading ? <CircularProgress /> : null}
        </Box>
        <Form onSubmit={handleSubmit(onSubmit)} method="post">
          <Controller
            name="fullname"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                multiline
                label="Full name"
                type="text"
              />
            )}
          />
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                multiline
                label="Email"
                type="email"
              />
            )}
          />
          <Controller
            name="opinion"
            control={control}
            render={({ field }) => (
              <TextField
                {...field}
                variant="outlined"
                multiline
                label=""
                rows={7}
                type="textarea"
              />
            )}
          />
          <Box height={56} />
          <Button fullWidth variant="contained" disableElevation type="submit">
            <Typography variant="subtitle1">Submit</Typography>
          </Button>
        </Form>
      </Stack>
    </Box>
  );
};

export default ContactView;
