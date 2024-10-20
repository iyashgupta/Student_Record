import React, { useState } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import "./BlogRegistration.css";

// Define the fields for the form
const formsField = [
  { id: 1, name: "title", errMessage: "Field cannot be empty" },
  { id: 2, name: "author", errMessage: "Field cannot be empty" },
  { id: 3, name: "content", errMessage: "Field cannot be empty" },
  { id: 4, name: "description", errMessage: "Field cannot be empty" },
];

const BlogRegistrationForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    content: "",
    description: "",
  });

  const [formErrors, setFormErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (value) {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    } else {
      setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: true,
      }));
    }
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = {};
    formsField.forEach((field) => {
      if (!formData[field.name]) {
        errors[field.name] = true;
      }
    });
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      // Proceed with form submission logic
      console.log("Form submitted successfully", formData);
    }
  };

  return (
    <div className="main_blog">
      <form className="form-group" onSubmit={handleSubmit}>
        {formsField.map((ele) => (
          <FormControl key={ele.id} isInvalid={formErrors[ele.name]} mb={2}>
            <FormLabel>{ele.name.charAt(0).toUpperCase() + ele.name.slice(1)}</FormLabel>
            <Input
              type="text" 
              name={ele.name} // Add name for input binding
              width="100%"
              value={formData[ele.name]} 
              onChange={handleChange} // Handle change
            />
            <FormErrorMessage 
              mt={0} 
              visibility={formErrors[ele.name] ? "visible" : "hidden"} // Use visibility to control display
            >
              {ele.errMessage}
            </FormErrorMessage>
          </FormControl>
        ))}
        <Button type="submit" colorScheme="teal" mt={4}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default BlogRegistrationForm;
