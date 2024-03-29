import React, { useState } from "react";
import Alert from "@mui/material/Alert";
import "./AddStudent.css";

function AddStudent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    foodPreference: "",
    parentName: "",
    parentPhone: "",
    roomType: "",
    includeAc: false,
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform the POST request using formData
    try {
      const response = await fetch("http://localhost:8084/add-student", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Success: Handle the response
        setIsSuccess(true);
        console.log("Student added successfully");
        setFormData({
          name: "",
          email: "",
          phone: "",
          foodPreference: "",
          parentName: "",
          parentPhone: "",
          roomType: "",
          includeAc: false,
        });
      } else {
        // Error: Handle the response
        setIsFailure(true);
        console.log("Error adding student");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
    setIsSuccess(false);
    setIsFailure(false);
  };

  return (
    <>
      {isFailure && <Alert severity="error">Some Error Occurred</Alert>}
      {isSuccess && (
        <Alert severity="success">Student Successfully Added</Alert>
      )}
      <div className="add-student-container">
        <h2 className="add-student-heading">Add Student</h2>
        <form className="add-student-form" onSubmit={handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          <label>
            Phone:
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </label>
          <label>
            Food Preference:
            <select
              name="foodPreference"
              value={formData.foodPreference}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="veg">Veg</option>
              <option value="non-veg">Non-veg</option>
            </select>
          </label>
          <label>
            Parent Name:
            <input
              type="text"
              name="parentName"
              value={formData.parentName}
              onChange={handleChange}
            />
          </label>
          <label>
            Parent Phone:
            <input
              type="tel"
              name="parentPhone"
              value={formData.parentPhone}
              onChange={handleChange}
            />
          </label>
          <label>
            Room Type:
            <select
              name="roomType"
              value={formData.roomType}
              onChange={handleChange}
            >
              <option value="">Select</option>
              <option value="3">3 Seater</option>
              <option value="4">4 Seater</option>
            </select>
          </label>
          <label>
            AC Room:
            <input
              type="checkbox"
              name="includeAc"
              checked={formData.includeAc}
              onChange={handleChange}
            />
          </label>
          <button type="submit">Add Student</button>
        </form>
      </div>
    </>
  );
}

export default AddStudent;
