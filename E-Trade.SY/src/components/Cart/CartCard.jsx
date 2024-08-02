//mui
import { Box, Divider, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

//components
import CardCartTitle from "./CardCartTitle";
import CartCardItem from "./CartCardItem";
import { useSelector } from "react-redux";

export default function CartCard({ items, darkMode }) {
  const badgeContent = useSelector((state) => state.cart.badgeContent);
  const matchXs = useMediaQuery("(max-width:600px)");
  return (
    <Box
      className={matchXs ? "" : `cart ${darkMode ? "dark" : "light"}`}
      sx={{
        overflowY: { sm: "scroll" },
        marginBottom: { xs: 5, sm: "" },
        paddingX: { xs: 0, sm: 3 },
        paddingY: 2,
      }}
    >
      <Typography variant="h6" sx={{ mb: 2, fontWeight: 800 }}>
        Cart:{" "}
        {badgeContent
          ? badgeContent === 1
            ? `${badgeContent} item`
            : `${badgeContent} items`
          : null}
      </Typography>
      <Divider />
      <CardCartTitle darkMode={darkMode} />
      {!items?.order?.length > 0 ? (
        <Typography sx={{ padding: 2, fontWeight: "bold" }}>
          your cart is empty
        </Typography>
      ) : (
        items?.order?.map((item) => <CartCardItem key={item.id} item={item} />)
      )}
    </Box>
  );
}
