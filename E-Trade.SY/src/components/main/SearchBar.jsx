//mui
import { withStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useSearch } from "../../hooks/useSearch";

import { useFormik } from "formik";

//Yup
import * as Yup from "yup";

const searchSchema = Yup.object().shape({
  serachQuery: Yup.string()
    .required()
    .min(2, "search query must be at least 8 characters")
    .max(20, "search query must be at most 20 characters"),
});

export default function SearchBar() {
  const { mutate } = useSearch();
  const matchesXS = useMediaQuery("(max-width:600px)");

  const formik = useFormik({
    initialValues: {
      serachQuery: "",
    },
    validationSchema: searchSchema,
    onSubmit: async (value) => {
      mutate(value.serachQuery);
      formik.setFieldValue("serachQuery", "");
    },
  });

  return (
    <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
      {matchesXS ? (
        <StyledTextFieldForXsScreens
          placeholder="search for products"
          {...formik.getFieldProps("serachQuery")}
          error={formik.touched.serachQuery && !!formik.errors.serachQuery}
        />
      ) : (
        <StyledTextField
          placeholder="search for products"
          {...formik.getFieldProps("serachQuery")}
          error={formik.touched.serachQuery && !!formik.errors.serachQuery}
        />
      )}
    </form>
  );
}

const StyledTextField = withStyles(() => ({
  root: {
    "& .MuiOutlinedInput-root": {
      height: "40px",

      "& fieldset": {
        borderRadius: "8px",
      },
    },
  },
}))(TextField);

const StyledTextFieldForXsScreens = withStyles({
  root: {
    "& .MuiOutlinedInput-root": {
      height: "40px",
      backgroundColor: "white",
      color: "#333",
      borderRadius: "8px",
      "& fieldset": {
        borderRadius: "8px",
      },
    },
  },
})(TextField);
