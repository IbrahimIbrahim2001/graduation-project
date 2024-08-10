//react hooks

//mui
import { withStyles } from "@material-ui/core/styles";
import { Box, SwipeableDrawer } from "@mui/material";
import AprioriList from "../AprioriList";

//component
import MobileModalPuller from "./MobileModalPuller";
import ShopAddToCartBtn from "./ShopAddToCartBtn";
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
      allowSwipeInChildren
    >
      <StyledBox
        sx={{
          maxHeight: 500,
          overflow: "scroll",
          border: "1px solid rgba(255, 255, 255, 0.125)",
        }}
      >
        <MobileModalPuller />
        <Box sx={{ px: 2, pt: 6, pb: 2 }}>{children}</Box>
        <ShopAddToCartBtn
          shopItemPrice={shopItem.price}
          shopItemId={shopItem.id}
          {...addToCartBtnStyles}
        />
        <Box
          sx={{
            p: "6 2 2",
          }}
        >
          <AprioriList shopItemId={shopItem.id} />
        </Box>
      </StyledBox>
    </StyledSwipeableDrawer>
  );
}

const StyledSwipeableDrawer = withStyles({
  root: {
    "& .MuiPaper-root": {
      borderRadius: "12px 12px 0 0 ",
      zIndex: 1000,
    },
  },
})(SwipeableDrawer);
