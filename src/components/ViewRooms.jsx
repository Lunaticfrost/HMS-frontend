import React, { useState, useEffect } from 'react';

import './ViewRooms.css';

function ViewRooms() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    fetch('/api/rooms')
      .then(response => response.json())
      .then(data => {
        setRooms(data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="view-rooms-container">
      <h2 className="view-rooms-heading">View Rooms</h2>
      <table className="rooms-table">
        <thead>
          <tr>
            <th>Room Number</th>
            <th>Capacity</th>
            <th>Includes AC</th>
            <th>Status</th>
            <th>Vacancy</th>
          </tr>
        </thead>
        <tbody>
          {rooms.map(room => (
            <tr key={room.id}>
              <td>{room.roomNumber}</td>
              <td>{room.capacity}</td>
              <td>{room.includesAc ? 'Yes' : 'No'}</td>
              <td>{room.status}</td>
              <td>{room.vacancy}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ViewRooms;
