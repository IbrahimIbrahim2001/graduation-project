//mui
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

//components
import ProductRate from "./ProductRate";
import SellerShopQuantity from "./SellerShopQuantity";
import SellerProductEdit from "./SellerProductEdit";

//utils
import { BASEURL } from "../../utils/axios-utils";

export default function SellerShopProductCard({ shopItem }) {
  const { darkMode } = useThemeContext();
  return (
    <Card className={`item ${darkMode ? "dark" : "light"}`}>
      <CardMedia
        component="img"
        height="150"
        image={`${BASEURL}/images/products/${shopItem.photo_data}`}
        alt={shopItem.name}
      />

      <CardContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
        >
          <Typography sx={{ overflow: "hidden" }}>
            {" "}
            <span>product:</span> {shopItem.name}
          </Typography>

          <Typography>
            <span>price:</span> {shopItem.price} S.P.
          </Typography>
        </Box>
      </CardContent>

      <ProductRate productRate={shopItem.avg} />
      <SellerProductEdit />
      <SellerShopQuantity quantity={shopItem.count} />
    </Card>
  );
}
