//soon... globally used across the app
import { TextField } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";

export default function Input({
  id,
  label,
  variant,
  type,
  extra, //optinal
  formik, // optional
  fieldProps,
  // defaultValue = "",
  isDisabled = false, //optional
  InputProps = "", //optional
  children, //optional
}) {
  return (
    <StyledTextField
      id={id}
      label={label}
      variant={variant}
      type={type}
      fullWidth
      autoComplete="off"
      noValidate
      required
      select={extra}
      disable={isDisabled.toString()}
      sx={{ marginBottom: 2 }}
      InputProps={InputProps}
      {...formik.getFieldProps(fieldProps)}
      error={formik.touched.fieldProps && !!formik.errors.fieldProps}
      helperText={formik.touched[fieldProps] && formik.errors[fieldProps]}
    >
      {children}
    </StyledTextField>
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
