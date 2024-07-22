//mui
import { Box, Grid, Toolbar, Typography } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

//components
import { useSelector } from "react-redux";
import ShopItem from "../components/Shops/shop/ShopItem";

export default function SearchResultsPage() {
  const searchResults = useSelector((state) => state.search.SearchResult);
  console.log(searchResults);
  if (!searchResults)
    return (
      <Box minHeight={"100vh"}>
        <Toolbar />
        <Typography variant="h5"> not found...</Typography>
      </Box>
    );
  return (
    <>
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
        {searchResults &&
          searchResults.map((shopItem) => (
            <ShopItem key={shopItem.id} shopItem={shopItem} />
          ))}
      </Grid>
    </>
  );
}
