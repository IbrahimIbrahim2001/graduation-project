import { Button, ListItemText, Rating } from "@mui/material";
import { useState } from "react";
import { useRateProduct } from "../../hooks/useRateProduct";
export default function RateProduct({ reviewedProductIds, ele }) {
  const [value, setValue] = useState(0);

  const { mutate } = useRateProduct();

  return (
    <>
      <ListItemText
        hidden={
          reviewedProductIds.has(ele.productId) ||
          ele.isRating === 0 ||
          ele.isRating === 2
        }
      >
        <Rating
          name={`half-rating-${ele.productId}`}
          defaultValue={0}
          precision={0.5}
          value={parseFloat(value)}
          onChange={(e) => setValue(e.target.value)}
          disabled={
            reviewedProductIds.has(ele.productId) ||
            ele.isRating === 0 ||
            ele.isRating === 2
          }
        />
      </ListItemText>
      <Button
        disabled={
          reviewedProductIds.has(ele.productId) ||
          ele.isRating === 0 ||
          ele.isRating === 2
        }
        type="submit"
        variant="outlined"
        color="warning"
        onClick={() => mutate({ productId: ele.productId, rate: value })}
      >
        {reviewedProductIds.has(ele.productId)
          ? "Already Reviewed"
          : ele.isRating === 0
          ? "Not available for rating yet"
          : "Submit rating"}
      </Button>
    </>
  );
}
