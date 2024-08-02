//soon... globally used across the app
import { TextField } from "@mui/material";
import { withStyles } from "@material-ui/core/styles";

export default function Input({
  id,
  label,
  placeholder,
  variant,
  type,
  extra, //optional => for the option field in storeregister
  formik,
  fieldProps,
  isDisabled = false, //optional => for the email only
  InputProps = "", //optional => for the password
  children, //optional => for the storeType
}) {
  return (
    <StyledTextField
      id={id}
      label={label}
      hiddenLabel={placeholder ? true : false}
      aria-label=""
      placeholder={placeholder}
      variant={variant}
      type={type}
      fullWidth
      autoComplete="off"
      noValidate
      required
      select={extra}
      disabled={isDisabled}
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
