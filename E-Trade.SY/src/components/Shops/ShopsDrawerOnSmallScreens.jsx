//mui
import { ArrowBackIos } from "@mui/icons-material";
import { SwipeableDrawer, Toolbar, Typography, Box, List } from "@mui/material";

//hooks
import useFetchShops from "../../hooks/useFetchShops";

//components
import Shop from "../Shops/shop/Shop";
import ShopsDrawerSkeleton from "./ShopsDrawerSkeleton";

//react router
import { NavLink } from "react-router-dom";

//context
import { useToggleDarwerContext } from "../../context/ToggleDrawerProvider";
import { useThemeContext } from "../../context/ThemeModeProvider";

export default function ShopsDrawerOnSmallScreens() {
  const { isLoading, isError, data: shops } = useFetchShops();
  const { open, toggleDrawer } = useToggleDarwerContext();
  const { darkMode } = useThemeContext();
  if (isLoading) return <ShopsDrawerSkeleton />;
  if (isError) return <div>Error...</div>;

  const DrawerList = (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundColor: darkMode ? "rgba(17, 25, 40, 1)" : "#f2f2f2",
      }}
    >
      <Toolbar />
      <Box
        sx={{
          overflow: "auto",
          paddingX: 2,
          width: 260,
        }}
      >
        <List>
          <NavLink
            to="./shops"
            replace={true}
            onClick={() => toggleDrawer(false)}
            className="all-shops-nav-link"
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                paddingX: 2,
              }}
            >
              <ArrowBackIos fontSize="small" />
              <Typography>All shops</Typography>
            </Box>
          </NavLink>
          {shops?.data.stores.map((shop) => (
            <Shop key={shop.id} shop={shop} toggleDrawer={toggleDrawer} />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <SwipeableDrawer
      anchor="left"
      swipeAreaWidth={60}
      open={open}
      onOpen={() => toggleDrawer(true)}
      onClose={() => toggleDrawer(false)}
      ModalProps={{
        keepMounted: true,
      }}
    >
      {DrawerList}
    </SwipeableDrawer>
  );
}
