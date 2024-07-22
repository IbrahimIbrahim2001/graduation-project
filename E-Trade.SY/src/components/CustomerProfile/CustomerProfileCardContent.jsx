//react hooks
import { useState } from "react";

//mui
import { Card } from "@mui/material";

//component
import CardMainContent from "./CardMainContent";
import CustomerProfileCardHeader from "./CustomerProfileCardHeader";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

export default function CustomerProfileCardContent() {
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
      <CustomerProfileCardHeader
        isEditable={isEditable}
        onClick={() => handleEditableState()}
      />
      <CardMainContent
        isEditable={isEditable}
        handleEditableState={() => handleEditableState()}
      />
    </Card>
  );
}
