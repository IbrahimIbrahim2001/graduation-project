//react hooks
import { useState } from "react";

//mui
import { Typography } from "@material-ui/core";
import { Star } from "@mui/icons-material";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
} from "@mui/material";

//assets to remove
import myimg from "../../assets/login.png";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";
import ShopItemModal from "./shop/ShopItemModal";
import ShopAddTocartBtn from "./ShopAddTocartBtn";

export default function ShopItem({ shopItem }) {
  const [openModal, setOpenModal] = useState(false);
  const { darkMode } = useThemeContext();

  return (
    <>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <Card className={`item ${darkMode ? "dark" : "light"}`}>
          <CardActionArea onClick={() => setOpenModal(true)}>
            <CardMedia
              component="img"
              height="150"
              image={myimg}
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
                <Typography
                  className="shop-item-name"
                  sx={{ overflow: "hidden" }}
                >
                  {shopItem.name}
                </Typography>

                <Typography className="shop-item-price">
                  <span>price:</span> {shopItem.price} S.P.
                </Typography>
              </Box>
            </CardContent>
          </CardActionArea>
          <Box
            sx={{
              position: "absolute",
              bottom: 90,
              right: 5,
              display: "flex",
              alignItems: "center",

              backgroundColor: "#fff",
              color: "#121212",
              borderRadius: "12px",
              paddingX: 1,
            }}
          >
            <Star color="warning" fontSize="small" />
            <Typography className="shop-item-rating">
              {" "}
              {shopItem.rating ? shopItem.rating : 0}/5
            </Typography>
          </Box>
          <ShopAddTocartBtn />
        </Card>
      </Grid>
      {openModal && (
        <ShopItemModal
          shopItem={shopItem}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      )}
    </>
  );
}
