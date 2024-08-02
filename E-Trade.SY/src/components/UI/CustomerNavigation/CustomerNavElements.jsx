//mui
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import HistoryIcon from "@mui/icons-material/History";
import Badge from "@mui/material/Badge";
//router
import { useNavigate } from "react-router-dom";

//context
import { useToggleDarwerContext } from "../../../context/ToggleDrawerProvider";
import { useSelector } from "react-redux";

const SHOPS = "shops";
const CART = "cart";
const CUSTOMERPROFILE = "customer-profile";
const HistoryPage = "history";

//for sx screens
export default function CustomerBottomNavElements() {
  const navigate = useNavigate();
  const badgeContent = useSelector((state) => state.cart.badgeContent);
  const { toggleDrawer } = useToggleDarwerContext();

  const navigationItems = [
    {
      label: SHOPS,
      icon: <StorefrontIcon />,
      onClick: () => toggleDrawer(true),
    },
    {
      label: CART,
      icon: (
        <Badge badgeContent={badgeContent} color="warning">
          <ShoppingCartIcon />
        </Badge>
      ),
      onClick: () => navigate(CART, { replace: true }),
    },
    {
      label: CUSTOMERPROFILE,
      icon: <AccountCircleIcon />,
      onClick: () => navigate(CUSTOMERPROFILE, { replace: true }),
    },
  ];

  return navigationItems;
}
//for sm screens and above
export const CustomerNavbarElements = () => {
  const badgeContent = useSelector((state) => state.cart.badgeContent);
  const navigationItems = [
    {
      title: SHOPS,
      to: SHOPS,
      icon: <StorefrontIcon />,
    },
    {
      title: CART,
      to: CART,
      icon: (
        <Badge badgeContent={badgeContent} color="warning">
          <ShoppingCartIcon />
        </Badge>
      ),
    },
    {
      title: CUSTOMERPROFILE,
      to: CUSTOMERPROFILE,
      icon: <AccountCircleIcon />,
    },
    {
      title: HistoryPage,
      to: HistoryPage,
      icon: <HistoryIcon />,
    },
  ];
  return navigationItems;
};
