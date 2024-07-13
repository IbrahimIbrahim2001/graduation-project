import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

import { QrReader } from "react-qr-reader";
import ShopAddToCartBtn from "../Shops/shop/ShopAddToCartBtn";

export default function QrReaderComponent({ handleClose }) {
  const [data, setData] = useState(null);

  return (
    <>
      <IconButton onClick={handleClose}>
        <Close />
      </IconButton>
      <QrReader
        onResult={(result) => {
          if (result) {
            setData(result?.text);
          }
        }}
      />
      {data && <ShopAddToCartBtn shopItemId={data} handleClose={handleClose} />}
    </>
  );
}
