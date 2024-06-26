//components
import SellerNavbar from "../components/sellerShop/SellerNavbar";

//router
import { Outlet } from "react-router-dom";

//mui
import { Toolbar } from "@material-ui/core";
import { Box } from "@mui/material";
import AddProductProvider from "../context/AddProductProvider";

export default function SellerShopLayout() {
  return (
    <AddProductProvider>
      <Box sx={{ display: "flex" }}>
        <SellerNavbar />
        <Box component="main" sx={{ flexGrow: 1, minHeight: "100vh" }}>
          <Toolbar />
          <Outlet /> {/*SellerProducts*/}
        </Box>
      </Box>
    </AddProductProvider>
  );
}
