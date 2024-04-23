import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import { Toolbar } from "@mui/material";

import useFetchShops from "../../hooks/useFetchShops";
import Shop from "../Shops/Shop";
import ShopsDrawerSkeleton from "./ShopsDrawerSkeleton";
export default function ShopsDrawerOnSmallScreens({ open, toggleDrawer }) {
  const { isLoading, isError, data: shops } = useFetchShops();
  if (isLoading) return <ShopsDrawerSkeleton />;
  if (isError) return <div>Error...</div>;

  const DrawerList = (
    <Drawer
      variant="permanent"
      sx={{
        width: 260,
        borderRadius: `50px`,
        flexShrink: 0,

        [`& .MuiDrawer-paper`]: {
          width: 260,
          boxSizing: "border-box",
        },
      }}
    >
      <Toolbar />
      <Box sx={{ overflow: "auto", paddingX: 2 }}>
        <List>
          {shops?.data.map((shop) => (
            <Shop key={shop.id} shop={shop} toggleDrawer={toggleDrawer} />
          ))}
        </List>
      </Box>
    </Drawer>
  );

  return (
    <Drawer open={open} onClose={toggleDrawer(false)}>
      {DrawerList}
    </Drawer>
  );
}
