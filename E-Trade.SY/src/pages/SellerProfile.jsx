//component
import SellerProfileCardContent from "../components/SellerProfile/SellerProfileCardContent";
import ProfilePage from "../components/UI/ProfilePage";

export default function SellerProfile() {
  return (
    <>
      <ProfilePage
        text="Seller Profile"
        cardContent={<SellerProfileCardContent />}
      />
    </>
  );
}
