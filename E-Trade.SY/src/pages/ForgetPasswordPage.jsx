import {
  Box,
  Button,
  FormControl,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Link, useNavigate } from "react-router-dom";

//Yup
import * as Yup from "yup";
import { useFormik } from "formik";
import { useSendEmail } from "../hooks/useSendEmail";
import { useState } from "react";

const EmailSchema = Yup.object().shape({
  email: Yup.string()
    .email("Invalid email")
    .required("Email is Required")
    .strict()
    .lowercase("invalid email"),
});

export default function ForgetPasswordPage() {
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const { mutate } = useSendEmail();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: EmailSchema,
    onSubmit: (values) => {
      try {
        const data = {
          email: values.email,
        };

        mutate(data);
        setIsButtonDisabled(true);
      } catch (error) {
        console.error("Send Email Failed", error);
      }
    },
  });
  return (
    <>
      <Box
        sx={{
          px: { xs: 2, sm: 25 },
          py: 5,
          height: "90vh",
          display: "grid",
          justifyContent: { sm: "center" },
          alignContent: "flex-start",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ sm: { mr: 2 } }}
            onClick={() => navigate("../")}
          >
            <AddShoppingCartIcon sx={{ color: "#2200FF" }} />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: 700 }}
            color="#2200FF"
          >
            E-Mart
          </Typography>
        </Box>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 500 }}
          color="#2200FF"
        >
          Forget Password:
        </Typography>{" "}
        <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
          <FormControl fullWidth sx={{ my: 2, width: "100%" }}>
            <TextField
              label="your email"
              variant="outlined"
              {...formik.getFieldProps("email")}
              error={formik.touched.email && !!formik.errors.email}
              helperText={
                (formik.touched["email"] && formik.errors["email"]) ||
                "check your email inbox please"
              }
            />
          </FormControl>
          <Button
            fullWidth
            sx={{ mb: 2, justifySelf: "flex-end" }}
            type="submit"
            variant="outlined"
            disabled={isButtonDisabled}
          >
            send
          </Button>
        </form>
        <Typography variant="span" sx={{ fontWeight: "thin", mb: 2 }}>
          don&apos;t forget to check your email inbox please
        </Typography>
        <Button type="button" variant="outlined" color="success">
          <Link
            to="../login"
            style={{ textDecoration: "none", color: "#2e7d32" }}
          >
            Back To Login
          </Link>
        </Button>
      </Box>
    </>
  );
}
