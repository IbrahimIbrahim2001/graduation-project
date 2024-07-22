//components
import MainNavbarOnSmallScreens from "../components/main/MainNavbarOnSmallScreens";
import SellerNavbar from "../components/sellerShop/SellerNavbar";

//router
import { Outlet } from "react-router-dom";

//mui
import { Hidden, Toolbar } from "@material-ui/core";
import { Box } from "@mui/material";

//context
import SellerBottomNavbar from "../components/UI/SellerBottomNavbar/SellerBottomNavbar";
import AddProductProvider from "../context/AddProductProvider";
import { useThemeContext } from "../context/ThemeModeProvider";

export default function SellerShopLayout() {
  const { darkMode } = useThemeContext();
  return (
    <AddProductProvider>
      <Box
        sx={{
          display: "flex",
          backgroundColor: darkMode ? "#121212" : "#fff",
        }}
      >
        <Hidden xsDown>
          <SellerNavbar />
        </Hidden>
        <Hidden smUp>
          <MainNavbarOnSmallScreens />
          <SellerBottomNavbar />
        </Hidden>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            minHeight: "100vh",
          }}
        >
          <Toolbar />
          <Outlet />
          {/*SellerProducts || SellerProfile || SearchResultsPage|| shopsLayout('not availabe for now)*/}
        </Box>
      </Box>
    </AddProductProvider>
  );
}
