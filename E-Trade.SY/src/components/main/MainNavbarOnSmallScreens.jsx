//react hooks

//mui
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Slide from "@mui/material/Slide";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import SearchBar from "./SearchBar";

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
  return (
    <HideOnScroll>
      <StyledAppBar>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Mart
          </Typography>
          <SearchBar />
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
