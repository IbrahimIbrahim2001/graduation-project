import { KeyRounded } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

export default function SecretNumberBox({ darkMode }) {
  const { privateNumber } = useSelector((state) => state.auth?.user);

  return (
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
      <Typography>Your Secret Bank Code:</Typography>
      <Button
        type="button"
        sx={{
          borderRadius: "12px",
          fontWeight: "bold",
        }}
        variant="outlined"
        color="success"
        disableTouchRipple
        startIcon={<KeyRounded />}
      >
        <Typography>{privateNumber}</Typography>
      </Button>
    </Box>
  );
}
