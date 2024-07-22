//mui
import { CardContent } from "@mui/material";

//component
import StoreData from "./StoreData";
import UpdateStoreForm from "./UpdateStoreForm";
//redux toolkit
import { useSelector } from "react-redux";

export default function CardMainContent({ isEditable, handleEditableState }) {
  const StoreDetails = useSelector((state) => state.auth.user?.seller);
  return (
    <CardContent
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {!isEditable ? (
        <StoreData {...StoreDetails} />
      ) : (
        <UpdateStoreForm
          {...StoreDetails}
          handleEditableState={handleEditableState}
        />
      )}
    </CardContent>
  );
}
