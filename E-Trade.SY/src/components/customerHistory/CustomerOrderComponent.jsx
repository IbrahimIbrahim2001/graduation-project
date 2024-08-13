import { ListItem, ListItemButton, ListItemText } from "@mui/material";
import RateProduct from "./RateProduct";

export default function CustomerOrderComponent({
  ele,
  darkMode,
  reviewedProductIds,
}) {
  return (
    <>
      <ListItemButton
        sx={{
          boxShadow: darkMode
            ? "0 0 2px 0 #fff"
            : "0 0px 2px 0 rgba(31, 38, 135, 0.37)",
          my: 1,
          borderRadius: "12px",
        }}
        disableTouchRipple
      >
        <ListItem
          disablePadding
          sx={{
            display: "flex",
            justifyContent: { xs: "center", sm: "space-between" },
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "start", sm: "center" },
          }}
        >
          <ListItemText primary={ele.ProductName?.name} />

          <RateProduct reviewedProductIds={reviewedProductIds} ele={ele} />
        </ListItem>
      </ListItemButton>
    </>
  );
}
