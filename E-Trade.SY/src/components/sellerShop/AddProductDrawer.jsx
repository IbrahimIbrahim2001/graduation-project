//mui
import { withStyles } from "@material-ui/core/styles";
import { Box, SwipeableDrawer } from "@mui/material";
import { StyledBox } from "../Shops/shop/ShopItemModal";

//
import MobileModalPuller from "../Shops/shop/MobileModalPuller";

export default function AddProductDrawer({
  openModal,
  setOpenModal,
  children,
}) {
  return (
    <StyledSwipeableDrawer
      anchor="bottom"
      open={openModal}
      onClose={() => {
        setOpenModal(false);
      }}
      onOpen={() => setOpenModal(true)}
      swipeAreaWidth={0} // to avoid any problems with BottomNavigation
      disableSwipeToOpen={false}
      allowSwipeInChildren
    >
      <StyledBox
        sx={{
          maxHeight: 500,
          overflow: "auto",
          paddingX: 2,
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <MobileModalPuller />
        <Box my={6}>{children}</Box>
      </StyledBox>
    </StyledSwipeableDrawer>
  );
}

const StyledSwipeableDrawer = withStyles({
  root: {
    "& .MuiPaper-root": {
      borderRadius: "12px 12px 0 0 ",
    },
  },
})(SwipeableDrawer);
