import React, { Suspense } from "react";

//component
import { Toolbar } from "@mui/material";
import CameraToolBar from "../components/CustomerProfile/CameraToolBar";
import ProfilePage from "../components/UI/ProfilePage";
import Loader from "../components/UI/Loader";
// import CustomerProfileCardContent from "../components/CustomerProfile/CustomerProfileCardContent";

const CustomerProfileCardContent = React.lazy(() =>
  import("../components/CustomerProfile/CustomerProfileCardContent")
);

//context
import { useThemeContext } from "../context/ThemeModeProvider";

export default function CustomerProfile() {
  const { darkMode } = useThemeContext();
  return (
    <>
      <Toolbar />
      <Suspense fallback={<Loader />}>
        <ProfilePage
          text="Customer Profile"
          cardContent={<CustomerProfileCardContent />}
        >
          <CameraToolBar darkMode={darkMode} />
        </ProfilePage>
      </Suspense>
    </>
  );
}
