//react hooks

//mui
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import NotificationsNone from "@mui/icons-material/NotificationsNone";
import HistoryIcon from "@mui/icons-material/History";
//component
import SearchBar from "./SearchBar";

//redux toolkit
import { useSelector } from "react-redux";

//reacr router
import { NavLink } from "react-router-dom";
import { Box } from "@mui/material";

//HOC
function HideOnScroll({ children }) {
  const trigger = useScrollTrigger({});

  return (
    <Slide appear={false} direction="down" in={!trigger} timeout={500}>
      {children}
    </Slide>
  );
}

export default function MainNavbarOnSmallScreens() {
  const user = useSelector((state) => state.auth?.user);
  return (
    <HideOnScroll>
      <StyledAppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Mart
          </Typography>
          <SearchBar />
          <Box
            sx={{
              display: "flex",
              height: "100%",
              paddingTop: 1,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {user?.seller ? (
              <NavLink to="notification" replace={true}>
                <NotificationsNone
                  sx={{ color: "#f2f2f2", fontSize: "26px" }}
                />
              </NavLink>
            ) : (
              <NavLink to="history" replace={true} className="navbar-link">
                <HistoryIcon sx={{ color: "#f2f2f2", fontSize: "26px" }} />
              </NavLink>
            )}
          </Box>
        </Toolbar>
      </StyledAppBar>
    </HideOnScroll>
  );
}
const StyledAppBar = withStyles({
  root: {
    "& .MuiToolbar-root": {
      height: "40px",
      justifyContent: "space-between",
      backgroundColor: "#2200FF",
      "& .MuiTypography-h6": {
        color: "white",
        fontWeight: "700",
      },
    },
  },
})(AppBar);
