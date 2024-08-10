import { DeleteForever } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import { useDeleteProductFromStore } from "../../hooks/useDeleteProductFromStrore";

export default function DeleteProductFromStore({
  productId,
  onClose,
  StoreId,
}) {
  const { mutate } = useDeleteProductFromStore(StoreId);
  const handleDelete = () => {
    mutate(productId);
    onClose();
  };
  return (
    <Button
      sx={{ my: 2, width: "100%" }}
      variant="outlined"
      color="error"
      startIcon={<DeleteForever />}
      onClick={handleDelete}
    >
      <Typography>delete product</Typography>
    </Button>
  );
}
