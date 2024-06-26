//mui
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function AddNewProductSnackbarSuccess({
  successMessage,
  handleClose,
}) {
  return (
    <Snackbar
      open={successMessage}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity="success"
        variant="filled"
        sx={{ width: "100%" }}
      >
        Added product successfully
      </Alert>
    </Snackbar>
  );
}
