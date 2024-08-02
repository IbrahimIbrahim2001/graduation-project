import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import { Box, Button, Modal, Typography } from "@mui/material";

//redux toolkit
// import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

//for styled box
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "280px", sm: "300px" },
  height: "150px",
  borderRadius: "12px",
  px: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-around",
};

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? "#fff" : "rgba(17, 25, 40, 1)",
  color: theme.palette.mode === "light" ? "rgba(17, 25, 40, 1)" : "#fff",
}));

export default function ConfirmPayment({ openModal, handleClose }) {
  const bill = useSelector((state) => state.cart.bill);
  return (
    <Modal open={openModal} onClose={handleClose}>
      <StyledBox sx={style}>
        <Typography variant="h6" component="h2">
          Your Bill is: {bill} SYP
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Button
            type="button"
            variant="outlined"
            color="success"
            endIcon={<CheckIcon />}
            // onClick={handleLogout}
            sx={{ fontWeight: "bold" }}
          >
            confirm
          </Button>
          <Button
            type="button"
            variant="outlined"
            color="error"
            endIcon={<CloseIcon />}
            onClick={handleClose}
            sx={{ fontWeight: "bold" }}
          >
            decline
          </Button>
        </Box>
      </StyledBox>
    </Modal>
  );
}
