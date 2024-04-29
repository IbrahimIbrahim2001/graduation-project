//mui
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";

//hooks
import useFetchShops from "../../hooks/useFetchShops";

//component
import Shop from "./shop/Shop";
import ShopsDrawerSkeleton from "./ShopsDrawerSkeleton";

const drawerWidth = 260;
export default function ShopsDrawer() {
  const { isLoading, isError, data: shops } = useFetchShops();
  if (isLoading) return <ShopsDrawerSkeleton />;
  if (isError) return <div>Error...</div>;
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: "auto", paddingX: 2 }}>
          <List>
            {/* shops.data.stores.map */}
            {shops?.data.map((shop) => (
              //to avoid any errors "toggle drawer is not a function" fixed by toggleDrawer={() => false}
              <Shop key={shop.id} shop={shop} toggleDrawer={() => false} />
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
}
