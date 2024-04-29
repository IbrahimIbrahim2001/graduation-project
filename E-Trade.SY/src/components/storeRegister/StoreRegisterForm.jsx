//mui
import { withStyles } from "@material-ui/core/styles";
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
  Hidden,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

//router

//react
import { useState } from "react";
import { Link } from "react-router-dom";

export default function StoreRegisterForm() {
  const [showPassword, setShowPassword] = useState(true);
  const { darkMode } = useThemeContext();

  const handleClickShowPassword = (event) => {
    event.preventDefault();
    setShowPassword((show) => !show);
  };
  return (
    <Box
      sx={{
        borderRadius: "16px",
        background: darkMode
          ? "rgba( 0, 0, 0, 0.75)"
          : "rgba( 255, 255, 255, 0.9)",
        boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
        paddingX: { xs: 2, sm: 5 },
        paddingY: { xs: 2, sm: 3 },
        marginBottom: 3,
      }}
    >
      <form noValidate autoComplete="off" onSubmit={console.log("first")}>
        <FormControl fullWidth>
          <Grid container spacing={2} sx={{ placeContent: "space-between" }}>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                id="store-name"
                label="store name"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                id="store-name"
                label="store name"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <StyledTextField
                id="seller-email"
                label="email"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                label="Password"
                variant="outlined"
                type={showPassword ? "text" : "password"}
                autoComplete="off"
                required
                fullWidth
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                id="seller-name"
                label="full name"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <StyledTextField
                id="seller-phone"
                label="phone number"
                variant="outlined"
                required
                fullWidth
              />
            </Grid>
            <Hidden smDown>
              <Grid item sm={5} md={4}>
                <Typography sx={{ fontWeight: 600 }}>
                  have a store?{" "}
                  <Link
                    to="../login"
                    style={{ color: "#7B66FF", textDecoration: "none" }}
                  >
                    Sign in
                  </Link>
                </Typography>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={5} md={4} lg={4}>
              <Button
                className="btn"
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                size="large"
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  textTransform: "capitalize",

                  backgroundColor: darkMode ? "#fff" : "#333",
                  borderRadius: "8px",
                  height: "50px",
                }}
              >
                <Typography variant="span">Create Store</Typography>
                <ArrowForwardIosOutlined fontSize="" />
              </Button>
            </Grid>
            <Hidden smUp>
              <Grid item xs={12}>
                <Typography sx={{ fontWeight: 600 }}>
                  have a store?{" "}
                  <Link
                    to="../login"
                    style={{ color: "#7B66FF", textDecoration: "none" }}
                  >
                    Sign in
                  </Link>
                </Typography>
              </Grid>
            </Hidden>
          </Grid>
        </FormControl>
      </form>
    </Box>
  );
}

const StyledTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "8px",
      },
    },
  },
})(TextField);
