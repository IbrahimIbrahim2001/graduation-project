//mui
import { Hidden, Typography } from "@material-ui/core";
import { Box, Modal } from "@mui/material";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { styled } from "@mui/material/styles";
import { grey } from "@mui/material/colors";
import { Star } from "@mui/icons-material";
import { withStyles } from "@material-ui/core/styles";

//for styled box
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 575,
  height: 300,
  display: "flex",
  borderRadius: "12px",
  boxShadow: "0 8px 12px 0 rgba(31, 38, 135, 0.37)",
  p: 4,
};

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? "#fff" : "rgba(17, 25, 40, 1)",
}));

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[200],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
}));

export default function ShopItemModal({ shopItem, openModal, setOpenModal }) {
  return (
    <>
      <Hidden xsDown>
        <Modal
          open={openModal}
          onClose={() => setOpenModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <StyledBox sx={style}>
            <Box
              component="img"
              src={shopItem.photo_data}
              // src={`http://localhost:3000/images/` + shopItem.photo_data}
              sx={{ borderRadius: "12px", marginRight: 10 }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                height: 200,
              }}
            >
              <Typography
                className="shop-item-name"
                sx={{ overflow: "hidden" }}
              >
                product: {shopItem.name}
              </Typography>
              <Typography className="shop-tile">
                store: {shopItem.StoreName}
              </Typography>
              <Typography className="shop-item-price">
                <span>price: </span> {shopItem.price} S.P.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Typography className="shop-item-modal-rating">
                  <span>rating: </span>
                  {shopItem.avg ? shopItem.avg : 0}/5
                </Typography>
                <Star color="warning" fontSize="small" />
              </Box>
            </Box>
          </StyledBox>
        </Modal>
      </Hidden>
      <Hidden smUp>
        <StyledSwipeableDrawer
          anchor="bottom"
          open={openModal}
          onClose={() => setOpenModal(false)}
          onOpen={() => setOpenModal(true)}
          swipeAreaWidth={56}
          disableSwipeToOpen={false}
          ModalProps={{
            keepMounted: true,
          }}
        >
          <StyledBox
            sx={{
              style,
              py: 4,
              px: 2,
              border: "1px solid rgba(255, 255, 255, 0.125)",
              height: 500,
            }}
          >
            <Puller />
            <Box
              component="img"
              src={shopItem.photo_data}
              // image={`http://localhost:3000/images/` + shopItem.photo_data}
              sx={{
                borderRadius: "12px",
                marginRight: 3,
                height: 180,
              }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                className="shop-item-name"
                sx={{ overflow: "hidden" }}
              >
                product: {shopItem.name}
              </Typography>
              <Typography className="shop-tile">
                store: {shopItem.StoreName}
              </Typography>
              <Typography className="shop-item-price">
                <span>price: </span> {shopItem.price} S.P.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <Typography className="shop-item-modal-rating">
                  <span>rating: </span>
                  {shopItem.avg ? shopItem.avg : 0}/5
                </Typography>
                <Star color="warning" fontSize="small" />
              </Box>
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
