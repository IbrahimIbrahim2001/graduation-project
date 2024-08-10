//mui
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

//components
import ShopRatingProduct from "../Shops/shop/ShopRatingProduct";
import SellerProductEdit from "./SellerProductEdit";
import SellerShopQuantity from "./SellerShopQuantity";
//utils
import { useState } from "react";
import { BASEURL } from "../../utils/axios-utils";
import EditProductModal from "./EditProductModal";

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

export default function SellerShopProductCard({ shopItem }) {
  const [openEditModal, setOpenEditModal] = useState(false);
  const { darkMode } = useThemeContext();
  return (
    <>
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
        <ShopRatingProduct
          shopItemRating={shopItem.AvgOfRating}
          {...ratingStyles}
        />

        <SellerProductEdit onClick={() => setOpenEditModal(true)} />
        <SellerShopQuantity quantity={shopItem.count} />
      </Card>

      <EditProductModal
        shopItem={shopItem}
        openEditModal={openEditModal}
        onClose={() => setOpenEditModal(false)}
        onOpen={() => setOpenEditModal(true)}
      />
    </>
  );
}
