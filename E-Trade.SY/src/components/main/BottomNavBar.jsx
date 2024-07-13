//react hooks
import { useEffect, useState, useCallback } from "react";

//router
import { useHref, useNavigate } from "react-router-dom";

//mui
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Badge from "@mui/material/Badge";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";

import ShopsDrawerOnSmallScreens from "../Shops/ShopsDrawerOnSmallScreens";

const SHOPS = "shops";
const CART = "cart";
const CUSTOMERPROFILE = "customer-profile";

export default function BottomNavBar() {
  const [value, setValue] = useState(
    JSON.parse(window.localStorage.getItem("bottomNavValue"))
  );
  const [open, setOpen] = useState(false); //use context api

  const href = useHref();

  const navigate = useNavigate();

  //use context api
  const toggleDrawer = (newOpen) => () => {
    setOpen(() => newOpen);
  };

  const navigationItems = [
    {
      label: SHOPS,
      icon: <StorefrontIcon />,
      onClick: toggleDrawer(true),
    },
    {
      label: CART,
      icon: (
        <Badge badgeContent={7} color="warning">
          <ShoppingCartIcon />
        </Badge>
      ),
      onClick: () => navigate(CART, { replace: true }),
    },
    {
      label: "profile",
      icon: <AccountCircleIcon />,
      onClick: () => navigate(CUSTOMERPROFILE, { replace: true }),
    },
  ];

  const handleChange = useCallback(() => {
    if (href.includes(SHOPS)) {
      setValue(0);
      window.localStorage.setItem("bottomNavValue", 0);
    } else if (href.includes(CART)) {
      setValue(1);
      window.localStorage.setItem("bottomNavValue", 1);
    } else if (href.includes(CUSTOMERPROFILE)) {
      setValue(2);
      window.localStorage.setItem("bottomNavValue", 2);
    }
  }, [href]);

  useEffect(() => {
    handleChange();
  }, [handleChange]);

  return (
    <>
      <ShopsDrawerOnSmallScreens open={open} toggleDrawer={toggleDrawer} />
      <Box
        sx={{
          position: "fixed",
          bottom: 0,
          left: 0,
          right: 0,
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          zIndex: 1,
        }}
      >
        <BottomNavigation showLabels value={value} onChange={handleChange}>
          {navigationItems.map((item, index) => (
            <BottomNavigationAction
              key={index}
              label={item.label}
              icon={item.icon}
              onClick={item.onClick}
            />
          ))}
        </BottomNavigation>
      </Box>
    </>
  );
}
