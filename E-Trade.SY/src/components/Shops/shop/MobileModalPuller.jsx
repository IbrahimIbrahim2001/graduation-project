//mui
import { Box } from "@mui/material";
import { grey } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

//context
import { useThemeContext } from "../../../context/ThemeModeProvider";

const Puller = styled("div")(({ theme }) => ({
  width: 30,
  height: 6,
  backgroundColor: theme.palette.mode === "light" ? grey[300] : grey[200],
  borderRadius: 3,
  position: "absolute",
  top: "50%",
  left: "calc(50% - 15px)",
}));

export default function MobileModalPuller() {
  const { darkMode } = useThemeContext();
  return (
    <Box
      sx={{
        backgroundColor: darkMode ? "rgba(17, 25, 40, 1)" : "#fff",
        width: "calc(100vw - 4px)",
        height: 35,
        position: "absolute",
        top: 0,
        zIndex: 1000,
        borderBottom: "1px solid #fff",
      }}
    >
      <Puller />
    </Box>
  );
}
