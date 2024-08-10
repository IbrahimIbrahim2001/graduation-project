import { Modal, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

//redux toolkit
import { useSelector } from "react-redux";
import PayForm from "./PayForm";

//for styled box
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "280px", sm: "300px" },
  height: "200px",
  borderRadius: "12px",
  px: 2,
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
};

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? "#fff" : "rgba(17, 25, 40, 1)",
  color: theme.palette.mode === "light" ? "rgba(17, 25, 40, 1)" : "#fff",
}));

export default function ConfirmPayment({
  openModal,
  handleClose,
  handleErrorMessage,
}) {
  const bill = useSelector((state) => state.cart.bill);
  return (
    <Modal open={openModal} onClose={handleClose}>
      <StyledBox sx={style}>
        <Typography variant="h6" component="h2">
          Your Bill is: {bill} SYP
        </Typography>
        <PayForm
          bill={bill}
          handleClose={handleClose}
          handleErrorMessage={handleErrorMessage}
        />
      </StyledBox>
    </Modal>
  );
}
