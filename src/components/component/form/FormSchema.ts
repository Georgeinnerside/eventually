import * as yup from "yup";

const schema = yup.object().shape({
  fullname: yup.string().required("Full name is required"),
  email: yup
    .string()
    .email("Please enter valid date")
    .required("Email is required"),
  phoneNumber: yup.string().required("Phone number is required"),
  eventType: yup.string().required("Please choose event type"),
  date: yup
    .date()
    .required("Date required")
    .typeError("Please enter valid date"),
  numberOfGuests: yup
    .number()
    .min(1, "you must have at leat one number of guest!")
    .required("please input number of guests"),
});

export default schema;

export type FormValues = yup.InferType<typeof schema>
