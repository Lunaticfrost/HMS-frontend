import React, { useState } from "react";
import "./RemoveStudent.css";
import Alert from '@mui/material/Alert';

function RemoveStudent() {
  const [studentId, setStudentId] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isFailure, setIsFailure] = useState(false);

  const handleDelete = async (e) => {
    e.preventDefault();
    // Perform the DELETE request using the studentId
    try {
      const response = await fetch(
        `http://localhost:8084/delete-students?id=${studentId}`,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        // Success: Handle the response
        setIsSuccess(true);
        setStudentId("");
        console.log("Student deleted successfully");
      } else {
        // Error: Handle the response
        setIsFailure(true);
        setStudentId("");
        console.log("Error deleting student");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleChange = (e) => {
    setStudentId(e.target.value);
    setIsSuccess(false);
    setIsFailure(false);
  };

  return (
    <>
      {isFailure && <Alert severity="error">Some Error Occurred</Alert>}
      {isSuccess && (
        <Alert severity="success">Student Successfully Deleted</Alert>
      )}
      <div className="delete-student-container">
        <h2 className="delete-student-heading">Delete Student</h2>
        <form onSubmit={handleDelete} className="delete-student-form">
          <label>
            Student ID:
            <input
              type="text"
              value={studentId}
              onChange={handleChange}
              className="student-id-input"
            />
          </label>
          <button type="submit" className="delete-student-button">
            Delete Student
          </button>
        </form>
      </div>
    </>
  );
}

export default RemoveStudent;
