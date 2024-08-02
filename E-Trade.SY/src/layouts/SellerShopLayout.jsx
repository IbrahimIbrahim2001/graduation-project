//components
import MainNavbarOnSmallScreens from "../components/main/MainNavbarOnSmallScreens";
import SellerNavbar from "../components/sellerShop/SellerNavbar";

//router
import { Outlet } from "react-router-dom";

//mui
import { Hidden } from "@material-ui/core";
import { Box, CssBaseline } from "@mui/material";

//context
import SellerBottomNavbar from "../components/UI/SellerNavigation/SellerBottomNavbar";
import AddProductProvider from "../context/AddProductProvider";
import { useThemeContext } from "../context/ThemeModeProvider";

export default function SellerShopLayout() {
  const { darkMode } = useThemeContext();
  return (
    <>
      <CssBaseline />
      <AddProductProvider>
        <Box
          sx={{
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
              minHeight: "100vh",
            }}
          >
            <Outlet />
            {/*SellerProducts || SellerProfile || SearchResultsPage|| SellerNotification || shopsLayout('not availabe for now)*/}
          </Box>
        </Box>
      </AddProductProvider>
    </>
  );
}
