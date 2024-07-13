//mui
import { Box } from "@mui/material";

//component
import ImageCarousel from "./ImageCarousel";
import ModalItemDescription from "./ModalItemDescription";

//context
import ShopItemQrCodeGenerator from "./ShopItemQrCodeGenerator";

export default function ModalElements({ images, shopItem, shopName }) {
  return (
    <>
      <ImageCarousel images={images} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          height: { xs: "auto", sm: 500 },
          mb: { sm: 4 },
        }}
      >
        <ModalItemDescription shopItem={shopItem} shopName={shopName} />
        <ShopItemQrCodeGenerator shopItemId={shopItem.id} />
      </Box>
    </>
  );
}
