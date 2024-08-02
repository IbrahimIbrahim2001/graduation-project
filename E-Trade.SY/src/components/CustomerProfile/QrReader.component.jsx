import { Close } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import { useState } from "react";

import { QrReader } from "react-qr-reader";
import ShopAddToCartBtn from "../Shops/shop/ShopAddToCartBtn";

// import adapter from "webrtc-adapter";

export default function QrReaderComponent({ handleClose }) {
  // const adaptee = adapter.browserDetails.browser;
  // // const version = adapter.browserDetails.version;
  // console.log(
  //   `Browser: ${adaptee}, Version: ${adapter.browserDetails.version}`
  // );

  const [data, setData] = useState(null);

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
        }}
      />
      {data && <ShopAddToCartBtn shopItemId={data} handleClose={handleClose} />}
    </>
  );
}
