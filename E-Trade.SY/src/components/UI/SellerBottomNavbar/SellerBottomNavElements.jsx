//mui
import AddBoxIcon from "@mui/icons-material/AddBox";
import AddCircleOutline from "@mui/icons-material/AddCircleOutline";
import StorefrontIcon from "@mui/icons-material/Storefront";
AddCircleOutline;

//router
import { useNavigate } from "react-router-dom";

import { ShoppingBag } from "@mui/icons-material";
import { useAddProductContext } from "../../../context/AddProductProvider";

const SELLLERSHOP = "My shop";
const ADDPRODUCT = "Add product";
const SELLERPROFILE = "seller-profile";

//for xs screens
export default function SellerBottomNavElements() {
  const navigate = useNavigate();
  const { setOpenModal } = useAddProductContext();
  const navigationItems = [
    {
      label: SELLLERSHOP,
      icon: <ShoppingBag />,
      onClick: () => navigate("my-products", { replace: true }),
    },
    {
      label: ADDPRODUCT,
      icon: <AddCircleOutline />,
      onClick: () => {
        navigate("my-products", { replace: true });
        setOpenModal(true);
      },
    },
    {
      label: SELLERPROFILE,
      icon: <StorefrontIcon />,
      onClick: () => navigate(SELLERPROFILE, { replace: true }),
    },
  ];

  return navigationItems;
}

//from sm screens and above
export const NavItems = () => {
  const { setOpenModal } = useAddProductContext();
  const navItems = [
    {
      title: SELLLERSHOP,
      to: "my-products",
      icon: <ShoppingBag />,
    },
    {
      title: ADDPRODUCT,
      to: "my-products",
      icon: <AddBoxIcon sx={{ color: "#2200FF", fontSize: "26px" }} />,

      onClick: () => setOpenModal(true),
    },
    {
      title: SELLERPROFILE,
      to: SELLERPROFILE,
      icon: <StorefrontIcon />,
    },
  ];
  return navItems;
};
