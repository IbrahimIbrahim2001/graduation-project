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
        label="first name:"
        defaultValue={StoreName}
        variant="standard"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="last name:"
        defaultValue={StoreKind}
        variant="standard"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="email:"
        defaultValue={email}
        variant="standard"
        fullWidth
        disabled
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="phone number:"
        defaultValue={SellerPhone || "empty"}
        variant="standard"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="address:"
        defaultValue={SellerName || "empty"}
        placeholder="adress:"
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
