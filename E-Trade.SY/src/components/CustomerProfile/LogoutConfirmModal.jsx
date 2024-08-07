import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, Modal, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

//redux toolkit
import { useDispatch } from "react-redux";
import { logout } from "../../features/authSlice/authSlice";

//react router
import { useNavigate } from "react-router-dom";
import { useLogOut } from "../../hooks/useSignIn";

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

export default function LogoutConfirmModal({ openModal, handleClose }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { mutate } = useLogOut();

  const handleLogout = () => {
    dispatch(logout());
    mutate();
    navigate("../../login", { replace: true });
  };

  return (
    <Modal open={openModal} onClose={handleClose}>
      <StyledBox sx={style}>
        <Typography variant="h6" component="h2">
          Are you sure?
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
            onClick={handleLogout}
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
