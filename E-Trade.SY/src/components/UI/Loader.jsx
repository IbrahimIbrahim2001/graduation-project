import { Box, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Box sx={{ height: "100vh", display: "grid", placeContent: "center" }}>
      <CircularProgress />
    </Box>
  );
}
