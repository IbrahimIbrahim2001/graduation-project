//mui
import { Close } from "@mui/icons-material";
import { Box, IconButton, Modal } from "@mui/material";
import Typography from "@mui/material/Typography";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,

  display: "flex",
  flexDirection: "column",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: "0 8px 12px 0 rgba(31, 38, 135, 0.37)",
  p: 4,
};

export default function AddProductModal({ openModal, setOpenModal, children }) {
  return (
    <Modal
      open={openModal}
      onClose={() => {
        setOpenModal(false);
      }}
    >
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
            Add Product:
          </Typography>
          <IconButton
            onClick={() => {
              setOpenModal(false);
            }}
            sx={{
              backgroundColor: "#1976d2",
              ":hover": { backgroundColor: "#ff4d4d" },
            }}
          >
            <Close sx={{ fontSize: "28px", color: "#fff" }} />
          </IconButton>
        </Box>
        {children}
      </Box>
    </Modal>
  );
}
