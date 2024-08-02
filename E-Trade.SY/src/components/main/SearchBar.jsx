//mui
import { withStyles } from "@material-ui/core/styles";
import { useMediaQuery } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useSearch } from "../../hooks/useSearch";

import { useFormik } from "formik";

export default function SearchBar() {
  const { mutate } = useSearch();
  const matchesXS = useMediaQuery("(max-width:600px)");

  const formik = useFormik({
    initialValues: {
      serachQuery: "",
    },
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
        />
      ) : (
        <StyledTextField
          placeholder="search for products"
          {...formik.getFieldProps("serachQuery")}
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
