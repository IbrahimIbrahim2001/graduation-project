//mui
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Box, FormControl, Grid, Hidden, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import MenuItem from "@mui/material/MenuItem";

//components
import FormButton from "../UI/FormButton";
import Input from "../UI/Input";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

//fromik
import { useFormik } from "formik";

//hooks
import { useCreateStore } from "../../hooks/useCreateStore";

//react
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import CreateStoreErrorSnackbar from "./CreateStoreErrorSnackbar";

//Yup
import * as Yup from "yup";

const storeSchema = Yup.object().shape({
  storeName: Yup.string()
    .required("Store Name is required")
    .min(1, "Store Name must be at least 2 characters")
    .max(10, "Store Name must be at most 10 characters"),
  storeType: Yup.string().required("store category is required"),
  sellerEmail: Yup.string()
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
  sellerName: Yup.string()
    .required("Seller Name is Required")
    .min(1, "Seller Name must be at least 8 characters")
    .max(20, "Seller Name must be at most 20 characters"),

  sellerPhone: Yup.string()
    .required("Phone Number is Required, example: 963955544433")
    .matches(/^\d{12}$/, "Phone Number must be 12 digits starting with 963"),
});

const storeTypes = [
  {
    type: "Clothing",
  },
  {
    type: "Grocerry",
  },
  {
    type: "Electronics",
  },
  {
    type: "Mobiles & Laptops",
  },
];

export default function StoreRegisterForm() {
  const [showPassword, setShowPassword] = useState(true);
  const { darkMode } = useThemeContext();
  const [errorMessage, setErrorMessage] = useState(false);

  const onError = () => {
    setErrorMessage(true);
  };

  const handleClickShowPassword = (event) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };

  const { mutate } = useCreateStore(onError);

  const formik = useFormik({
    initialValues: {
      storeName: "",
      storeType: "",
      sellerEmail: "",
      password: "",
      sellerName: "",
      sellerPhone: "",
    },
    validationSchema: storeSchema,
    onSubmit: (values) => {
      try {
        const data = {
          StoreName: values.storeName,
          storeKind: values.storeType,
          sellerEmail: values.sellerEmail,
          password: values.password,
          sellerName: values.sellerName,
          sellerPhone: values.sellerPhone,
        };
        mutate(data);
      } catch (error) {
        console.error("Store creation failed", error);
      }
    },
  });

  const StoreRegisterFormFields = [
    {
      props: {
        id: "storeName",
        label: "Store Name",
        variant: "outlined",
        type: "text",
      },
      fieldProps: "storeName",
    },
    {
      props: {
        id: "storeType",
        label: "Store Type",
        variant: "outlined",
        type: "text",
        extra: true,
      },
      fieldProps: "storeType",
      children: storeTypes.map((option) => (
        <MenuItem key={option.type} value={option.type}>
          {option.type}
        </MenuItem>
      )),
    },
    {
      props: {
        id: "sellerEmail",
        label: "Email address",
        variant: "outlined",
        type: "email",
      },
      fieldProps: "sellerEmail",
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
        id: "sellerName",
        label: "Full Name",
        variant: "outlined",
        type: "text",
      },
      fieldProps: "sellerName",
    },
    {
      props: {
        id: "sellerPhone",
        label: "Phone Number",
        variant: "outlined",
        type: "number",
      },
      fieldProps: "sellerPhone",
    },
  ];

  return (
    <>
      <Box
        sx={{
          borderRadius: { sm: "12px" },
          background: {
            xs: "",
            sm: darkMode ? "rgba(17, 25, 40, 1)" : "rgba( 255, 255, 255, 0.9)",
          },
          boxShadow: {
            sm: darkMode ? "" : "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          },
          border: { sm: "1px solid rgba(255, 255, 255, 0.125)" },
          paddingX: { sm: 5 },
          paddingY: { sm: 3 },
          marginBottom: 3,
        }}
      >
        <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
          <FormControl fullWidth>
            <Grid
              container
              columnSpacing={2}
              sx={{ placeContent: "space-between" }}
            >
              {StoreRegisterFormFields.map((field) => (
                <Fragment key={field.props.id}>
                  <Grid item xs={12} sm={6}>
                    <Input
                      {...field.props}
                      fieldProps={field.fieldProps}
                      formik={formik}
                      InputProps={{ ...field.inputProps }}
                    >
                      {field.children}
                    </Input>
                  </Grid>
                </Fragment>
              ))}
              <Hidden smDown>
                <Grid item sm={5} md={4} mt={2}>
                  <Typography sx={{ fontWeight: 600 }}>
                    have a store?{" "}
                    <Link
                      to="../login"
                      style={{ color: "#7B66FF", textDecoration: "none" }}
                    >
                      Sign in
                    </Link>
                  </Typography>
                </Grid>
              </Hidden>
              <Grid item xs={12} sm={5} md={4} lg={4}>
                <FormButton text="Create Store" />
              </Grid>
              <Hidden smUp>
                <Grid item xs={12} mt={2}>
                  <Typography sx={{ fontWeight: 600 }}>
                    have a store?{" "}
                    <Link
                      to="../login"
                      style={{ color: "#7B66FF", textDecoration: "none" }}
                    >
                      Sign in
                    </Link>
                  </Typography>
                </Grid>
              </Hidden>
            </Grid>
          </FormControl>
        </form>
      </Box>
      <CreateStoreErrorSnackbar
        errorMessage={errorMessage}
        handleClose={() => setErrorMessage(false)}
      />
    </>
  );
}
