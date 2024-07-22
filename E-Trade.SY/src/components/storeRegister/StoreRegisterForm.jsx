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

//router

//fromik
import { useFormik } from "formik";

//hooks
import { useCreateStore } from "../../hooks/useCreateStore";

//react
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import CreateStoreErrorSnackbar from "./CreateStoreErrorSnackbar";

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
    validate: (values) => {
      const errors = {};
      if (!values.storeName) {
        errors.storeName = "Store name is required";
      } else if (values.storeName.length < 2 || values.storeName > 20) {
        errors.storeName = "First name must be between {2-20} characters";
      }
      if (!values.storeType) {
        errors.storeType = "Store type is required";
      } else if (values.storeType.length < 2 || values.storeType.length > 20) {
        errors.storeType = "Store type must be between {2-20} characters";
      }
      if (!values.sellerEmail) {
        errors.sellerEmail = "Email is required";
      } else if (
        !/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(values.sellerEmail)
      ) {
        errors.sellerEmail = "Invalid email address";
      }
      if (!values.password) {
        errors.password = "Password is required";
      } else if (values.password.length < 8 || values.password.length > 20) {
        errors.password = "Password must be between {8-20} characters";
        // !/(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}/.test(values.password)
      }
      if (!values.sellerName) {
        errors.sellerName = "Seller name is required";
      } else if (
        values.sellerName.length < 2 ||
        values.sellerName.length > 20
      ) {
        errors.sellerName = "seller name must be between {2-20} characters";
      }

      if (!values.sellerPhone) {
        errors.sellerPhone = "seller phone is required";
      } else if (!/^((963))\d{9}$/.test(values.sellerPhone)) {
        errors.sellerPhone =
          "seller phone must start with (963) and have a length of 11 characters";
      }
      return errors;
    },
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
