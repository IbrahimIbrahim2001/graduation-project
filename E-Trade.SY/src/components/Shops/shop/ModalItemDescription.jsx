//mui
import { Box, Typography } from "@mui/material";

import ShopRatingProduct from "../shop/ShopRatingProduct";

const ratingStyles = {
  display: "flex",
  alignItems: "center",
  flexDirection: "row-reverse",
};

export default function ModalItemDescription({ shopItem, shopName }) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        paddingX: 1,
      }}
    >
      <Typography sx={{ fontWeight: "bold" }}>Description: </Typography>

      <Typography sx={{ overflow: "hidden" }}>
        product: {shopItem.name}
      </Typography>
      <Typography>store: {shopName || shopItem?.Store.StoreName}</Typography>
      <Typography>
        <span>price: </span> {shopItem.price} S.P.
      </Typography>
      {/* need to review after testing */}
      {shopItem.kind && <Typography>Kind: {shopItem.kind}</Typography>}
      {shopItem.color && <Typography>color: {shopItem.color}</Typography>}
      {shopItem.size && <Typography>size: {shopItem.size}</Typography>}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <span>rating: </span>
        <ShopRatingProduct
          shopItemRating={shopItem.AvgOfRating}
          {...ratingStyles}
        />
      </Box>
    </Box>
  );
}
