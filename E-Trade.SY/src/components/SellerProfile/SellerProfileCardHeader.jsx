//mui
import { Close, Edit } from "@mui/icons-material";
import { Avatar, CardHeader, IconButton } from "@mui/material";
import { useSelector } from "react-redux";

export default function SellerProfileCardHeader({ isEditable, onClick }) {
  const { StoreName } = useSelector((state) => state.auth.user?.seller);

  return (
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "#2200FF" }} aria-label="full-name">
          {StoreName.slice(0, 2).toUpperCase()}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings" onClick={onClick}>
          {!isEditable ? <Edit /> : <Close />}
        </IconButton>
      }
      title="Store Details:"
    />
  );
}
