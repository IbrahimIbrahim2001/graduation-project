//soon... globally used across the app

// props: {id, label, variant, type, fieldProps, defaultValue}
export default function Input() {
  return <div>Input</div>;
}
//  <TextField
//    label="first name:"
//    defaultValue={first_name}
//    variant="standard"
//    disabled={!isEditable}
//    type="text"
//    fullWidth
//    autoComplete="off"
//    noValidate
//    required
//    sx={{ marginBottom: 2 }}
//    {...formik.getFieldProps("firstName")}
//    error={formik.touched.firstName && !!formik.errors.firstName}
//    helperText={formik.touched.firstName && formik.errors.firstName}
//  />;

//  <StyledTextField
//    id="firstname"
//    label="First Name"
//    variant="outlined"
//    type="text"
//    fullWidth
//    autoComplete="off"
//    noValidate
//    required
//    sx={{ marginBottom: 2 }}
//    {...formik.getFieldProps("firstName")}
//    error={formik.touched.firstName && !!formik.errors.firstName}
//    helperText={formik.touched.firstName && formik.errors.firstName}
//  />;

// const StyledTextField = withStyles({
//   root: {
//     "& .MuiOutlinedInput-root": {
//       "& fieldset": {
//         borderRadius: "8px",
//       },
//     },
//   },
// })(TextField);
