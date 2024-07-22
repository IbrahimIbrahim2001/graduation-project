//component
import { Toolbar } from "@mui/material";
import CameraToolBar from "../components/CustomerProfile/CameraToolBar";
import CustomerProfileCardContent from "../components/CustomerProfile/CustomerProfileCardContent";
import ProfilePage from "../components/UI/ProfilePage";

//context
import { useThemeContext } from "../context/ThemeModeProvider";

export default function CustomerProfile() {
  const { darkMode } = useThemeContext();
  return (
    <>
      <Toolbar />
      <ProfilePage
        text="Customer Profile"
        cardContent={<CustomerProfileCardContent />}
      >
        <CameraToolBar darkMode={darkMode} />
      </ProfilePage>
    </>
  );
}
