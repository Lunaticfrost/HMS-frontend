import React, { useState, useEffect } from 'react';

import './ViewStudents.css';

function ViewStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('/api/students')
      .then(response => response.json())
      .then(data => {
        setStudents(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="view-students-container">
      <h2 className="view-students-heading">View Students</h2>
      <table className="students-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Food Preference</th>
            <th>Parent Name</th>
            <th>Parent Phone</th>
            <th>Room Type</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.foodPreference}</td>
              <td>{student.parentName}</td>
              <td>{student.parentPhone}</td>
              <td>{student.roomType}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewStudents;
