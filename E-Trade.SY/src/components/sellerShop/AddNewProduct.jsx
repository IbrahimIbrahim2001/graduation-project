//react hooks
import { useState } from "react";

//mui
import { Close } from "@mui/icons-material";
import LoadingButton from "@mui/lab/LoadingButton";
import { Box, FormControl, IconButton, Modal } from "@mui/material";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

//formik
import { useFormik } from "formik";

//hooks
// import { useSelector } from "react-redux";
import { useAddProduct } from "../../hooks/useAddProduct";

//component
import AddNewProductSnackbarSuccess from "./AddNewProductSnackbarSuccess";
import AddNewProductSnackbarError from "./AddNewProductSnackbarError";

//context
import { useAddProductContext } from "../../context/AddProductProvider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,

  display: "flex",
  flexDirection: "column",
  bgcolor: "background.paper",
  borderRadius: "12px",
  boxShadow: "0 8px 12px 0 rgba(31, 38, 135, 0.37)",
  p: 4,
};

export default function AddNewProduct() {
  const { openModal, setOpenModal } = useAddProductContext();
  const storeId = localStorage.getItem("shopId");
  // eslint-disable-next-line no-unused-vars
  const [_image, setImage] = useState();
  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  const addProductError = () => {
    setErrorMessage(true);
  };

  const addProductSuccesfully = () => {
    setSuccessMessage(true);
  };

  const { mutate, isLoading } = useAddProduct(
    addProductSuccesfully,
    addProductError
  );

  const handleImage = (e) => {
    setImage(e.target.files[0]);
    formik.setFieldValue("image", e.target.files[0]);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      // image,
      optionalImages: [],
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
        setOpenModal(false);
        formik.resetForm();
      } catch (error) {
        console.error("Sign-in failed", error);
      }
    },
  });

  // const handleChange = (field, value) => {
  //   if (field === "optionalImages") {
  //     const files = Array.from(value);
  //     const urls = [];

  //     files.forEach((file) => {
  //       const reader = new FileReader();
  //       reader.onload = () => {
  //         urls.push(reader.result);
  //         if (urls.length === files.length) {
  //           setProduct({
  //             ...product,
  //             [field]: [...product[field], ...urls],
  //           });
  //         }
  //       };
  //       reader.readAsDataURL(file);
  //     });
  //   } else {
  //     setProduct({
  //       ...product,
  //       [field]: value,
  //     });
  //   }
  // };

  return (
    <>
      <Modal
        open={openModal}
        onClose={() => {
          setOpenModal(false);
          formik.resetForm();
        }}
      >
        <Box sx={style}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 2,
            }}
          >
            <Typography variant="h5" color={"primary"} fontWeight={"600"}>
              Add Product:
            </Typography>
            <IconButton
              onClick={() => {
                setOpenModal(false);
                formik.resetForm();
              }}
              sx={{
                backgroundColor: "#1976d2",
                ":hover": { backgroundColor: "#ff4d4d" },
              }}
            >
              <Close sx={{ fontSize: "28px", color: "#fff" }} />
            </IconButton>
          </Box>
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
                {...formik.getFieldProps("optionalImages")}
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
                loading={isLoading}
                type="submit"
                variant="contained"
                sx={{ fontWeight: "bold", color: "#fff" }}
              >
                Add Product
              </LoadingButton>
            </FormControl>
          </form>
        </Box>
      </Modal>

      {successMessage && (
        <AddNewProductSnackbarSuccess
          successMessage={successMessage}
          handleClose={() => {
            setSuccessMessage(false);
            setErrorMessage(false);
          }}
        />
      )}
      {errorMessage && (
        <AddNewProductSnackbarError
          errorMessage={errorMessage}
          handleClose={() => {
            setSuccessMessage(false);
            setErrorMessage(false);
          }}
        />
      )}
    </>
  );
}
