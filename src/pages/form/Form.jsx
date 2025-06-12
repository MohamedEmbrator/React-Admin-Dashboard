/* eslint-disable no-extra-boolean-cast */
import { Alert, Box, Button, MenuItem, Snackbar, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import MainTitle from "../../components/mainTitle";
const data = [
  {
    value: "Admin",
    label: "Admin"
  },
  {
    value: "Manager",
    label: "Manager"
  },
  {
    value: "User",
    label: "User"
  }
];
const Form = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    handleClick();
  };
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const emailPattern =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const phoneRegExp =
      /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
  return (
    <Box
      component="form"
      sx={{ display: "flex", flexDirection: "column", gap: 3 }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <MainTitle title="CREATE USER" description="Create a new user profile " />
      <Stack direction="row" sx={{ gap: 2 }}>
        <TextField
          label="First Name"
          variant="filled"
          sx={{ flex: 1 }}
          {...register("firstName", {
            required: { value: true, message: "This Field is required" },
            minLength: { value: 3, message: "Minmun length is 3 characters" }
          })}
          error={Boolean(errors.firstName)}
          helperText={
            Boolean(errors.firstName)
              ? errors.firstName?.message.toString()
              : null
          }
        />
        <TextField
          label="Last Name"
          variant="filled"
          sx={{ flex: 1 }}
          {...register("lastName", {
            required: { value: true, message: "This Field is required" },
            minLength: { value: 3, message: "Minmun length is 3 characters" }
          })}
          error={Boolean(errors.lastName)}
          helperText={
            Boolean(errors.lastName)
              ? errors.lastName?.message.toString()
              : null
          }
        />
      </Stack>
      <TextField
        label="Email"
        variant="filled"
        {...register("email", {
          required: {
            value: true,
            message: "Please Provide a valid email address"
          },
          pattern: emailPattern
        })}
        error={Boolean(errors.email)}
        helperText={
          Boolean(errors.email) ? errors.email?.message.toString() : null
        }
      />
      <TextField
        label="Contact Number"
        variant="filled"
        {...register("phone", {
          required: {
            value: true,
            message: "Please Provide a valid phone number"
          },
          pattern: phoneRegExp
        })}
        error={Boolean(errors.phone)}
        helperText={
          Boolean(errors.phone) ? errors.phone?.message.toString() : null
        }
      />
      <TextField label="Address 1" variant="filled" />
      <TextField label="Address 2" variant="filled" />
      <TextField select label="Role" defaultValue="User" variant="filled">
        {data.map((option) => (
          <MenuItem key={option.value} value={option.value}>
            {option.label}
          </MenuItem>
        ))}
      </TextField>
      <Box sx={{ textAlign: "right" }}>
        <Button
          variant="contained"
          sx={{ textTransform: "capitalize" }}
          type="submit"
        >
          Create New User
        </Button>
        <Snackbar anchorOrigin={{vertical: "top", horizontal: "right"}} open={open} autoHideDuration={5000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="info"
            variant="filled"
            sx={{ width: "100%" }}
          >
            Account Created Succefully
          </Alert>
        </Snackbar>
      </Box>
    </Box>
  );
};

export default Form;
