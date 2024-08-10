import { withStyles } from "@material-ui/core/styles";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";
import { Box, Button, FormControl, TextField } from "@mui/material";

//formik
import { useFormik } from "formik";

//redux toolit
import { useDispatch, useSelector } from "react-redux";

//yup
import * as Yup from "yup";

//hooks
import { usePayBill } from "../../hooks/usePayBill";
import { reset } from "../../features/cartSlice/cartSlice";

export default function PayForm({ bill, handleClose, handleErrorMessage }) {
  const { privateNumber: pN } = useSelector((state) => state.auth?.user);
  const dispatch = useDispatch();

  const onSuccess = (res) => {
    if (res) {
      dispatch(reset());
    } else {
      handleClose();
      handleErrorMessage();
    }
    handleClose();
  };

  const onError = () => {
    handleErrorMessage();
  };
  const { mutate } = usePayBill(onSuccess, onError);

  const PayShema = Yup.object().shape({
    privateNumber: Yup.number("Not a Valid Number")
      .positive("Not a Valid Number")
      .required("insert your secret bank code please")
      .test("insert your secret bank code please", (value) => {
        return value === pN ? value : null;
      }),
  });
  const formik = useFormik({
    initialValues: {
      totalBill: bill,
      privateNumber: undefined,
    },
    validationSchema: PayShema,
    onSubmit: (values) => mutate(values),
  });
  return (
    <>
      <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <FormControl fullWidth>
          <StyledTextField
            id="privat nuumber"
            type="number"
            placeholder="your secret bank code please"
            {...formik.getFieldProps("privateNumber")}
            error={
              formik.touched.privateNumber && !!formik.errors.privateNumber
            }
            helperText={
              formik.touched.privateNumber && formik.errors.privateNumber
            }
          />
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 2,
            }}
          >
            <Button
              type="submit"
              variant="outlined"
              color="success"
              endIcon={<CheckIcon />}
              sx={{ fontWeight: "bold" }}
            >
              confirm
            </Button>
            <Button
              type="button"
              variant="outlined"
              color="error"
              endIcon={<CloseIcon />}
              onClick={handleClose}
              sx={{ fontWeight: "bold" }}
            >
              decline
            </Button>
          </Box>
        </FormControl>
      </form>
    </>
  );
}

const StyledTextField = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderRadius: "8px",
      },
    },
  },
})(TextField);
