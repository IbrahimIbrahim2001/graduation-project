import { Grid } from "@mui/material";
import { useApriori } from "../../hooks/useApriori";
// import Loader from "../UI/Loader";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import ShopItemCard from "./shop/ShopItemCard";

export default function AprioriList({ shopItemId }) {
  const { mutate } = useApriori(shopItemId);
  const apriori = useSelector((state) => state?.apriori);
  useEffect(() => {
    mutate(shopItemId);
  }, [mutate, shopItemId]);
  return (
    <>
      <Grid
        sx={{
          justifyContent: { xs: "center", sm: "space-evenly" },
          zIndex: 10000,
          marginY: 2,
        }}
        container
        rowGap={2}
      >
        {apriori?.AprioriResult?.length > 0 &&
          apriori?.AprioriResult.map((ele) => (
            <Grid item key={ele.id} xs={10} sm={5}>
              <ShopItemCard shopItem={ele} />
            </Grid>
          ))}
      </Grid>
    </>
  );
}
