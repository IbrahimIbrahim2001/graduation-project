//mui
import { IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box } from "@mui/material";

//hooks
import { useMutateCart } from "../../../hooks/useFetchShopCart";

//redux
import { useDispatch } from "react-redux";
import { setBadgeontent, setBill } from "../../../features/cartSlice/cartSlice";

export default function ShopAddToCartBtn({
  shopItemId,
  shopItemPrice,
  handleClose = () => {}, //optional params only used with QrReaderComponent
  ...styles
}) {
  const dispatch = useDispatch();
  const onSuccessAddToCart = () => {
    dispatch(setBadgeontent(true));
    dispatch(setBill({ signal: true, price: shopItemPrice }));
  };
  const { mutate } = useMutateCart(onSuccessAddToCart);

  const handleClick = () => {
    mutate(shopItemId);
    handleClose();
  };

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
      onClick={handleClick}
    >
      <AddShoppingCartIcon fontSize="small" sx={{ color: "#fff" }} />
    </Box>
  );
  // return null;
}
