//mui
import { Typography } from "@material-ui/core";
import { Star } from "@mui/icons-material";
import { Box } from "@mui/material";

export default function ShopRatingProduct({ shopItemRating, ...styles }) {
  return (
    <Box sx={{ ...styles }}>
      <Star color="warning" fontSize="small" />
      <Typography className="shop-item-rating">
        {shopItemRating ? shopItemRating : 0}/5
      </Typography>
    </Box>
  );
}
