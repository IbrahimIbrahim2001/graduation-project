//mui
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import FacebookIcon from "@mui/icons-material/Facebook";
import GoogleIcon from "@mui/icons-material/Google";
import { Box, Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";

//router
import { Link } from "react-router-dom";

//component
import { LoginForm } from "./LoginForm";
import { useThemeContext } from "../../context/ThemeModeProvider";

export const LoginContent = () => {
  const { darkMode } = useThemeContext();
  return (
    <>
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <Link to="../">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
          >
            <AddShoppingCartIcon sx={{ fontSize: 30 }} />
          </IconButton>
        </Link>
        <Typography
          variant="h6"
          component="div"
          sx={{ fontWeight: "bolder" }}
          color="#2200FF"
        >
          E-Mart
        </Typography>
      </Box>
      <Box
        sx={{
          borderRadius: {
            sm: "16px",
            md: 0,
          },
          background: {
            xs: "",
            sm: darkMode ? "rgba(17, 25, 40, 1)" : "rgba( 255, 255, 255, 0.9)",
            md: "transparent",
          },
          boxShadow: {
            sm: darkMode ? "" : "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            md: "none",
          },
          border: { sm: "1px solid rgba(255, 255, 255, 0.125)", md: "none" },
          paddingX: {
            sm: 2,
            md: 0,
          },
          paddingY: {
            sm: 3,
            md: 0,
          },
          marginBottom: 3,
        }}
      >
        <Typography variant={"h6"} sx={{ marginBottom: 2, fontWeight: "bold" }}>
          Sign in to E-mart:
        </Typography>
        <IconButton
          sx={{
            backgroundColor: "#f81616",
            marginBottom: 2,
            marginRight: 2,
            color: "#fff",
            border: "1 #f81616",
            borderRadius: 3,
            "&:hover": {
              color: "#f81616",
              backgroundColor: "#fff",
            },
          }}
        >
          <GoogleIcon />
        </IconButton>
        <IconButton
          sx={{
            backgroundColor: "#2200FF",
            marginBottom: 2,
            color: "#fff",
            border: "1 #2200FF",
            borderRadius: 3,
            "&:hover": {
              color: "#2200FF",
              backgroundColor: "#fff",
            },
          }}
        >
          <FacebookIcon />
        </IconButton>
        <Typography sx={{ marginBottom: 2, fontWeight: 600 }}>
          New customer?{" "}
          <Link
            to="../signup"
            style={{ color: "#7B66FF", textDecoration: "none" }}
          >
            {" "}
            Create an Account
          </Link>
        </Typography>
        <Typography sx={{ marginBottom: 2, fontWeight: 600 }}>
          New Seller?{" "}
          <Link
            to="../store-register"
            style={{ color: "#7B66FF", textDecoration: "none" }}
          >
            {" "}
            Create a Store
          </Link>
        </Typography>
        <LoginForm />
      </Box>
    </>
  );
};
