//mui
import { Close } from "@mui/icons-material";
import { Box, Hidden, IconButton, Modal, Typography } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";
import { SwipeableDrawer } from "@mui/material";
import { StyledBox } from "../Shops/shop/ShopItemModal";

//components
import EditProductForm from "./EditProductForm";
import DeleteProductFromStore from "./DeleteProductFromStore";

//UI
import MobileModalPuller from "../Shops/shop/MobileModalPuller";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  maxHeight: 650,
  overflowY: "scroll",
  "::-webkit-scrollbar": {
    display: "none",
  },
  display: "flex",
  flexDirection: "column",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: "0 8px 12px 0 rgba(31, 38, 135, 0.37)",
  p: 4,
};

//must be two components
export default function EditProductModal({
  openEditModal,
  onClose,
  shopItem,
  onOpen,
}) {
  return (
    <>
      <Hidden smDown>
        <Modal open={openEditModal} onClose={onClose}>
          <Box sx={style}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: 2,
              }}
            >
              <Typography variant="h5" color={"primary"} fontWeight={"600"}>
                Update Product:
              </Typography>
              <IconButton
                onClick={onClose}
                sx={{
                  backgroundColor: "#1976d2",
                  ":hover": { backgroundColor: "#ff4d4d" },
                }}
              >
                <Close sx={{ fontSize: "28px", color: "#fff" }} />
              </IconButton>
            </Box>
            <EditProductForm shopItem={shopItem} onClose={onClose} />
            <DeleteProductFromStore
              productId={shopItem.id}
              StoreId={shopItem.StoreId}
              onClose={onClose}
            />
          </Box>
        </Modal>
      </Hidden>
      <Hidden smUp>
        <StyledSwipeableDrawer
          anchor="bottom"
          open={openEditModal}
          onClose={onClose}
          onOpen={onOpen}
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
            <Box my={6}>
              <EditProductForm shopItem={shopItem} onClose={onClose} />
              <DeleteProductFromStore
                productId={shopItem.id}
                StoreId={shopItem.StoreId}
                onClose={onClose}
              />
            </Box>
          </StyledBox>
        </StyledSwipeableDrawer>
      </Hidden>
    </>
  );
}

const StyledSwipeableDrawer = withStyles({
  root: {
    "& .MuiPaper-root": {
      borderRadius: "12px 12px 0 0 ",
    },
  },
})(SwipeableDrawer);
