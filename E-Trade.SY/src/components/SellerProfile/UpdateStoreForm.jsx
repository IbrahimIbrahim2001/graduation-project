//mui
import { Button, TextField } from "@mui/material";
//onSubmit use the handleEditableState()
export default function UpdateStoreForm({
  handleEditableState,
  ...StoreDetails
}) {
  const { StoreName, StoreKind, email, SellerName, SellerPhone } = StoreDetails;
  return (
    <>
      <TextField
        label="Store Name:"
        defaultValue={StoreName}
        variant="standard"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Store Type:"
        defaultValue={StoreKind}
        variant="standard"
        fullWidth
        disabled
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Email:"
        defaultValue={email}
        variant="standard"
        fullWidth
        disabled
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Phone Number:"
        defaultValue={SellerPhone}
        variant="standard"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Seller Name:"
        defaultValue={SellerName}
        placeholder="Seller Name:"
        variant="standard"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button type="submit" variant="contained">
        save changes
      </Button>
    </>
  );
}
