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
          height: { xs: 100, sm: 100, md: 100 },
          mb: 3,
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
      {openModal && (
        <LogoutConfirmModal
          darkMode={darkMode}
          openModal={openModal}
          handleClose={() => setOpenModal(false)}
        />
      )}
    </>
  );
}
