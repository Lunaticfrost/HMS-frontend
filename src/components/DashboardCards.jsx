import React from 'react';
import { Card } from 'react-bootstrap';
import './DashboardCards.css';

function DashboardCards() {
    
    //Sample Data
    const totalRooms = 20;
    const totalStudents = 50;
    const availableRooms = 10;
  
    return (
      <div className="dashboard-cards">
        <Card className='dashboard-card'>
          <Card.Body>
            <Card.Title>Total Rooms</Card.Title>
            <Card.Text>{totalRooms}</Card.Text>
          </Card.Body>
        </Card>
  
        <Card className='dashboard-card'>
          <Card.Body>
            <Card.Title>Total Students</Card.Title>
            <Card.Text>{totalStudents}</Card.Text>
          </Card.Body>
        </Card>
  
        <Card className='dashboard-card'>
          <Card.Body>
            <Card.Title>Available Rooms</Card.Title>
            <Card.Text>{availableRooms}</Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
  
  export default DashboardCards;
  