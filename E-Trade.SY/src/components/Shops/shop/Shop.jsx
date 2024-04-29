//mui
import { ArrowForwardIos } from "@mui/icons-material";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

//context
import { useThemeContext } from "../../../context/ThemeModeProvider";

//react router
import { NavLink } from "react-router-dom";

export default function Shop({ shop, toggleDrawer }) {
  const { darkMode } = useThemeContext();

  return (
    <NavLink
      to={`/main/shops/shop/${shop.id}`}
      className="drawer-link"
      style={{
        textDecoration: "none",
        color: `${darkMode ? "white" : "black"}`,
      }}
      onClick={toggleDrawer(false)}
    >
      <ListItem disablePadding sx={{ marginBottom: 1 }}>
        <ListItemButton>
          <ListItemText
            sx={{
              paddingX: { sm: 2, md: 6, lg: 8 },
              marginBottom: 1,
            }}
            primary={shop.name}
          />

          <ArrowForwardIos fontSize="small" />
        </ListItemButton>
      </ListItem>
    </NavLink>
  );
}
