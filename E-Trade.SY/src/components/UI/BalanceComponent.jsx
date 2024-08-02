//mui
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";

//text is optional props
export default function BalanceComponent({ text, ...styles }) {
  const balance = useSelector(
    (state) => state.auth?.customer || state.auth?.seller || "0.00"
  );
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        height: "25px",
        ...styles,
      }}
      disabled
      variant="outlined"
    >
      <Typography noWrap>{text}</Typography>
      <Typography mx={2}>{balance}</Typography>
      <AccountBalanceIcon
        sx={{ fontSize: 20, marginLeft: 2 }}
        color="success"
      />
    </Box>
  );
}
