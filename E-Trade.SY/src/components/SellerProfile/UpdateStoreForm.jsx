//mui
import { Button, TextField } from "@mui/material";
import { useUpdateStore } from "../../hooks/useUpdateStoreData";

//formik
import { useFormik } from "formik";
//Yup
import * as Yup from "yup";
import { updateStoreDetails } from "../../features/authSlice/authSlice";
import { useDispatch } from "react-redux";

const StoreSchema = Yup.object().shape({
  StoreName: Yup.string()
    .required("Store Name is required")
    .min(1, "Store Name must be at least 2 characters")
    .max(10, "Store Name must be at most 10 characters"),
  sellerPhone: Yup.string()
    .required("Phone Number is Required, example: 963955544433")
    .matches(/^\d{12}$/, "Phone Number must be 12 digits starting with 963"),
});

export default function UpdateStoreForm({
  handleEditableState,
  ...StoreDetails
}) {
  const { StoreName, StoreKind, email, SellerName, SellerPhone } = StoreDetails;
  const { mutate } = useUpdateStore();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      StoreName: StoreName,
      sellerPhone: SellerPhone,
    },

    validationSchema: StoreSchema,
    onSubmit: (values) => {
      try {
        mutate(values);
        dispatch(updateStoreDetails(values));
        handleEditableState();
      } catch (error) {
        console.error("update profile failed", error);
      }
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextField
        label="Store Name:"
        defaultValue={StoreName}
        variant="standard"
        fullWidth
        sx={{ marginBottom: 2 }}
        {...formik.getFieldProps("StoreName")}
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
        {...formik.getFieldProps("sellerPhone")}
      />
      <TextField
        label="Seller Name:"
        defaultValue={SellerName}
        disabled
        placeholder="Seller Name:"
        variant="standard"
        fullWidth
        sx={{ marginBottom: 2 }}
      />
      <Button type="submit" variant="contained" fullWidth>
        save changes
      </Button>
    </form>
  );
}
