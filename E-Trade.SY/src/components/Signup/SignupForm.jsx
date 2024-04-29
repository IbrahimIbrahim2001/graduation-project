//react

//mui
import { ArrowForwardIosOutlined } from "@mui/icons-material";
import {
  Button,
  FormControl,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/system";

//context
import { useThemeContext } from "../../context/ThemeModeProvider";

export const SignupForm = () => {
  const { darkMode } = useThemeContext();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
      <FormControl fullWidth>
        <Grid container columnSpacing={2}>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              id="firstname"
              label="First Name"
              variant="outlined"
              type="text"
              fullWidth
              autoComplete="off"
              noValidate
              required
              sx={{ marginBottom: 2 }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <StyledTextField
              id="lastname"
              label="last name"
              variant="outlined"
              type="text"
              fullWidth
              autoComplete="off"
              noValidate
              required
              sx={{ marginBottom: 2 }}
            />
          </Grid>
        </Grid>
        <StyledTextField
          id="email"
          label="Email address"
          variant="outlined"
          type="email"
          fullWidth
          noValidate
          required
          sx={{
            marginBottom: 2,
          }}
          //   error={false}
          //   helperText="Please enter a username"
        />
        <StyledTextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
          autoComplete="off"
          noValidate
          required
          sx={{ marginBottom: 2 }}
        />
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
            paddingX: "16.5px",
            backgroundColor: darkMode ? "#fff" : "#333",
            borderRadius: "8px",
            height: "50px",
          }}
        >
          <Typography variant="span">Signup</Typography>
          <ArrowForwardIosOutlined fontSize="" />
        </Button>
      </FormControl>
    </form>
  );
};

//styled component for the input
const StyledTextField = styled(TextField)`
  fieldset {
    border-radius: 8px;
  }
`;
