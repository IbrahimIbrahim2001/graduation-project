//mui
import { Button, TextField } from "@mui/material";

// import { Navigate } from "react-router-dom";
export default function UserProfileData({ ...userDetails }) {
  const { first_name, second_name, email, address, telephone } = userDetails;

  return (
    <>
      <TextField
        label="First Name:"
        defaultValue={first_name}
        variant="standard"
        disabled
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Last Name:"
        defaultValue={second_name}
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
        defaultValue={telephone || "empty"}
        variant="standard"
        disabled
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="Address:"
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
