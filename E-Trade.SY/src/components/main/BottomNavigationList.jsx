//react hooks
import { useCallback, useEffect, useState } from "react";

//router
import { useHref } from "react-router-dom";

//mui
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

const SHOPS = "shops";
const CART = "cart";
const CUSTOMERPROFILE = "customer-profile";
const SELLLERSHOP = "my-products";
const SELLERPROFILE = "seller-profile";

export default function BottomNavigationList({ navigationItems }) {
  const [value, setValue] = useState(
    JSON.parse(window.localStorage.getItem("bottomNavValue"))
  );

  const href = useHref();

  const handleChange = useCallback(() => {
    if (href.includes(SHOPS) || href.includes(SELLLERSHOP)) {
      setValue(0);
      window.localStorage.setItem("bottomNavValue", 0);
    } else if (href.includes(CART)) {
      setValue(1);
      window.localStorage.setItem("bottomNavValue", 1);
    } else if (href.includes(CUSTOMERPROFILE) || href.includes(SELLERPROFILE)) {
      setValue(2);
      window.localStorage.setItem("bottomNavValue", 2);
    } else {
      setValue(null);
      window.localStorage.setItem("bottomNavValue", null);
    }
  }, [href]);

  useEffect(() => {
    handleChange();
  }, [handleChange]);
  return (
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
  );
}
