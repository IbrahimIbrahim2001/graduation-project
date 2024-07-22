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
        label="first name:"
        defaultValue={StoreName}
        variant="standard"
        disabled
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="last name:"
        defaultValue={StoreKind}
        variant="standard"
        disabled
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="email:"
        defaultValue={email}
        variant="standard"
        disabled
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="phone number:"
        defaultValue={SellerPhone || "empty"}
        variant="standard"
        disabled
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="address:"
        defaultValue={SellerName || "empty"}
        placeholder="adress:"
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
