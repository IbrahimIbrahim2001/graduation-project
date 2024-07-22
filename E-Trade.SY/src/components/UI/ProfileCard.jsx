//mui
import { Box } from "@mui/material";

export default function ProfileCard({ children }) {
  return (
    <Box
      sx={{
        alignSelf: { xs: "center", sm: "flex-start" },
        mb: { xs: 2, md: 0 },
      }}
    >
      {children}
    </Box>
  );
}
