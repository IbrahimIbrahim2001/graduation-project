//react hooks
import React, { Suspense } from "react";

//mui
import { Toolbar } from "@mui/material";

//component
import Loader from "../components/UI/Loader";
import ProfilePage from "../components/UI/ProfilePage";

const SellerProfileCardContent = React.lazy(() =>
  import("../components/SellerProfile/SellerProfileCardContent")
);

export default function SellerProfile() {
  return (
    <>
      <Toolbar />
      <Suspense fallback={<Loader />}>
        <ProfilePage
          text="Seller Profile"
          cardContent={<SellerProfileCardContent />}
        />
      </Suspense>
    </>
  );
}
