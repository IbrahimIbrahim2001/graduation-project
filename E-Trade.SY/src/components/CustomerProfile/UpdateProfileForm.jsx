//react
import { Fragment } from "react";

//mui
import { Button } from "@mui/material";

//formik
import { useFormik } from "formik";

//hooks
import { useUpdateProfileDetails } from "../../hooks/useUpdateProfile";

//react-redux
import { useDispatch } from "react-redux";

//redux toolkit
import { updateUserDetails } from "../../features/authSlice/authSlice";

//Yup
import * as Yup from "yup";
import Input from "../UI/Input";

const userSchema = Yup.object().shape({
  firstName: Yup.string()
    .required("first name is required")
    .min(2, "first name must be at least 2 characters")
    .max(10, "first name must be at most 10 characters")
    .test("noNumber", "First name cannot start with a number", (value) => {
      return !/^(0|[1-9])/.test(value);
    }),
  lastName: Yup.string()
    .required("last name is required")
    .min(2, "last name must be at least 2 characters")
    .max(10, "last name must be at most 10 characters") // changed from 2 to 10
    .test("noNumber", "Last name cannot start with a number", (value) => {
      return !/^(0|[1-9])/.test(value);
    }),
  address: Yup.string()
    .required("Address is Required")
    .min(8, "Address must be at least 8 characters")
    .max(20, "Address must be at most 20 characters"),

  phoneNumber: Yup.string()
    .required("Phone Number is Required, example: 963955544433")
    .matches(/^\d{12}$/, "Phone Number must be 12 digits starting with 963"),
});

export default function UpdateProfileForm({
  handleEditableState,
  ...userDetails
}) {
  const { first_name, second_name, email, address, telephone } = userDetails;

  const { mutate } = useUpdateProfileDetails();

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      firstName: first_name,
      lastName: second_name,
      email: email,
      phoneNumber: telephone,
      address: address,
    },

    validationSchema: userSchema,
    onSubmit: (values) => {
      try {
        const data = {
          firstName: values.firstName,
          lastName: values.lastName,
          phoneNumber: values.phoneNumber,
          address: values.address,
        };

        mutate(data);
        dispatch(updateUserDetails(data));
        handleEditableState();
      } catch (error) {
        console.error("update profile failed", error);
      }
    },
  });
  const UpdateProfileFormFields = [
    {
      props: {
        id: "firstname",
        label: "First Name",
        variant: "standard",
        type: "text",
      },
      fieldProps: "firstName",
    },
    {
      props: {
        id: "lastname",
        label: "Last name",
        variant: "standard",
        type: "text",
      },
      fieldProps: "lastName",
    },
    {
      props: {
        id: "email",
        label: "Email",
        variant: "standard",
        type: "email",
        isDisabled: true,
      },
      fieldProps: "email",
    },
    {
      props: {
        id: "phone number",
        label: "Phone Number",
        variant: "standard",
        type: "text",
      },
      fieldProps: "phoneNumber",
    },
    {
      props: {
        id: "address",
        label: "Address",
        variant: "standard",
        type: "text",
      },
      fieldProps: "address",
    },
  ];
  return (
    <form
      onSubmit={formik.handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      {UpdateProfileFormFields.map((field) => (
        <Fragment key={field.props.id}>
          <Input
            {...field.props}
            fieldProps={field.fieldProps}
            formik={formik}
            InputProps={{ ...field.inputProps }}
          />
        </Fragment>
      ))}

      <Button type="submit" variant="contained">
        save changes
      </Button>
    </form>
  );
}
