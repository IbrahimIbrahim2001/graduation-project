//react hooks
import { useState } from "react";

//mui
import { Close, Edit } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Card,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";

//redux toolkit
import { useSelector } from "react-redux";

//component
import UpdateProfileForm from "./UpdateProfileForm";

//hooks
// import { useFetchProfileDetails } from "../../hooks/useFetchProfileDetails";

//must use redux persist
export default function CustomerProfileCard({ darkMode }) {
  const [isEditable, setIsEditable] = useState(false);
  const userDetails = useSelector((state) => state.auth.user?.customer);

  const handleEditableState = () => {
    setIsEditable((prev) => !prev);
  };

  return (
    <Box
      sx={{
        alignSelf: { xs: "center", sm: "flex-start" },
        mb: { xs: 2, md: 0 },
      }}
    >
      <Card
        sx={{
          maxWidth: "500",
          width: { xs: "94vw", sm: 360, md: "450px" },
          height: "inherit",
          borderRadius: "12px",
        }}
        className={`item ${darkMode ? "dark" : "light"}`}
      >
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#2200FF" }} aria-label="full-name">
              {userDetails?.first_name.slice(0, 1).toUpperCase()}
              {userDetails?.second_name.slice(0, 1).toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings" onClick={handleEditableState}>
              {!isEditable ? <Edit /> : <Close />}
            </IconButton>
          }
          title="User Profile Details:"
        />
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <UpdateProfileForm
            userDetails={userDetails}
            isEditable={isEditable}
          />
        </CardContent>
      </Card>
    </Box>
  );
}
