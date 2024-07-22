//router
import { Outlet } from "react-router-dom";

//components
import ShopsDrawer from "../components/Shops/ShopsDrawer";

//mui
import { Hidden } from "@mui/material";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import { useThemeContext } from "../context/ThemeModeProvider";

export default function ShopsLayout() {
  const { darkMode } = useThemeContext();
  return (
    <>
      <Box
        sx={{ display: "flex", backgroundColor: darkMode ? "#121212" : "#fff" }}
      >
        <CssBaseline />
        <Hidden smDown>
          <ShopsDrawer />
        </Hidden>

        <Box component="main" sx={{ flexGrow: 1, minHeight: "100vh" }}>
          <Toolbar />
          <Outlet /> {/*ShopsItems || shops */}
        </Box>
      </Box>
    </>
  );
}
