//mui
import { Box, Grid, Toolbar, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

//components
import { useSelector } from "react-redux";
import ShopItem from "../components/Shops/shop/ShopItem";
import SellerShopProduct from "../components/sellerShop/SellerShopProduct";

export default function SearchResultsPage() {
  const searchResults = useSelector((state) => state.search?.SearchResult);
  const user = useSelector((state) => state.auth?.user);

  if (!Array.isArray(searchResults))
    return (
      <Box minHeight={"100vh"}>
        <Toolbar />
        <Typography variant="h5"> not found...</Typography>
      </Box>
    );
  return (
    <Box sx={{ minHeight: "100vh" }}>
      <Toolbar />
      <CssBaseline />
      <Grid
        container
        spacing={2}
        sx={{
          paddingY: 2,
          paddingRight: { xs: 2, sm: 5, md: 10 },
          paddingLeft: { xs: 2, sm: 5, md: 10 },
          marginBottom: { xs: 7, sm: 0 },
        }}
      >
        {user?.customer
          ? searchResults.map((shopItem) => (
              <ShopItem key={shopItem.id} shopItem={shopItem} />
            ))
          : searchResults.map((shopItem) => (
              <SellerShopProduct key={shopItem.id} shopItem={shopItem} />
            ))}
      </Grid>
    </Box>
  );
}
