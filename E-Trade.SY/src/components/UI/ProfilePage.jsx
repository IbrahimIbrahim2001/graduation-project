//mui
import { Box, Typography, useMediaQuery } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

//component
import LougoutButton from "../../components/CustomerProfile/LougoutButton";
import ThemeSwitch from "../../components/CustomerProfile/ThemeSwitch";
import ProfileCard from "./ProfileCard";

export default function ProfilePage({
  text,
  children,
  cardContent: CardContent,
}) {
  const matchesXS = useMediaQuery("(max-width:599px)");
  const { darkMode, toggleTheme } = useThemeContext();
  return (
    <Box
      sx={{
        minHeight: {
          xs: "72em",
          sm: "91vh",
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
      <CssBaseline />
      <Typography variant="h6" sx={{ fontWeight: "bold" }} mb={2}>
        {text}:
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
        <ProfileCard>
          {CardContent}
          {/*Component either a CustomerProfileCardContent or SellerProfileCardContent*/}
        </ProfileCard>
        <Box
          alignSelf={{
            xs: "center",
            sm: "flex-start",
            height: "inherit",
          }}
          sx={{
            width: { xs: "94vw", sm: 230, lg: 250 },
            ml: { sm: 2, md: 0 },
          }}
        >
          {children}
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
