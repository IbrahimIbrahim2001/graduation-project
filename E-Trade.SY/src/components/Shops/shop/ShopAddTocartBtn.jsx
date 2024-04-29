//mui
import { IconButton } from "@material-ui/core";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { Box } from "@mui/material";

export default function ShopAddTocartBtn() {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 5,
        right: 5,
        backgroundColor: "#2200FF",
        borderRadius: "12px",
      }}
    >
      <IconButton>
        <AddShoppingCartIcon fontSize="small" sx={{ color: "#fff" }} />
      </IconButton>
    </Box>
  );
}
