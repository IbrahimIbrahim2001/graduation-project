//mui
import { Box, Stack, Toolbar } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
//hooks
import { useFetchCartItems } from "../hooks/useFetchShopCart";

//context
import { useThemeContext } from "../context/ThemeModeProvider";

//router

//components
import BackToShopsButton from "../components/Cart/BackToShopsButton";
import BuyAllButton from "../components/Cart/BuyAllButton";
import CartCard from "../components/Cart/CartCard";
import RemoveAllItemsButton from "../components/Cart/RemoveAllItemsButton";
import Loader from "../components/UI/Loader";

export default function Cart() {
  const { isLoading, isError, data: items } = useFetchCartItems();

  const { darkMode } = useThemeContext();

  if (isLoading) return <Loader />;
  if (isError) return <>error....</>;

  return (
    <Box
      sx={{
        minHeight: "100vh",
        paddingX: { xs: 2, sm: 5, md: 10, lg: 10 },
        paddingY: 1,
        backgroundColor: darkMode ? "#121212" : "#fff",
      }}
    >
      <CssBaseline />
      <Toolbar />
      <CartCard items={items} darkMode={darkMode} />
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <BackToShopsButton />
        <Stack
          direction="row"
          justifyContent="flex-end"
          sx={{ width: { xs: "100vw", sm: "fit-content" } }}
        >
          <RemoveAllItemsButton />
          <BuyAllButton />
        </Stack>
      </Box>
    </Box>
  );
}
