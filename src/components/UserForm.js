import { useEffect, useState } from "react";
import userFormSchema from "../config/userFormSchema";

const initialState = {
  firstName: "",
  lastName: "",
  phone: "",
  email: "",
};

function UserForm({ onSubmit, selectedUser }) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (selectedUser) setFormData(selectedUser);
  }, [selectedUser]);

  const validate = () => {
    const newErrors = {};

    userFormSchema.forEach((field) => {
      const value = formData[field.name];

      if (field.required && !value) {
        newErrors[field.name] = `${field.label} is required`;
      }

      if (field.pattern && value && !field.pattern.test(value)) {
        newErrors[field.name] = field.errorMessage;
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) onSubmit(formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      {userFormSchema.map((field) => (
        <div className="form-group" key={field.name}>
          <label>{field.label}</label>
          <input
            value={formData[field.name]}
            onChange={(e) =>
              setFormData({
                ...formData,
                [field.name]: e.target.value,
              })
            }
          />
          {errors[field.name] && (
            <span className="error">{errors[field.name]}</span>
          )}
        </div>
      ))}

      <button type="submit">
        {selectedUser ? "Update User" : "Create User"}
      </button>
    </form>
  );
}

export default UserForm;
