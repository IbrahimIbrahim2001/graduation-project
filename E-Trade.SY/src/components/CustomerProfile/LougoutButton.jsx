//react hooks
import { useState } from "react";

//mui
import { Box, Button, Typography } from "@mui/material";

//component
import LogoutConfirmModal from "./LogoutConfirmModal";

export default function LougoutButton({ darkMode }) {
  const [openModal, setOpenModal] = useState(false);
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
        <Typography>Logout from your account ?</Typography>
        <Button
          onClick={() => setOpenModal(true)}
          type="button"
          sx={{
            borderRadius: "12px",
            fontWeight: "bold",
          }}
          variant="outlined"
          color="error"
        >
          logout
        </Button>
      </Box>
      <LogoutConfirmModal
        darkMode={darkMode}
        openModal={openModal}
        handleClose={() => setOpenModal(false)}
      />
    </>
  );
}
