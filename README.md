# React CRUD User Management Application
This is a simple React-based CRUD (Create, Read, Update, Delete) application for managing /user data.  
The project is  designed with future extensibility in mind, allowing new form fields to be added with minimal code changes(userFormSchema).

## Features
- Create a new user
- View list of users
- Update existing user details
- Delete a user
- Input validation for all fields   
- Single reusable form for both Create and Update
- Schema-driven form design for easy extensibility
- Clean and responsive UI using plain CSS

## Tech Stack
- React 
- JavaScript (ES6+)
- Axios (API communication)
- JSON-server (Mock backend)
- Plain CSS

## Adding Additional Fields
This project is built using a reusable and scalable approach, so adding new fields is straightforward. Follow the steps below carefully.
- Add the new fields to userFormSchema.
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
  
  // NEW FIELD
  {
    name: "email",
    label: "Email Address",
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Enter valid email address",
  },
];


- Also update the initial state:
const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
  //NEW FIELD
  email: "",
};

- This works automatically for newly added fields.
