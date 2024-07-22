//mui
import { Button, TextField } from "@mui/material";

import { useFormik } from "formik";
import { useUpdateProfileDetails } from "../../hooks/useUpdateProfile";

import { useDispatch } from "react-redux";

import { updateUserDetails } from "../../features/authSlice/authSlice";

// import { z } from "zod";
// import { zodResolver } from "@hookfrom/resolver/zod";

// const updatePrifileSchema = z.object({
//   firstName: z.string().min(3).max(20),
//   lastName: z.string().min(3).max(20),
//   address: z
//     .string()
//     .min(8, { message: "Enter a valid address please" })
//     .max(20, { message: "Enter a valid address please" }),
//   phoneNumber: z
//     .string()
//     .startsWith("963")
//     .length(13, { message: "Must be exactly 13 characters long" }),
// });

export default function UpdateProfileForm({
  handleEditableState,
  ...userDetails
}) {
  const { first_name, second_name, email, address, telephone } = userDetails;

  const { mutate } = useUpdateProfileDetails();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: first_name,
      lastName: second_name,
      phoneNumber: telephone || "empty",
      address: address || "empty",
    },
    //don't forget to validata

    validate: () => {
      // return {
      //   first_name: updatePrifileSchema.firstName,
      //   lastName: updatePrifileSchema.lastName,
      //   phoneNumber: updatePrifileSchema.phoneNumber,
      //   address: updatePrifileSchema.address,
      // };
      // zodResolver(updatePrifileSchema);
    },
    // validate: (values) => {
    //   const errors = {};
    //   if (!values.email) {
    //     errors.email = "Email is required";
    //   } else if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(values.email)) {
    //     errors.email = "Invalid email address";
    //   }
    //   if (!values.password) {
    //     errors.password = "password is required";
    //   } else if (values.password.length < 8 || values.password.length > 20) {
    //     errors.password = "Password must be between {8-20} characters";
    //   }
    //   return errors;
    // },
    onSubmit: async (values) => {
      try {
        const data = {
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
          address: values.address,
        };

        handleEditableState();
        dispatch(updateUserDetails(data));
        mutate(data);
      } catch (error) {
        console.error("update profile failed", error);
      }
    },
  });
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        // alignItems: "flex-end",
      }}
    >
      <TextField
        id="first_name"
        label="first name:"
        variant="standard"
        fullWidth
        required
        sx={{ marginBottom: 2 }}
        {...formik.getFieldProps("firstName")}
        error={formik.touched.firstName && !!formik.errors.firstName}
        helperText={formik.touched.firstName && formik.errors.firstName}
      />
      <TextField
        label="last name:"
        variant="standard"
        fullWidth
        required
        sx={{ marginBottom: 2 }}
        {...formik.getFieldProps("lastName")}
        error={formik.touched.lastName && !!formik.errors.lastName}
        helperText={formik.touched.lastName && formik.errors.lastName}
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
        variant="standard"
        fullWidth
        required
        sx={{ marginBottom: 2 }}
        {...formik.getFieldProps("phoneNumber")}
        error={formik.touched.phoneNumber && !!formik.errors.phoneNumber}
        helperText={formik.touched.phoneNumber && formik.errors.phoneNumber}
      />
      <TextField
        label="address:"
        placeholder="adress:"
        variant="standard"
        fullWidth
        required
        sx={{ marginBottom: 2 }}
        {...formik.getFieldProps("address")}
        error={formik.touched.address && !!formik.errors.address}
        helperText={formik.touched.address && formik.errors.address}
      />
      <Button type="submit" variant="contained">
        save changes
      </Button>
    </form>
  );
  // return null;
}
