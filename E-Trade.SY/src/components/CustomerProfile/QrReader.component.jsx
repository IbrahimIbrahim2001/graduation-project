import { Close } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";

import { QrReader } from "react-qr-reader";
import ShopAddToCartBtn from "../Shops/shop/ShopAddToCartBtn";

export default function QrReaderComponent({ handleClose }) {
  const [data, setData] = useState(null);
  const ObjectData = JSON.parse(data);
  return (
    <>
      <IconButton onClick={handleClose} sx={{ alignSelf: "flex-end" }}>
        <Close />
      </IconButton>
      <QrReader
        constraints={{
          aspectRatio: 1,
          audio: false,
          video: {
            facingMode: { exact: "environment" },
          },
          facingMode: { ideal: "environment" },
        }}
        key="environment"
        onResult={(result) => {
          if (result) {
            setData(result?.text);
          }
        }}
        className="qr-reader"
        videoContainerStyle={{
          justifySelf: "center",
          margin: "10px 0",
        }}
      />
      {data && (
        <ShopAddToCartBtn
          shopItemId={ObjectData.shopItemId}
          shopItemPrice={ObjectData.shopItemPrice}
          handleClose={handleClose}
        />
      )}
      {data && (
        <Box sx={{ my: 2 }}>
          <Typography>item name: {ObjectData.shopItemName}</Typography>
          <Typography>item price: {ObjectData.shopItemPrice}</Typography>
        </Box>
      )}
    </>
  );
}
