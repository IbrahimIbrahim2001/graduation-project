//mui
import { Button, TextField } from "@mui/material";
import { Navigate } from "react-router-dom";

//disabled inputs, in other words read only inputs
export default function StoreData({ ...StoreDetails }) {
  const { StoreName, StoreKind, email, SellerName, SellerPhone } = StoreDetails;

  if (!StoreDetails) <Navigate to="../login" />;

  return (
    <>
      <TextField
        label="Store Name:"
        defaultValue={StoreName}
        variant="standard"
        disabled
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Store Type:"
        defaultValue={StoreKind}
        variant="standard"
        disabled
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Email:"
        defaultValue={email}
        variant="standard"
        disabled
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Phone Number:"
        defaultValue={SellerPhone}
        variant="standard"
        disabled
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Seller Name:"
        defaultValue={SellerName}
        placeholder="SellerName:"
        variant="standard"
        disabled
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button type="submit" variant="contained" disabled>
        save changes
      </Button>
    </>
  );
}
