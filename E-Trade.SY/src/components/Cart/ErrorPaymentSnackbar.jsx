//mui
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function ErrorPaymentSnackbar({
  errorMessage,
  handleCloseSnackbar,
}) {
  return (
    <Snackbar
      open={errorMessage}
      autoHideDuration={6000}
      onClose={handleCloseSnackbar}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
    >
      <Alert
        onClose={handleCloseSnackbar}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        please contact your bank to check you balance
      </Alert>
    </Snackbar>
  );
}
