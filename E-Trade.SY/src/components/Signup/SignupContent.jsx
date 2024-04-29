//react

//mui
import { Box, Typography } from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";

//router
import { Link } from "react-router-dom";

//component
import { SignupForm } from "./SignupForm";

//context

import { useThemeContext } from "../../context/ThemeModeProvider";

export const SignupContent = () => {
  const { darkMode } = useThemeContext();
  return (
    <Box marginBottom={5}>
      <Link to="../">
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{
            mb: { xs: 1, md: 5 },
          }}
        >
          <AddShoppingCartIcon sx={{ fontSize: 30 }} />
        </IconButton>
      </Link>
      <Box
        sx={{
          borderRadius: "16px",
          paddingY: { xs: 4, md: 0 },
          paddingX: { xs: 3, md: 0 },
          background: {
            xs: darkMode
              ? "rgba( 0, 0, 0, 0.75 )"
              : "rgba( 255, 255, 255, 0.9 )",
            md: "none",
          },
          boxShadow: {
            xs: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            md: "none",
          },
        }}
      >
        <Typography variant={"h6"} sx={{ marginBottom: 2, fontWeight: "bold" }}>
          Join us Now..
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
          have an account or a store?{" "}
          <Link
            to="../login"
            style={{ color: "#7B66FF", textDecoration: "none" }}
          >
            Sign in
          </Link>
        </Typography>

        <SignupForm />
      </Box>
    </Box>
  );
};
