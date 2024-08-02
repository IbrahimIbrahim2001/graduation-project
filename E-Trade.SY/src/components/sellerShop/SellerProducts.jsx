//mui
import { Box, Grid, Toolbar, Typography, useMediaQuery } from "@mui/material";

//hooks
import { useFetchShopItems } from "../../hooks/useFetchShopItems";

// ui components
import ShopItemsSkeleton from "./SellerProductSkeleton";

//components
import AddNewProduct from "./AddNewProduct";
import SellerShopProduct from "./SellerShopProduct";

//redux toolkit
import { useSelector } from "react-redux";

export const SellerProducts = () => {
  const shopId = useSelector(
    (state) => state.auth.user?.seller.id || localStorage.getItem("shopId")
  );
  localStorage.setItem("shopId", shopId);

  const { isLoading, isError, data: shop } = useFetchShopItems(shopId);

  const matchesXS = useMediaQuery("(max-width:599px)");
  const matchesSM = useMediaQuery("(min-width:600px) and (max-width:899px)");
  const matchesMD = useMediaQuery("(min-width:900px) and (max-width:1199px)");
  const matchesLG = useMediaQuery("(min-width:1200px)");

  let paddingX;
  if (matchesXS) {
    paddingX = 20;
  } else if (matchesSM) {
    paddingX = 40;
  } else if (matchesMD) {
    paddingX = 80;
  } else if (matchesLG) {
    paddingX = 80;
  }

  if (isLoading) {
    return <ShopItemsSkeleton />;
  }
  if (isError) {
    return <Box>Error...</Box>;
  }

  return (
    <>
      <AddNewProduct />
      <Toolbar />
      <Typography
        variant={"h6"}
        sx={{
          padding: `0 ${paddingX}px`,
          margin: "10px 0px",
          fontWeight: "bold",
        }}
      >
        {shop?.data?.storeName}:
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          paddingY: 2,
          paddingX: { xs: 2, sm: 5, md: 10 },
          marginBottom: { xs: 7, sm: 0 },
        }}
      >
        {shop?.data?.pro?.map((shopItem) => (
          <SellerShopProduct key={shopItem.id} shopItem={shopItem} />
        ))}
      </Grid>
    </>
  );
};
