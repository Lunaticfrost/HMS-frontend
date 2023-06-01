import { Card } from "react-bootstrap";
import "./DashboardCards.css";
import React, { useState, useEffect } from "react";

function DashboardCards() {
  const [totalRooms, setTotalRooms] = useState(0);
  const [totalStudents, setTotalStudents] = useState(0);
  const [availableRooms, setAvailableRooms] = useState(0);
  const [vacantBeds, setVacantBeds] = useState(0);
  const [filledRooms, setFilledRooms] = useState(0);

  useEffect(() => {
    // Fetch total rooms
    fetchTotalRooms();
    fetchTotalStudents();
    fetchAvailableRooms();
    fetchVacantBeds();
    fetchFilledRooms();
  }, []);

  const fetchTotalRooms = () => {
    fetch("http://localhost:8084/total-rooms")
      .then((response) => response.json())
      .then((data) => {
        setTotalRooms(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const fetchTotalStudents = () => {
    fetch("http://localhost:8084/total-students")
      .then((response) => response.json())
      .then((data) => {
        setTotalStudents(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Fetch available rooms
  const fetchAvailableRooms = () => {
    fetch("http://localhost:8084/available-rooms")
      .then((response) => response.json())
      .then((data) => {
        setAvailableRooms(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Fetch vacant beds
  const fetchVacantBeds = () => {
    fetch("http://localhost:8084/vacant-beds")
      .then((response) => response.json())
      .then((data) => {
        setVacantBeds(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  // Fetch filled rooms
  const fetchFilledRooms = () => {
    fetch("http://localhost:8084/filled-rooms")
      .then((response) => response.json())
      .then((data) => {
        setFilledRooms(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

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
