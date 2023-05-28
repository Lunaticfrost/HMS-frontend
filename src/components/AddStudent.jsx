import React, { useState } from 'react';
import './AddStudent.css';

function AddStudent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    foodPreference: '',
    parentName: '',
    parentPhone: '',
    roomType: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Perform the POST request using formData
    try {
      const response = await fetch('/api/students', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        // Success: Handle the response
        console.log('Student added successfully');
      } else {
        // Error: Handle the response
        console.log('Error adding student');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="add-student-container">
      <h2 className="add-student-heading">Add Student</h2>
      <form className="add-student-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} />
        </label>
        <label>
          Email:
          <input type="email" name="email" value={formData.email} onChange={handleChange} />
        </label>
        <label>
          Phone:
          <input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </label>
        <label>
          Food Preference:
          <input
            type="text"
            name="foodPreference"
            value={formData.foodPreference}
            onChange={handleChange}
          />
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
          <select name="roomType" value={formData.roomType} onChange={handleChange}>
            <option value="">Select</option>
            <option value="3-seater">3 Seater</option>
            <option value="4-seater">4 Seater</option>
          </select>
        </label>
        <button type="submit">Add Student</button>
      </form>
    </div>
  );
}

export default AddStudent;
