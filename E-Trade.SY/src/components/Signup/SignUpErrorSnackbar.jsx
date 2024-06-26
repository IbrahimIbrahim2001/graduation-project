//mui
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SignUpErrorSnackbar({ errorMessage, handleClose }) {
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
        This email exists already, try to sigin please...
      </Alert>
    </Snackbar>
  );
}
