import { ArrowForwardIosOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";

import { useThemeContext } from "../../context/ThemeModeProvider";
export default function LoginFormButton({ text }) {
  const { darkMode } = useThemeContext();
  return (
    <Button
      className="btn"
      variant="contained"
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
      <Typography variant="span">{text}</Typography>
      <ArrowForwardIosOutlined fontSize="" />
    </Button>
  );
}
