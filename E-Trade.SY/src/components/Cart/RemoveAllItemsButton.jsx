//mui
import { DeleteForever } from "@mui/icons-material";
import { Button, Hidden, Typography } from "@mui/material";
//hooks
import { useDeleteAllCartItems } from "../../hooks/useFetchShopCart";

//redux
import { useSelector } from "react-redux";

export default function RemoveAllItemsButton() {
  const { mutate } = useDeleteAllCartItems();
  const badgeContent = useSelector((state) => state.cart.badgeContent);
  return (
    <>
      {badgeContent > 0 && (
        <Button
          type="button"
          variant="outlined"
          onClick={mutate}
          color="error"
          sx={{ marginLeft: { xs: 0, sm: 2 } }}
        >
          <DeleteForever sx={{ marginRight: { xs: 0, sm: 2 } }} />
          <Hidden smDown>
            <Typography variant="body1" noWrap>
              Remove All Items
            </Typography>
          </Hidden>
        </Button>
      )}
    </>
  );
}
