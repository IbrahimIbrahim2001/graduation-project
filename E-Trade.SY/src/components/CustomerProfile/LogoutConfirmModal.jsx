import { Button, Modal, Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

//redux toolkit
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice/authSlice";

//react router
import { useNavigate } from "react-router-dom";

//for styled box
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { xs: "250px", sm: "300px" },
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

export default function LogoutConfirmModal({
  openModal,
  handleClose,
  darkMode,
}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  return (
    <Modal open={openModal} onClose={handleClose}>
      <StyledBox sx={style}>
        <Typography variant="h6" component="h2">
          Are you sure 🥺🥹?
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
            variant={darkMode ? "outlined" : "contained"}
            color="success"
            endIcon={<CheckIcon />}
            onClick={() => {
              localStorage.removeItem("token");
              dispatch(logout);
              navigate("../../login", { replace: true });
            }}
          >
            confirm
          </Button>
          <Button
            type="button"
            variant={darkMode ? "outlined" : "contained"}
            color="error"
            endIcon={<CloseIcon />}
            onClick={handleClose}
          >
            decline
          </Button>
        </Box>
      </StyledBox>
    </Modal>
  );
}
