const userFormSchema = [
  {
    name: "firstName",
    label: "First Name",
    required: true,
  },
  {
    name: "lastName",
    label: "Last Name",
    required: true,
  },
  {
    name: "phone",
    label: "Phone Number",
    required: true,
    pattern: /^[0-9]{10}$/,
    errorMessage: "Enter valid 10 digit phone number",
  },
  {
    name: "email",
    label: "Email Address",
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Enter valid email address",
  },
  {
    name: "DOB",
    label: "Date of Birth",
    required: false,
    pattern: /^\d{2}-\d{2}-\d{4}$/,
    errorMessage: "Enter valid date of birth (DD-MM-YYYY)",
  },
];

export default userFormSchema;
