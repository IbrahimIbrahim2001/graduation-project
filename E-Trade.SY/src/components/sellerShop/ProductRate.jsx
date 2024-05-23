//mui

import { Star } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

export default function productRate({ productRate }) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 90,
        right: 5,
        display: "flex",
        alignItems: "center",

        backgroundColor: "#fff",
        color: "#121212",
        borderRadius: "12px",
        paddingX: 1,
      }}
    >
      <Star color="warning" fontSize="small" />
      <Typography>{productRate ? productRate : 0}/5</Typography>
    </Box>
  );
}
