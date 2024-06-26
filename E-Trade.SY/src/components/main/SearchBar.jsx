//mui
import { withStyles } from "@material-ui/core/styles";
import TextField from "@mui/material/TextField";
import { useMediaQuery } from "@mui/material";

export default function SearchBar() {
  const matchesXS = useMediaQuery("(max-width:600px)");
  return (
    <>
      {matchesXS ? (
        <StyledTextFieldForXsScreens placeholder="search for products" />
      ) : (
        <StyledTextField placeholder="search for products" />
      )}
    </>
  );
}

const StyledTextField = withStyles(() => ({
  root: {
    "& .MuiOutlinedInput-root": {
      height: "40px",
      "& fieldset": {},
    },
  },
}))(TextField);

const StyledTextFieldForXsScreens = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      height: "40px",
      backgroundColor: "white",
      color: "#333",
      "& fieldset": {},
    },
  },
})(TextField);
