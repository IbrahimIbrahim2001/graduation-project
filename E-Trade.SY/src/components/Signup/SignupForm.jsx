import { Fragment, useState } from "react";
//mui
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { FormControl, Grid, IconButton } from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";

//component
import FormButton from "../UI/FormButton";
import Input from "../UI/Input";
//context
//fromik
import { useFormik } from "formik";

//hooks
import { useSignUp } from "../../hooks/useSignUp";
import SignUpErrorSnackbar from "./SignUpErrorSnackbar";

//Yup
import * as Yup from "yup";

const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("first name is required")
    .min(2, "first name must be at least 2 characters")
    .max(10, "first name must be at most 10 characters")
    .test("noNumber", "First name cannot start with a number", (value) => {
      return !/^(0|[1-9])/.test(value);
    }),
  lastName: Yup.string()
    .required("last name is required")
    .min(2, "last name must be at least 2 characters")
    .max(10, "last name must be at most 10 characters") // changed from 2 to 10
    .test("noNumber", "Last name cannot start with a number", (value) => {
      return !/^(0|[1-9])/.test(value);
    }),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is Required")
    .strict()
    .lowercase("invalid email"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters")
    .test(
      "passwordPolicy: ",
      "Password must contain at least one uppercase letter, one lowercase letter, one digit",
      (value) => {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[!?.@#$*%]*.{8,20}$/.test(value);
      }
    ),
  address: Yup.string()
    .required("Address is Required")
    .min(8, "Address must be at least 8 characters")
    .max(20, "Address must be at most 20 characters"),

  phoneNumber: Yup.string()
    .required("Phone Number is Required, example: 963955544433")
    .matches(/^\d{12}$/, "Phone Number must be 12 digits starting with 963"),
});
export const SignupForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  const onError = () => {
    setErrorMessage(true);
  };

  const handleClickShowPassword = (event) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };

  const { mutate } = useSignUp(onError);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      address: "",
      phoneNumber: "963",
    },
    validationSchema: userSchema,
    onSubmit: async (values) => {
      try {
        const data = {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
          address: values.address,
          phoneNumber: values.phoneNumber,
        };
        mutate(data);
      } catch (error) {
        console.error("Sign-up failed", error);
      }
    },
  });

  const SignUpFormFields = [
    {
      props: {
        id: "firstname",
        label: "First Name",
        variant: "outlined",
        type: "text",
      },
      fieldProps: "firstName",
    },
    {
      props: {
        id: "lastname",
        label: "Last name",
        variant: "outlined",
        type: "text",
      },
      fieldProps: "lastName",
    },
    {
      props: {
        id: "email",
        label: "Email address",
        variant: "outlined",
        type: "email",
      },
      fieldProps: "email",
    },
    {
      props: {
        id: "password",
        label: "Password",
        variant: "outlined",
        type: showPassword ? "text" : "password",
      },
      fieldProps: "password",
      inputProps: {
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              edge="end"
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        ),
      },
    },
    {
      props: {
        id: "address",
        label: "Address",
        variant: "outlined",
        type: "text",
      },
      fieldProps: "address",
    },
    {
      props: {
        id: "phone number",
        label: "Phone Number",
        variant: "outlined",
        type: "text",
      },
      fieldProps: "phoneNumber",
    },
  ];

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <FormControl fullWidth>
          <Grid container columnSpacing={2}>
            {SignUpFormFields.map((field, index) => (
              <Fragment key={field.props.id}>
                {index < 2 && (
                  <Grid item xs={12} sm={6}>
                    <Input
                      {...field.props}
                      fieldProps={field.fieldProps}
                      formik={formik}
                      InputProps={{ ...field.inputProps }}
                    />
                  </Grid>
                )}
                {index >= 2 && (
                  <Grid item xs={12}>
                    <Input
                      {...field.props}
                      fieldProps={field.fieldProps}
                      formik={formik}
                      InputProps={{ ...field.inputProps }}
                    />
                  </Grid>
                )}
              </Fragment>
            ))}
          </Grid>

          <FormButton text="Sign up" />
        </FormControl>
      </form>
      <SignUpErrorSnackbar
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage(false)}
      />
    </>
  );
};
