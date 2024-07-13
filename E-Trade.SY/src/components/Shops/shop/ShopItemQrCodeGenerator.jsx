import QRCode from "react-qr-code";

export default function ShopItemQrCodeGenerator({ shopItemId }) {
  return (
    <div
      style={{
        background: "#f2f2f2",
        padding: "12px",
        width: "fit-content",
        borderRadius: "16px",
        display: "flex",
        margin: "10px 0",
      }}
    >
      <QRCode
        size={256}
        style={{
          height: "100px",
          maxWidth: "100%",
          width: "100%",
          borderRadius: "8px",
        }}
        bgColor="#fff"
        fgColor="#2200FF"
        value={JSON.stringify(shopItemId)}
        viewBox={`0 0 256 256`}
      />
    </div>
  );
}
