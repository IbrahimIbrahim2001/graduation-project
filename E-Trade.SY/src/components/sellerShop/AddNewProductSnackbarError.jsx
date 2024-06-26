//mui
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function AddNewProductSnackbarSuccess({
  errorMessage,
  handleClose,
}) {
  return (
    <Snackbar
      open={errorMessage}
      autoHideDuration={6000}
      onClose={handleClose}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        Sorry, we can&apos;t add your product
      </Alert>
    </Snackbar>
  );
}
