//mui
import { IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box } from "@mui/material";

//hooks
import { useMutateCart } from "../../../hooks/useFetchShopCart";

export default function ShopAddToCartBtn({
  shopItemId,
  handleClose = () => {}, //optional params only used with QrReaderComponent
  ...styles
}) {
  const { mutate } = useMutateCart();
  return (
    <Box
      component={IconButton}
      sx={{
        ...styles,
        backgroundColor: "#2200FF",
        borderRadius: "12px",
        ":hover": {
          backgroundColor: "#2200FF",
        },
      }}
      onClick={() => {
        mutate(shopItemId);
        handleClose();
      }}
    >
      <AddShoppingCartIcon fontSize="small" sx={{ color: "#fff" }} />
    </Box>
  );
  // return null;
}
