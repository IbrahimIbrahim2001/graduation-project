//mui
import { Payment } from "@mui/icons-material";
import { Button, Hidden, Typography } from "@mui/material";
import { useState } from "react";
//redux
import { useSelector } from "react-redux";
import ConfirmPayment from "./ConfirmPayment";

export default function BuyAllButton() {
  const badgeContent = useSelector((state) => state.cart.badgeContent);
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {badgeContent > 0 && (
        <Button
          type="button"
          variant="outlined"
          color="success"
          sx={{
            marginLeft: 2,
          }}
          onClick={() => setOpenModal(true)}
        >
          <Payment sx={{ marginRight: { xs: 0, sm: 2 } }} />
          <Hidden smDown>
            <Typography variant="body1" noWrap>
              Buy All Items
            </Typography>
          </Hidden>
        </Button>
      )}
      <ConfirmPayment
        openModal={openModal}
        handleClose={() => setOpenModal(false)}
      />
    </>
  );
}
