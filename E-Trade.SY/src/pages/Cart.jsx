//mui
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { Box, Button, Toolbar } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

//hooks
import { useFetchShopItems } from "../hooks/useFetchShopItems";

//context
import { useThemeContext } from "../context/ThemeModeProvider";

//router
import { Link } from "react-router-dom";

//components
import CartCard from "../components/Cart/CartCard";

export default function Cart() {
  const { data: items } = useFetchShopItems(5);
  const { darkMode } = useThemeContext();
  const matchXs = useMediaQuery("(max-width:600px)");
  return (
    <Box
      sx={{
        minHeight: "100vh",
        paddingX: { xs: 2, sm: 5, md: 10, lg: 10 },
        paddingY: 1,
        backgroundColor: darkMode ? "#121212" : "#fff",
      }}
    >
      <Toolbar />
      <CartCard items={items} darkMode={darkMode} matchXs={matchXs} />

      {!matchXs && (
        <Link to="../shops">
          <Button variant="outlined">
            <ArrowBackIosNewRounded fontSize="sm" sx={{ paddingRight: 2 }} />
            continue shopping
          </Button>
        </Link>
      )}
    </Box>
  );
}
