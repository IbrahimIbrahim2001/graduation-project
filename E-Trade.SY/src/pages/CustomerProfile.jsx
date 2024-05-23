import { Edit } from "@mui/icons-material";
import {
  Box,
  Card,
  Toolbar,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
  IconButton,
} from "@mui/material";
import TextField from "@mui/material/TextField";

//context
import { useThemeContext } from "../context/ThemeModeProvider";

export default function CustomerProfile() {
  const { darkMode } = useThemeContext();
  return (
    <Box
      sx={{
        height: "90vh",
        backgroundColor: darkMode ? "#121212" : "#fff",
        display: { xs: "flex", sm: "block" },
        flexDirection: "column",
        paddingY: 5,
        paddingX: { xs: 2, sm: 5, md: 10 },
      }}
    >
      <Toolbar />
      <Typography variant="h6" mb={3}>
        Customer Profile:
      </Typography>
      <Box
        sx={{
          alignSelf: "center",
        }}
      >
        <Card
          sx={{
            width: { xs: "330px", sm: "500px" },
            borderRadius: "12px",
            height: "400px",
            backgroundColor: "red",
          }}
          className={`item ${darkMode ? "dark" : "light"}`}
        >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: "#2200FF" }} aria-label="recipe">
                {"Ibrahim".slice(0, 1).toUpperCase()}
                {"Ibrahim".slice(0, 1).toUpperCase()}
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <Edit />
              </IconButton>
            }
            title="User Details:"
          />
          <CardContent>
            <TextField
              defaultValue="first name"
              variant="standard"
              // disabled
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              defaultValue="hello world"
              variant="standard"
              disabled
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              defaultValue="password"
              variant="standard"
              disabled
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              defaultValue="phone number: phone number"
              variant="standard"
              disabled
              fullWidth
              sx={{ marginBottom: 2 }}
            />
            <TextField
              defaultValue="address"
              variant="standard"
              disabled
              fullWidth
              sx={{ marginBottom: 2 }}
            />
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
}
