//mui
import { Box, Button, Modal, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

//component
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import QrReaderComponent from "./QrReader.component";

//react hooks
import { useState } from "react";

//for styled box
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "100%", sm: "300px" },
  height: { xs: "100%", sm: "500px" },
  borderRadius: "12px",
  px: 2,
  py: 2,
  display: "flex",
  flexDirection: "column",
};

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? "#fff" : "rgba(17, 25, 40, 1)",
  color: theme.palette.mode === "light" ? "rgba(17, 25, 40, 1)" : "#fff",
}));

export default function CameraToolBar({ darkMode }) {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => {
    setOpenModal(true);
  };

  const handleClose = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Box
        className={`item ${darkMode ? "dark" : "light"}`}
        sx={{
          minHeight: "133.6px",
          mb: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Typography>Open QR Reader to scan Products:</Typography>
        <Button
          onClick={handleOpen}
          type="button"
          sx={{
            borderRadius: "12px",
            fontWeight: "bold",
          }}
          variant="outlined"
          color="info"
        >
          <CameraAltIcon />
          open camera
        </Button>
      </Box>
      {/* Modal */}
      <Modal open={openModal} onClose={handleClose}>
        <StyledBox sx={style}>
          <QrReaderComponent handleClose={handleClose} />
        </StyledBox>
      </Modal>
    </>
  );
}
