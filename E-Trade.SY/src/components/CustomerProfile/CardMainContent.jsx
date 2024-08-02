//mui
import { CardContent } from "@mui/material";

//component
import UpdateProfileForm from "./UpdateProfileForm";
import UserProfileData from "./UserProfileData";

//redux toolkit
import { useSelector } from "react-redux";

export default function CardMainContent({ isEditable, handleEditableState }) {
  const userDetails = useSelector((state) => state.auth?.user?.customer);
  return (
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {!isEditable ? (
        <UserProfileData {...userDetails} />
      ) : (
        <UpdateProfileForm
          {...userDetails}
          handleEditableState={handleEditableState}
        />
      )}
    </CardContent>
  );
}
