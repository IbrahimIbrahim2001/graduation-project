//react
import { Fragment, useState, useEffect } from "react";

//mui
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import { FormControl, Typography, IconButton } from "@mui/material";

//react-router
import { Link } from "react-router-dom";

//formik
import { useFormik } from "formik";

//hooks
import { useSignIn } from "../../hooks/useSignIn";

//component
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice/authSlice";
import Input from "../UI/Input";
import LoginErrorSnackbar from "./LoginErrorSnackbar";
import FormButton from "../UI/FormButton";

//Yup
import * as Yup from "yup";

const userSchema = Yup.object().shape({
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
});

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(true);
  const [errorMessage, setErrorMessage] = useState(false);

  // to prevent going back to previous pages, this is additional protection - look for a better way
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(logout());
  }, [dispatch]);

  const handleClickShowPassword = (event) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };

  const onError = () => {
    setErrorMessage(true);
  };
  const { mutate } = useSignIn(onError);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: userSchema,
    onSubmit: (values) => {
      try {
        const data = {
          email: values.email,
          password: values.password,
        };

        mutate(data);
      } catch (error) {
        console.error("Sign-in failed", error);
      }
    },
  });

  const loginFormFields = [
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
  ];

  return (
    <>
      <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <FormControl fullWidth>
          {loginFormFields.map((field) => (
            <Fragment key={field.props.id}>
              <Input
                {...field.props}
                fieldProps={field.fieldProps}
                formik={formik}
                InputProps={{ ...field.inputProps }}
              />
            </Fragment>
          ))}
          <Typography mb={2} textAlign={"end"}>
            <Link style={{ color: "#7B66FF", textDecoration: "none" }}>
              Forget password?
            </Link>
          </Typography>
          <FormButton text="Login" />
        </FormControl>
      </form>
      <LoginErrorSnackbar
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage(false)}
      />
    </>
  );
};
