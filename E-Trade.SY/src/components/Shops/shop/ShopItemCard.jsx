//mui
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";

//context
import { useThemeContext } from "../../../context/ThemeModeProvider";

//components
import ShopAddTocartBtn from "./ShopAddToCartBtn";
import ShopRatingProduct from "./ShopRatingProduct";

//utils
import { BASEURL } from "../../../utils/axios-utils";

const ratingStyles = {
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
};

const addToCartBtnStyles = {
  position: "absolute",
  top: 5,
  right: 5,
  backgroundColor: "#2200FF",
  borderRadius: "12px",
  fontWieght: "bold",
};

export default function ShopItemCard({ shopItem, handleOpen }) {
  const { darkMode } = useThemeContext();

  return (
    <Card className={`item ${darkMode ? "dark" : "light"}`}>
      <CardActionArea onClick={() => handleOpen()}>
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
            <Typography sx={{ overflow: "hidden", fontWeight: "bold" }}>
              <span>product:</span> {shopItem.name}
            </Typography>

            <Typography>
              <span style={{ fontWeight: "bold" }}>price:</span>{" "}
              {shopItem.price} S.P.
            </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <ShopRatingProduct shopItemRating={shopItem.avg} {...ratingStyles} />
      <ShopAddTocartBtn shopItemId={shopItem.id} {...addToCartBtnStyles} />
    </Card>
  );
}
