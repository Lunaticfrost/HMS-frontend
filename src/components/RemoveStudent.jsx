import React, { useState } from 'react';
import './RemoveStudent.css'; 

function RemoveStudent() {
  const [studentId, setStudentId] = useState('');

  const handleDelete = async (e) => {
    e.preventDefault();
    // Perform the DELETE request using the studentId
    try {
      const response = await fetch(`/api/students/${studentId}`, {
        method: 'DELETE',
      });
      if (response.ok) {
        // Success: Handle the response
        console.log('Student deleted successfully');
      } else {
        // Error: Handle the response
        console.log('Error deleting student');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleChange = (e) => {
    setStudentId(e.target.value);
  };

  return (
    <div className="delete-student-container">
      <h2 className="delete-student-heading">Delete Student</h2>
      <form onSubmit={handleDelete} className="delete-student-form">
        <label>
          Student ID:
          <input type="text" value={studentId} onChange={handleChange} className="student-id-input" />
        </label>
        <button type="submit" className="delete-student-button">Delete Student</button>
      </form>
    </div>
  );
}

export default RemoveStudent;
