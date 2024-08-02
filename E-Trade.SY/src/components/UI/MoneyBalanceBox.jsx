//mui
import AddCardIcon from "@mui/icons-material/AddCard";
import { Box, Button, Typography } from "@mui/material";
import BalanceComponent from "./BalanceComponent";

export default function MoneyBalanceBox({ darkMode }) {
  return (
    <>
      <Box
        className={`item ${darkMode ? "dark" : "light"}`}
        sx={{
          minHeight: "133.6px",
          mb: 2,
          p: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <BalanceComponent text={"Your Balance: "} balance={500000} />
        <Button
          // onClick={handleOpen}
          type="button"
          sx={{
            borderRadius: "12px",
            fontWeight: "bold",
          }}
          variant="outlined"
          color="success"
          startIcon={<AddCardIcon />}
        >
          <Typography align="right" noWrap>
            Charge Your Balance
          </Typography>
        </Button>
      </Box>
      {/* Modal */}
      {/* <Modal open={openModal} onClose={handleClose}>
              <StyledBox sx={style}>
              </StyledBox>
            </Modal> */}
    </>
  );
}
