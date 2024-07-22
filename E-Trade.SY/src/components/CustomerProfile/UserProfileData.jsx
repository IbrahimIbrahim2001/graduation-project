//mui
import { Button, TextField } from "@mui/material";
import { Navigate } from "react-router-dom";

//disabled inputs, in other words read only inputs
export default function UserProfileData({ ...userDetails }) {
  const { first_name, second_name, email, address, telephone } = userDetails;

  if (!userDetails) <Navigate to="../login" />;

  return (
    <>
      <TextField
        label="first name:"
        defaultValue={first_name}
        variant="standard"
        disabled
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="last name:"
        defaultValue={second_name}
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
        defaultValue={telephone || "empty"}
        variant="standard"
        disabled
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="address:"
        defaultValue={address || "empty"}
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
