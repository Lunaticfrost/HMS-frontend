import React, { useState, useEffect } from 'react';



import './ViewStudents.css';

function ViewStudents() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8084/students')
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
      <table className="table table-bordered table-dark table-striped table-hover table-xl">
        <thead className='thead-dark'>
          <tr>
            <th>Student Id</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Food Preference</th>
            <th>Parent Name</th>
            <th>Parent Phone</th>
            <th>Room Type</th>
            <th>Room Number</th>
            <th>Ac room</th>
          </tr>
        </thead>
        <tbody className='table-light'>
          {students.map(student => (
            <tr key={student.id}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.email}</td>
              <td>{student.phone}</td>
              <td>{student.foodPreference}</td>
              <td>{student.parentName}</td>
              <td>{student.parentPhone}</td>
              <td>{student.roomType} Seater</td>
              <td>{student.roomNumber}</td>
              <td>{student.requiresAc ? 'Yes' : 'No'}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
}

export default ViewStudents;
