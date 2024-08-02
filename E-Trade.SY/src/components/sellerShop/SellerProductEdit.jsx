//mui
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
// import { useState } from "react";

export default function SellerProductEdit({ onClick }) {
  return (
    <IconButton
      onClick={onClick}
      variant="contained"
      sx={{
        position: "absolute",
        bottom: 90,
        left: 10,
        display: "flex",
        alignItems: "center",
        boxShadow: "0 8px 25px 0 rgba(31, 38, 135, 0.37)",
        color: "#121212",
        backgroundColor: "#f2f2f2",
        borderRadius: "12px",
        paddingX: 1,
        ":hover": {
          color: "#2200FF",
          backgroundColor: "#f2f2f2",
        },
      }}
    >
      <EditIcon fontSize="medium" />
    </IconButton>
  );
}
