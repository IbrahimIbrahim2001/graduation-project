//mui
import { Modal } from "@mui/material";

//component
import { StyledBox } from "./ShopItemModal";
import ShopAddToCartBtn from "./ShopAddToCartBtn";
import AprioriList from "../AprioriList";

//additional styles for StyledBox
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: { sm: 500, md: 700, lg: 800 },
  maxHeight: 500,
  borderRadius: "12px",
  boxShadow: "0 8px 12px 0 rgba(31, 38, 135, 0.37)",
  p: 4,
  display: "flex", // for addToCartStyles
  flexDirection: "column", // for addTocartStyles also
};

const addToCartBtnStyles = {
  width: "50%",
  display: "flex",
  alignSelf: "flex-end",
};

export default function ShopItemModalDesktop({
  shopItem,
  openModal,
  handleClose,
  children,
}) {
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-item"
      aria-describedby="modal-item"
    >
      <StyledBox sx={style}>
        {children}
        <ShopAddToCartBtn
          shopItemPrice={shopItem.price}
          shopItemId={shopItem.id}
          {...addToCartBtnStyles}
        />
        <AprioriList shopItemId={shopItem.id} />
      </StyledBox>
    </Modal>
  );
}
