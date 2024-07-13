//mui
import { Box, Toolbar, Typography, useMediaQuery } from "@mui/material";

//context
import { useThemeContext } from "../context/ThemeModeProvider";

//component
import CustomerProfileCard from "../components/CustomerProfile/CustomerProfileCard";
import LougoutButton from "../components/CustomerProfile/LougoutButton";
import ThemeSwitch from "../components/CustomerProfile/ThemeSwitch";
import CameraToolBar from "../components/CustomerProfile/CameraToolBar";

export default function CustomerProfile() {
  const matchesXS = useMediaQuery("(max-width:599px)");
  const { darkMode, toggleTheme } = useThemeContext();
  return (
    <Box
      sx={{
        minHeight: {
          xs: "63em",
          sm: "99vh",
        },
        overflowY: { xs: "scroll", sm: "none" },
        "::-webkit-scrollbar": {
          display: "none",
        },
        backgroundColor: darkMode ? "#121212" : "#fff",
        paddingY: 2,
        paddingX: { xs: 2, sm: 5, md: 10, lg: 25 },
      }}
    >
      <Toolbar />
      <Typography variant="h6" sx={{ fontWeight: "bold" }} mb={2}>
        Customer Profile:
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          height: "420px",
        }}
      >
        <CustomerProfileCard darkMode={darkMode} />
        <Box
          alignSelf={{
            xs: "center",
            sm: "flex-start",
            height: "inherit",
          }}
          sx={{
            width: { xs: "94vw", sm: "full-width", md: 230, lg: 250 },
            ml: { sm: 2, md: 0 },
          }}
        >
          <CameraToolBar darkMode={darkMode} />

          <LougoutButton darkMode={darkMode} />
          {matchesXS && (
            <Box
              className={`item ${darkMode ? "dark" : "light"}`}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexDirection: "row",
                p: 2,
                mb: 2,
              }}
            >
              <Typography>Theme Mode:</Typography>
              <ThemeSwitch onClick={toggleTheme} />
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
