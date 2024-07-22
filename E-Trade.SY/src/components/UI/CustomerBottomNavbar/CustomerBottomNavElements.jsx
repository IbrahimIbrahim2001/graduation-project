//mui
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import StorefrontIcon from "@mui/icons-material/Storefront";
import Badge from "@mui/material/Badge";
//router
import { useNavigate } from "react-router-dom";

//context
import { useToggleDarwerContext } from "../../../context/ToggleDrawerProvider";

const SHOPS = "shops";
const CART = "cart";
const CUSTOMERPROFILE = "customer-profile";

//rename the file to CustomerNavElements
export default function CustomerBottomNavElements() {
  const navigate = useNavigate();
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
        <Badge badgeContent={7} color="warning">
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

//need updates for the badge => use it with useSelector
export const navItems = [
  {
    title: SHOPS,
    to: SHOPS,
    icon: <StorefrontIcon />,
  },
  {
    title: CART,
    to: CART,
    icon: (
      <Badge badgeContent={4} color="warning">
        <ShoppingCartIcon />
      </Badge>
    ),
  },
  {
    title: CUSTOMERPROFILE,
    to: CUSTOMERPROFILE,
    icon: <AccountCircleIcon />,
  },
];
