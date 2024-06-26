//mui
import { Typography } from "@material-ui/core";
import { Star } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function ShopRatingProduct({ shopItemRating }) {
  return (
    <Box
      sx={{
        position: "absolute",
        bottom: 90,
        right: 5,
        display: "flex",
        alignItems: "center",
        backgroundColor: "#fff",
        boxShadow: "0 8px 25px 0 rgba(31, 38, 135, 0.37)",
        color: "#121212",
        borderRadius: "12px",
        paddingX: 1,
      }}
    >
      <Star color="warning" fontSize="small" />
      <Typography className="shop-item-rating">
        {shopItemRating ? shopItemRating : 0}/5
      </Typography>
    </Box>
  );
}
