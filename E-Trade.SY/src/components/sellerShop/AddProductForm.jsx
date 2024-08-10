//react
import { useState } from "react";

//mui
import { LoadingButton } from "@mui/lab";
import { FormControl, TextField, Typography } from "@mui/material";

//formik
import { useFormik } from "formik";

//hooks
import { useAddProduct } from "../../hooks/useAddProduct";

// Yup
import { useSelector } from "react-redux";
import * as Yup from "yup";

const productSchema = Yup.object({
  image: Yup.mixed()
    .required("Main image is required")
    .test("fileSize", "File Size is too large", (value) => {
      return value && value.size <= 5 * 1024 * 1024; // 5MB limit
    })
    .test("fileFormat", "Unsupported Format", (value) => {
      return (
        value && ["image/jpeg", "image/png", "image/gif"].includes(value.type)
      );
    }),
  optionalImages: Yup.array()
    .of(
      Yup.mixed()
        .test("fileSize", "File Size is too large", (value) => {
          return value && value.size <= 5 * 1024 * 1024; // 5MB limit
        })
        .test("fileFormat", "Unsupported Format", (value) => {
          return (
            value &&
            ["image/jpeg", "image/png", "image/gif"].includes(value.type)
          );
        })
    )
    .max(7, "You can upload a maximum of 7 optional images"),
  name: Yup.string().required("Product name is required"),
  quantity: Yup.number()
    .min(1, "Quantity must be at least 1")
    .required("Quantity is required"),
  price: Yup.number()
    .min(0, "Price must be at least 0")
    .required("Price is required"),
  Color: Yup.string("please enter a valid Color")
    .min(2, "Not a Valid Color")
    .max(8, "Not a Valid Color"),
  Size: Yup.string("please enter a valid Size")
    .min(2, "Not a Valid Size")
    .max(8, "Not a Valid Size"),
  Kind: Yup.string("please enter a valid Category")
    .min(2, "Not a Valid Kind")
    .max(8, "Not a Valid Kind"),
});

export default function AddProductForm({
  setOpenModal,
  handleErrorMessage,
  handleSuccessMessage,
}) {
  const storeId = localStorage.getItem("shopId");

  const storeType = useSelector((state) => state.auth.user?.seller?.StoreKind);

  // eslint-disable-next-line no-unused-vars
  const [_image, setImage] = useState();
  const [optionalImages, setOptionalImages] = useState([]);

  const addProductError = () => {
    handleErrorMessage();
  };

  const addProductSuccesfully = () => {
    handleSuccessMessage();
  };

  const { mutate, status } = useAddProduct(
    addProductSuccesfully,
    addProductError
  );

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
      Kind: "",
      Color: "",
      Size: "",
      privateNumber: "",
    },
    validationSchema: productSchema,
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
        {storeType === "Clothing" && (
          <>
            <Typography mb={1} color={"primary"}>
              Size:*
            </Typography>
            <TextField
              type="text"
              placeholder="Size"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputProps: { min: 0 } }}
              sx={{ mb: 2 }}
              error={formik.touched.Size && !!formik.errors.Size}
              helperText={formik.touched.Size && formik.errors.Size}
              {...formik.getFieldProps("Size")}
            />
            <Typography mb={1} color={"primary"}>
              Color:*
            </Typography>
            <TextField
              type="text"
              placeholder="Color"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputProps: { min: 0 } }}
              sx={{ mb: 2 }}
              error={formik.touched.Color && !!formik.errors.Color}
              helperText={formik.touched.Color && formik.errors.Color}
              {...formik.getFieldProps("Color")}
            />
            <Typography mb={1} color={"primary"}>
              Category:*
            </Typography>
            <TextField
              type="text"
              placeholder="Category"
              InputLabelProps={{
                shrink: true,
              }}
              InputProps={{ inputProps: { min: 0 } }}
              sx={{ mb: 2 }}
              error={formik.touched.Kind && !!formik.errors.Kind}
              helperText={formik.touched.Kind && formik.errors.Kind}
              {...formik.getFieldProps("Kind")}
            />
          </>
        )}
        <Typography mb={1} color={"primary"}>
          Secret bank Code:*
        </Typography>
        <TextField
          type="number"
          required
          placeholder="bank code"
          InputLabelProps={{
            shrink: true,
          }}
          InputProps={{ inputProps: { min: 0 } }}
          sx={{ mb: 2 }}
          error={formik.touched.quantity && !!formik.errors.quantity}
          helperText={formik.touched.quantity && formik.errors.quantity}
          {...formik.getFieldProps("privateNumber")}
        />

        <LoadingButton
          loading={status === "pending"}
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

// const AddProductFormFields = [
//   {
//     props: {
//       id: "Name",
//       label: "Product Name:",
//       placeholder: "Product Name",
//       variant: "outlined",
//       type: "text",
//     },
//     fieldProps: "Name",
//     typography: "Product Name",
//   },
//   {
//     props: {
//       id: "quantity",
//       label: "Product Quantity:",
//       placeholder: "Quantity",
//       variant: "outlined",
//       type: "number",
//     },
//     fieldProps: "Count",
//     typography: "Product Quantity",
//   },
//   {
//     props: {
//       id: "Price",
//       label: "Product Price:",
//       placeholder: "Price in Syrian pounds",
//       variant: "outlined",
//       type: "number",
//     },
//     fieldProps: "Price",
//     typography: "Product Price",
//   },
// ];

// see why validation is not working also for EditProductForm
{
  /* {AddProductFormFields.map((field) => (
          <Fragment key={field.props.id}>
            <Typography mb={1} color={"primary"}>
              {field.typography}
            </Typography>
            <Input
              {...field.props}
              fieldProps={field.fieldProps}
              formik={formik}
              {...field.props}
            />
          </Fragment>
        ))} */
}
