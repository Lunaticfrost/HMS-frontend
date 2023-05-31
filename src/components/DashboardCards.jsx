
import { Card } from 'react-bootstrap';
import './DashboardCards.css';
import React, { useState, useEffect } from 'react';

function DashboardCards() {
  const [totalRooms, setTotalRooms] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [availableRooms, setAvailableRooms] = useState(0);
  const [vacantBeds, setVacantBeds] = useState(0);
  const [filledRooms, setFilledRooms] = useState(0);

  useEffect(() => {
    // Fetch total rooms
    fetch('/api/total-rooms')
      .then(response => response.json())
      .then(data => {
        setTotalRooms(data.totalRooms);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Fetch total students
    fetch('/api/total-students')
      .then(response => response.json())
      .then(data => {
        setTotalStudents(data.totalStudents);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Fetch available rooms
    fetch('/api/available-rooms')
      .then(response => response.json())
      .then(data => {
        setAvailableRooms(data.availableRooms);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Fetch vacant beds
    fetch('/api/vacant-beds')
      .then(response => response.json())
      .then(data => {
        setVacantBeds(data.vacantBeds);
      })
      .catch(error => {
        console.error('Error:', error);
      });

    // Fetch filled rooms
    fetch('/api/filled-rooms')
      .then(response => response.json())
      .then(data => {
        setFilledRooms(data.filledRooms);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <>
    <div className="dashboard-cards">
      <Card className="dashboard-card">
        <Card.Body>
        <Card.Title>Total Rooms</Card.Title>
        <Card.Text>{totalRooms}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="dashboard-card">
        <Card.Body>
        <Card.Title>Total Students</Card.Title>
        <Card.Text>{totalStudents}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="dashboard-card">
        <Card.Body>
        <Card.Title>Available Rooms</Card.Title>
        <Card.Text>{availableRooms}</Card.Text>
        </Card.Body>
      </Card>
      </div>
      <div className="dashboard-cards">
      <Card className="dashboard-card">
        <Card.Body>
        <Card.Title>Vacant Beds</Card.Title>
        <Card.Text>{vacantBeds}</Card.Text>
        </Card.Body>
      </Card>
      <Card className="dashboard-card">
        <Card.Body>
        <Card.Title>Filled Rooms</Card.Title>
        <Card.Text>{filledRooms}</Card.Text>
        </Card.Body>
      </Card>
    </div>
    </>
  );
}

export default DashboardCards;
