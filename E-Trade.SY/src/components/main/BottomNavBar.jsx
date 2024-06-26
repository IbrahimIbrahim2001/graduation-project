//react hooks
import { useState } from "react";

//router
import { useNavigate } from "react-router-dom";

//mui
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Box from "@mui/material/Box";
import Badge from "@mui/material/Badge";

import ShopsDrawerOnSmallScreens from "../Shops/ShopsDrawerOnSmallScreens";

export default function BottomNavBar() {
  const [value, setValue] = useState(
    JSON.parse(localStorage.getItem("bottomNavValue")) || 0
  );

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const toggleDrawer = (newOpen) => () => {
    setOpen(() => newOpen);
  };

  const navigationItems = [
    {
      label: "shops",
      icon: <StorefrontIcon />,
      onClick: toggleDrawer(true),
    },
    {
      label: "cart",
      icon: (
        <Badge badgeContent={7} color="warning">
          <ShoppingCartIcon />
        </Badge>
      ),
      onClick: () => navigate("cart", { replace: true }),
    },
    {
      label: "profile",
      icon: <AccountCircleIcon />,
      onClick: () => navigate("customer-profile", { replace: true }),
    },
  ];

  const handleChange = (_event, newValue) => {
    setValue(newValue);
    localStorage.setItem("bottomNavValue", newValue);
  };

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
              onChange={handleChange}
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
