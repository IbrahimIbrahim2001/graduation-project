import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  TextField,
  Typography,
} from "@mui/material";
import { Link, useNavigate, useParams } from "react-router-dom";

//Yup
import * as Yup from "yup";
import { useFormik } from "formik";
import { useResetPassword } from "../hooks/userResetPassword";

const PasswordSchema = Yup.object().shape({
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
  confirmPassword: Yup.string()
    .required("Please re-type your password")
    .oneOf([Yup.ref("password")], "Passwords must match"),
});

export default function ResetPasswordPage() {
  const { token } = useParams();
  console.log(token);
  const { mutate } = useResetPassword();
  const formik = useFormik({
    initialValues: {
      password: "",
      confirmPassword: "",
    },
    validationSchema: PasswordSchema,
    onSubmit: (values) => {
      const data = {
        ...values,
        token,
      };
      mutate(data);
    },
  });
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          px: { xs: 2, sm: 25 },
          py: 5,
          height: "90vh",
          width: { sm: "365px" },
          display: "grid",
          justifyContent: { sm: "center" },
          alignContent: "flex-start",
        }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", width: "fit-conent" }}
        >
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
          Reset Password:
        </Typography>
        <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
          <FormControl fullWidth sx={{ my: 2 }}>
            <TextField
              fullWidth
              label="new password"
              variant="outlined"
              sx={{ mb: 2 }}
              {...formik.getFieldProps("password")}
              error={formik.touched.password && !!formik.errors.password}
              helperText={
                formik.touched["password"] && formik.errors["password"]
              }
            />
            <TextField
              fullWidth
              label="confirm password"
              variant="outlined"
              {...formik.getFieldProps("confirmPassword")}
              error={
                formik.touched.confirmPassword &&
                !!formik.errors.confirmPassword
              }
              helperText={
                formik.touched["confirmPassword"] &&
                formik.errors["confirmPassword"]
              }
            />
          </FormControl>
          <Button
            fullWidth
            sx={{ mb: 2, justifySelf: "flex-end" }}
            type="submit"
            variant="outlined"
          >
            reset password
          </Button>
        </form>
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
