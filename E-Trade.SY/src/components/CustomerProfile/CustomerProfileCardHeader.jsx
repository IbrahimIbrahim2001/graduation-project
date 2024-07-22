//mui
import { Close, Edit } from "@mui/icons-material";
import { Avatar, CardHeader, IconButton } from "@mui/material";
import { useSelector } from "react-redux";

export default function CustomerProfileCardHeader({ isEditable, onClick }) {
  const { first_name, second_name } = useSelector(
    (state) => state.auth.user?.customer
  );

  return (
    <CardHeader
      avatar={
        <Avatar sx={{ bgcolor: "#2200FF" }} aria-label="full-name">
          {first_name.slice(0, 1).toUpperCase()}
          {second_name.slice(0, 1).toUpperCase()}
        </Avatar>
      }
      action={
        <IconButton aria-label="settings" onClick={onClick}>
          {!isEditable ? <Edit /> : <Close />}
        </IconButton>
      }
      title="User Profile Details:"
    />
  );
}
