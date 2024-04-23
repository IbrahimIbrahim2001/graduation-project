//react hooks

//mui
import { Typography } from "@material-ui/core";
import { Box, Modal } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: "0 8px 12px 0 rgba(31, 38, 135, 0.37)",
  //   boxShadow: 24,
  p: 4,
};

export default function ShopItemModal({ shopItem, openModal, setOpenModal }) {
  return (
    <div>
      {" "}
      <Modal
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {shopItem.name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {shopItem.price}
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
