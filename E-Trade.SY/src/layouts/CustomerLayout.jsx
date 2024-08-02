//router
import { Outlet } from "react-router-dom";

//components
import ShopsDrawerOnSmallScreens from "../components/Shops/ShopsDrawerOnSmallScreens";
import MainNavbar from "../components/main/MainNavbar";
import MainNavbarOnSmallScreens from "../components/main/MainNavbarOnSmallScreens";
import CustomerBottomNavbar from "../components/UI/CustomerNavigation/CustomerBottomNavbar";

//mui
import { Hidden, Box } from "@mui/material";

//context
import { ToggleDrawerContextProvider } from "../context/ToggleDrawerProvider";
import { useThemeContext } from "../context/ThemeModeProvider";

export default function CustomerLayout() {
  const { darkMode } = useThemeContext();
  return (
    <Box sx={{ backgroundColor: darkMode ? "#121212" : "fff" }}>
      <Hidden smDown>
        <MainNavbar />
      </Hidden>
      <Hidden smUp>
        <ToggleDrawerContextProvider>
          <MainNavbarOnSmallScreens />
          <ShopsDrawerOnSmallScreens />
          <CustomerBottomNavbar />
        </ToggleDrawerContextProvider>
      </Hidden>
      <Outlet /> {/* ShopsLayout || cart || customerProfile || searchResults */}
    </Box>
  );
}
