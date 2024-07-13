//soon...for globally used,  not tested yet
//mui
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

export default function SnackbarComponent({ message, handleClose, open }) {
  return (
    <Snackbar
      open={open}
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
        {message}
      </Alert>
    </Snackbar>
  );
}

// do I have to create a custom hook since it is repeated ? const {message, handleMessageText, open, handleClose} = useHandleSnackbar();// remember
// handleMessageText => setMessage(msg), handleCLose => setOpen(false);
