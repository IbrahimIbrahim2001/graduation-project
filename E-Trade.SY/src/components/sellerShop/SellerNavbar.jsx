//mui
import { Tooltip } from "@material-ui/core";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Hidden } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

//router
import { NavLink } from "react-router-dom";

//react hooks
import { useEffect, useState } from "react";
import SearchBar from "../main/SearchBar";
import { NavItems } from "../UI/SellerNavigation/sellerNavElements";

//components
// import BalanceComponent from "../UI/BalanceComponent";

export default function SellerNavbar() {
  const [showShadow, setShowShadow] = useState(false);
  const { darkMode, toggleTheme } = useThemeContext();

  // const BalanceComponentStyles = useMemo(() => {
  //   return {
  //     position: "relative",
  //     right: "16vw",
  //     top: 0,
  //     borderRadius: "12px",
  //     // backgroundColor: darkMode ? "" :  "#f2f2f2",
  //     boxShadow: darkMode
  //       ? "0 0 5px 0 #2200ff"
  //       : "0 8px 25px 0 rgba(31, 38, 135, 0.37)",
  //     color: darkMode ? "#f2f2f2" : "#121212",
  //     flexDirection: "row-reverse",
  //     justifyContent: "space-between",
  //     paddingx: 2,
  //     minWidth: "100px",
  //     maxWidth: "200px",
  //   };
  // }, [darkMode]);

  const navItems = NavItems();

  const checkScroll = () => {
    if (window.scrollY > 0) {
      setShowShadow(true);
    } else {
      setShowShadow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);

    return () => {
      window.removeEventListener("scroll", checkScroll);
    };
  }, []);
  return (
    <>
      <AppBar
        position="fixed"
        className="app-bar"
        sx={{
          paddingX: { sm: 2, md: 7 },
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: showShadow
            ? "0 8px 32px 0 rgba(31, 38, 135, 0.37)"
            : "none",
          backgroundColor: "transparent",
          backgroundImage: "none",
        }}
      >
        <Toolbar>
          <Hidden smDown>
            <IconButton
              size="large"
              edge="start"
              aria-label="menu"
              sx={{ sm: { mr: 2 } }}
            >
              <AddShoppingCartIcon sx={{ color: "#2200FF" }} />
            </IconButton>
          </Hidden>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, fontWeight: "bolder" }}
            color="#2200FF"
          >
            E-Mart
          </Typography>
          {/* <BalanceComponent {...BalanceComponentStyles} /> */}
          {navItems.map((link, index) => (
            <Tooltip key={index} title={link.title} arrow>
              <NavLink to={link.to} replace={true} className="navbar-link">
                <IconButton onClick={link.onClick}>{link.icon}</IconButton>
              </NavLink>
            </Tooltip>
          ))}
          <IconButton onClick={toggleTheme} sx={{ paddingLeft: 1 }}>
            {darkMode === false ? <Brightness4 /> : <Brightness7 />}
          </IconButton>

          <SearchBar />
        </Toolbar>
      </AppBar>
    </>
  );
}
