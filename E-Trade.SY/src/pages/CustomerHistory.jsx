import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Toolbar,
} from "@mui/material";

import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";

import { useThemeContext } from "../context/ThemeModeProvider";

export default function CustomerHistory() {
  const { darkMode } = useThemeContext();
  return (
    <>
      <Toolbar />
      <Box
        sx={{
          paddingY: 2,
          paddingX: { xs: 2, sm: 5, md: 10, lg: 25 },
          minHeight: "87vh",
        }}
      >
        <List disablePadding>
          <ListItemButton
            sx={{
              boxShadow: darkMode
                ? "0 0 2px 0 #fff"
                : "0 0px 2px 0 rgba(31, 38, 135, 0.37)",
              my: 1,
              borderRadius: "12px",
            }}
          >
            <ListItem disablePadding>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#38cc38" }}>
                  <DoneOutlinedIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText primary="Text" secondary="history" />
            </ListItem>
          </ListItemButton>
        </List>
      </Box>
    </>
  );
}
