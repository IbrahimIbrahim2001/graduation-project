import { TextField, Typography, FormControl } from "@mui/material";
import { LoadingButton } from "@mui/lab";

import { useState } from "react";

//formik
import { useFormik } from "formik";

//hooks
import { useAddProduct } from "../../hooks/useAddProduct";

export default function AddProductForm({
  setOpenModal,
  handleErrorMessage,
  handleSuccessMessage,
}) {
  const storeId = localStorage.getItem("shopId");
  // eslint-disable-next-line no-unused-vars
  const [_image, setImage] = useState();
  const [optionalImages, setOptionalImages] = useState([]);

  const addProductError = () => {
    handleErrorMessage();
  };

  const addProductSuccesfully = () => {
    handleSuccessMessage();
  };

  const { mutate } = useAddProduct(addProductSuccesfully, addProductError);

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    formik.setFieldValue("image", e.target.files[0]);
  };

  const handleImages = (e) => {
    setOptionalImages([...optionalImages, ...e.target.files]);
    formik.setValues({
      ...formik.values,
      optionalImages: [...optionalImages, ...e.target.files],
    });
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      quantity: 0,
      price: 0,
    },
    validate: (values) => {
      const errors = {};
      if (!values.name) {
        errors.name = "product's name is required please";
      }
      if (!values.image) {
        errors.image = "product's image is required please";
      }
      if (!values.quantity) {
        errors.quantity = "quantinty is required please";
      }
      if (!values.price) {
        errors.price = "product's price is required please";
      }
      return errors;
    },

    onSubmit: async (values) => {
      try {
        const data = {
          ...values,
          storeId,
        };

        mutate(data);
        setOptionalImages([]);
        formik.resetForm();
        setOpenModal(false);
      } catch (error) {
        console.error("add product failed", error);
      }
    },
  });
  return (
    <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
        <Typography mb={1} color={"primary"}>
          Main Image:*
        </Typography>
        <TextField
          type="file"
          required
          onChange={handleImage}
          sx={{ mb: 2 }}
          error={formik.touched.image && !!formik.errors.image}
          helperText={formik.touched.image && formik.errors.image}
        />

        <Typography mb={1} color={"primary"}>
          Optional Images:
        </Typography>
        <TextField
          type="file"
          multiple
          sx={{ mb: 2 }}
          onChange={(e) => handleImages(e)}
        />

        <Typography mb={1} color={"primary"}>
          Product Name:*
        </Typography>
        <TextField
          type="text"
          required
          placeholder="Product Name"
          sx={{ mb: 2 }}
          error={formik.touched.name && !!formik.errors.name}
          helperText={formik.touched.name && formik.errors.name}
          {...formik.getFieldProps("name")}
        />
        <Typography mb={1} color={"primary"}>
          Quantity:*
        </Typography>
        <TextField
          type="number"
          required
          placeholder="Quantity"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ inputProps: { min: 0 } }}
          sx={{ mb: 2 }}
          error={formik.touched.quantity && !!formik.errors.quantity}
          helperText={formik.touched.quantity && formik.errors.quantity}
          {...formik.getFieldProps("quantity")}
        />
        <Typography mb={1} color={"primary"}>
          Price:*
        </Typography>
        <TextField
          type="number"
          required
          placeholder="Price in Syrian pounds"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ inputProps: { min: 0 } }}
          sx={{ mb: 2 }}
          error={formik.touched.price && !!formik.errors.price}
          helperText={formik.touched.price && formik.errors.price}
          {...formik.getFieldProps("price")}
        />
        <LoadingButton
          //   loading={status === "pending"}
          type="submit"
          variant="contained"
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          Add Product
        </LoadingButton>
      </FormControl>
    </form>
  );
}
