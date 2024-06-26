//mui
import { Button, TextField } from "@mui/material";

export default function UpdateProfileForm({ userDetails, isEditable }) {
  const { first_name, second_name, email, address, telephone } = userDetails;
  return (
    <>
      <TextField
        label="first name:"
        defaultValue={first_name}
        variant="standard"
        disabled={!isEditable}
        // InputProps={{ color: "red" }}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="last name:"
        defaultValue={second_name}
        variant="standard"
        disabled={!isEditable}
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
        disabled={!isEditable}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <TextField
        label="address:"
        defaultValue={address || "empty"}
        placeholder="adress:"
        variant="standard"
        disabled={!isEditable}
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button type="submit" variant="contained" disabled={!isEditable}>
        save changes
      </Button>
    </>
  );
}
