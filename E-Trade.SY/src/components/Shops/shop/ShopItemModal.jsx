//mui
import { Hidden } from "@material-ui/core";
import { styled } from "@mui/material/styles";

//component
import ModalElements from "./ModalElements";
import ShopItemModalDesktop from "./ShopItemModalDesktop";
import ShopItemModalMobile from "./ShopItemModalMobile";

//for StyledBox in ShopItemModalDesktop && ShopItemModalMobile
export const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === "light" ? "#fff" : "rgba(17, 25, 40, 1)",
  overflowY: "scroll",
  overflowX: "clip",
  "::-webkit-scrollbar": {
    display: "none",
  },
}));

export default function ShopItemModal({
  shopItem,
  shopName,
  openModal,
  setOpenModal,
}) {
  const images = [];
  const imageArray = shopItem.images || [];
  images.push(shopItem?.photo_data);
  images.push(...imageArray.flatMap((curr) => Object.values(curr)));

  const handelClose = () => {
    setOpenModal(false);
  };

  const handleOpen = () => {
    setOpenModal(true);
  };

  return (
    <>
      <Hidden xsDown>
        <ShopItemModalDesktop
          openModal={openModal}
          handleClose={handelClose}
          shopItem={shopItem}
        >
          <ModalElements
            images={images}
            shopItem={shopItem}
            shopName={shopName}
          />
        </ShopItemModalDesktop>
      </Hidden>
      <Hidden smUp>
        <ShopItemModalMobile
          openModal={openModal}
          handleClose={handelClose}
          handleOpen={handleOpen}
          shopItem={shopItem}
        >
          <ModalElements
            images={images}
            shopItem={shopItem}
            shopName={shopName}
          />
        </ShopItemModalMobile>
      </Hidden>
    </>
  );
}
