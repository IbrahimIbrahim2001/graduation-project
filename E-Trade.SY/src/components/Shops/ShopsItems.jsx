//mui
import { Box, Button, Grid } from "@mui/material";

//hooks
import { useFetchShopsItems } from "../../hooks/useFetchShopsItems";
import { useSortItems } from "../../hooks/useSortItems";

// ui components
import ShopItemsSkeleton from "./shop/ShopItemsSkeleton";

//components
import { Sort } from "@mui/icons-material";
import ShopItem from "./shop/ShopItem";
import { useEffect, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

export default function ShopsItems() {
  const [shopsItems, setShopsItems] = useState([]);
  const { isLoading, isError, data } = useFetchShopsItems();
  const queryClient = useQueryClient();
  const sortingFunction = useSortItems();

  const handleSort = () => {
    sortingFunction();
    setShopsItems(queryClient.getQueryData(["shops-items"]));
  };

  useEffect(() => {
    if (data) {
      setShopsItems(data);
    }
  }, [data]);

  if (isLoading) {
    return <ShopItemsSkeleton />;
  }
  if (isError) {
    return <Box>Error...</Box>;
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          paddingY: 2,
          paddingRight: { xs: 2, sm: 5, md: 10 },
          paddingLeft: { xs: 2 },
          marginBottom: { xs: 7, sm: 0 },
        }}
      >
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Button type="button" onClick={handleSort}>
            <Sort />
          </Button>
        </Grid>
        {shopsItems &&
          shopsItems.map((shopItem) => (
            <ShopItem key={shopItem.id} shopItem={shopItem} />
          ))}
      </Grid>
    </>
  );
}
