import * as yup from "yup";

export const formSchema = yup.object().shape({
  contacts: yup.object().shape({
    email: yup
      .string()
      .email("Incorrect email format")
      .required("Email is a required field"),
  }),
});
