//mui
import { ArrowBackIosNewRounded } from "@mui/icons-material";
import { Button, Hidden, Typography } from "@mui/material";

//router
import { Link } from "react-router-dom";

export default function BackToShopsButton() {
  return (
    <Hidden smDown>
      <Link to="../shops">
        <Button variant="outlined">
          <ArrowBackIosNewRounded fontSize="sm" sx={{ marginRight: 2 }} />
          <Typography>Continue Shopping</Typography>
        </Button>
      </Link>
    </Hidden>
  );
}
