//mui
import Box from "@mui/material/Box";

import BottomNavigationList from "../../main/BottomNavigationList";
import CustomerBottomNavElements from "./CustomerNavElements";

export default function CustomerBottomNavbar() {
  const navigationItems = CustomerBottomNavElements();
  return (
    <>
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
        <BottomNavigationList navigationItems={navigationItems} />
      </Box>
    </>
  );
}
