//mui
import { Typography } from "@material-ui/core";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
} from "@mui/material";

//context
import { useThemeContext } from "../../../context/ThemeModeProvider";

//components
import ShopAddTocartBtn from "./ShopAddTocartBtn";
import ShopRatingProduct from "./ShopRatingProduct";

export default function ShopItemCard({ shopItem, handleOpen }) {
  const { darkMode } = useThemeContext();
  return (
    <Card className={`item ${darkMode ? "dark" : "light"}`}>
      <CardActionArea onClick={() => handleOpen()}>
        <CardMedia
          component="img"
          height="150"
          image={shopItem.photo_data}
          // image={`http://localhost:3000/images/` + shopItem.photo_data}
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
            <Typography className="shop-item-name" sx={{ overflow: "hidden" }}>
              <span>product:</span> {shopItem.name}
            </Typography>

            <Typography className="shop-item-price">
              <span>price:</span> {shopItem.price} S.P.
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>

      <ShopRatingProduct shopItemRating={shopItem.avg} />
      <ShopAddTocartBtn />
    </Card>
  );
}
