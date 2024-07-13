//mui
import { withStyles } from "@material-ui/core/styles";
import { Box, SwipeableDrawer } from "@mui/material";

//component
import ShopAddToCartBtn from "./ShopAddToCartBtn";
import MobileModalPuller from "./MobileModalPuller";
import { StyledBox } from "./ShopItemModal";

const addToCartBtnStyles = {
  mx: 2,
  mb: 2,
  width: "92%",
};

export default function ShopItemModalMobile({
  shopItem,
  openModal,
  handleOpen,
  handleClose,
  children,
}) {
  return (
    <StyledSwipeableDrawer
      anchor="bottom"
      open={openModal}
      onClose={handleClose}
      onOpen={handleOpen}
      swipeAreaWidth={0} // to avoid any problems with BottomNavigation
      disableSwipeToOpen={false}
    >
      <StyledBox
        sx={{
          height: 500,
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <MobileModalPuller />
        <Box sx={{ px: 2, pt: 6, pb: 2 }}>{children}</Box>
        <ShopAddToCartBtn shopItemId={shopItem.id} {...addToCartBtnStyles} />
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
