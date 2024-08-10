//react hooks
import { useState } from "react";

//mui
import { Card } from "@mui/material";

//component
import SellerProfileCardHeader from "./SellerProfileCardHeader";
import CardMainContent from "./CardMainContent";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

export default function SellerProfileCardContent() {
  const [isEditable, setIsEditable] = useState(false);

  const { darkMode } = useThemeContext();

  const handleEditableState = () => {
    setIsEditable((prev) => !prev);
  };

  return (
    <Card
      sx={{
        maxWidth: "500",
        width: { xs: "94vw", sm: 360, md: "450px" },
        height: "inherit",
        borderRadius: "12px",
      }}
      className={`item ${darkMode ? "dark" : "light"}`}
    >
      <SellerProfileCardHeader
        isEditable={isEditable}
        onClick={handleEditableState}
      />
      <CardMainContent
        isEditable={isEditable}
        handleEditableState={handleEditableState}
      />
    </Card>
  );
}
