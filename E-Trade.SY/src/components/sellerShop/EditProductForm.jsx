// const productId = req.body.productId;
// const Name = req.body.Name;
// const Count = req.body.Count;
// const Price = req.body.Price;
// const Size = req.body.Size ? req.body.Size : null;
// const Color = req.body.Color ? req.body.Color : null;
// const Kind = req.body.Kind ? req.body.Kind : null;

//react
import { Fragment } from "react";

//mui
import { LoadingButton } from "@mui/lab";
import { Typography, FormControl } from "@mui/material";

//UI
import Input from "../UI/Input";

//formik
import { useFormik } from "formik";

//hooks
import { useUpdateProduct } from "../../hooks/useUpdateProduct";

const EditProductFormFields = [
  {
    props: {
      id: "Name",
      label: "Product Name:",
      variant: "outlined",
      type: "text",
    },
    fieldProps: "Name",
    typography: "Product Name",
  },
  {
    props: {
      id: "quantity",
      label: "Product Quantity:",
      variant: "outlined",
      type: "number",
    },
    fieldProps: "Count",
    typography: "Product Quantity",
  },
  {
    props: {
      id: "Price",
      label: "Product Price:",
      variant: "outlined",
      type: "number",
    },
    fieldProps: "Price",
    typography: "Product Price",
  },
];

export default function EditProductForm({ shopItem }) {
  const { mutate, status } = useUpdateProduct(shopItem.StoreId);
  const formik = useFormik({
    initialValues: {
      id: shopItem.id,
      Name: shopItem.name,
      Count: shopItem.count,
      Price: shopItem.price,
    },
    // validationSchema: updateProductSchema,
    onSubmit: (values) => {
      const data = {
        productId: shopItem.id,
        Name: values.Name,
        Count: values.Count,
        Price: values.Price,
      };
      mutate(data);
    },
  });
  return (
    <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
      <FormControl fullWidth>
        {EditProductFormFields.map((field) => (
          <Fragment key={field.props.id}>
            <Typography mb={1} color={"primary"}>
              {field.typography}
            </Typography>
            <Input
              {...field.props}
              fieldProps={field.fieldProps}
              formik={formik}
              InputProps={{ ...field.inputProps }}
            />
          </Fragment>
        ))}
        <LoadingButton
          loading={status === "pending"}
          type="submit"
          variant="contained"
          sx={{ fontWeight: "bold", color: "#fff" }}
        >
          Update Product
        </LoadingButton>
      </FormControl>
    </form>
  );
}
