//react hooks
import React, { Suspense, useState } from "react";

//mui
import { Grid } from "@mui/material";

//components
import ShopItemCard from "./ShopItemCard";
const ShopItemModal = React.lazy(() => import("./ShopItemModal"));

export default function ShopItem({ shopItem, shopName }) {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Grid item xs={6} sm={6} md={4} lg={3}>
        <ShopItemCard
          shopItem={shopItem}
          handleOpen={() => setOpenModal(true)}
        />
      </Grid>
      <Suspense>
        <ShopItemModal
          shopItem={shopItem}
          shopName={shopName}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
      </Suspense>
    </>
  );
}
