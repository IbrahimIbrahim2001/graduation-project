//mui
import { Box, Typography } from "@mui/material";

export default function SellerShopQuantity({ quantity }) {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 5,
        right: 5,

        borderRadius: "12px",
        backgroundColor: "#2200FF",
        color: "#fff",
        padding: 1,
      }}
    >
      <Typography>quantity: {quantity}</Typography>
    </Box>
  );
}
