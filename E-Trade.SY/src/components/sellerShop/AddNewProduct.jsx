//react hooks
import { useState } from "react";

//mui

import { Hidden } from "@mui/material";

//component
import AddNewProductSnackbarError from "./AddNewProductSnackbarError";
import AddNewProductSnackbarSuccess from "./AddNewProductSnackbarSuccess";

//context
import { useAddProductContext } from "../../context/AddProductProvider";
import AddProductForm from "./AddProductForm";
import AddProductModal from "./AddProductModal";
import AddProductDrawer from "./AddProductDrawer";

export default function AddNewProduct() {
  const { openModal, setOpenModal } = useAddProductContext();

  const [errorMessage, setErrorMessage] = useState(false);
  const [successMessage, setSuccessMessage] = useState(false);

  return (
    <>
      <Hidden smDown>
        <AddProductModal openModal={openModal} setOpenModal={setOpenModal}>
          <AddProductForm
            setOpenModal={setOpenModal}
            handleErrorMessage={() => setErrorMessage(false)}
            handleSuccessMessage={() => setSuccessMessage(true)}
          />
        </AddProductModal>
      </Hidden>

      <Hidden smUp>
        <AddProductDrawer openModal={openModal} setOpenModal={setOpenModal}>
          <AddProductForm
            setOpenModal={setOpenModal}
            handleErrorMessage={() => setErrorMessage(false)}
            handleSuccessMessage={() => setSuccessMessage(true)}
          />
        </AddProductDrawer>
      </Hidden>

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
