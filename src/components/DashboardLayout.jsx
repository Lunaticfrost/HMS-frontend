import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Navbar, Container, Row, Col } from "react-bootstrap";
import { FaHome } from 'react-icons/fa';

import DashboardCards from "./DashboardCards";
import "./DashboardLayout.css";

import AddStudent from "./AddStudent";
import RemoveStudent from "./RemoveStudent";
import AddRoom from "./AddRoom";
import ViewStudents from "./ViewStudents";
import ViewRooms from "./ViewRooms";

function DashboardLayout() {
  const [isClicked, setIsClicked] = useState(false);

  const sideClickHandler = () => {
    setIsClicked(true);
  };
  const homeClickHandler = () => {
    setIsClicked(false);
  };

  return (
    <div className="dashboard-layout background-image">
      <Navbar bg="dark" variant="dark" expand="lg" className="mb-0">
        <Container fluid>
          <button onClick={homeClickHandler} type="button">
            <FaHome />
          </button>
          <Navbar.Brand className="mx-auto">Hostel Management</Navbar.Brand>
        </Container>
      </Navbar>
      <Container fluid className="p-0">
        <Row className="h-100">
          <Col sm={2} className="bg-dark text-light sidebar">
            <ul className="sidebar-menu">
              <li>
                <Link to="/add-student" onClick={sideClickHandler}>
                  Add Student
                </Link>
              </li>
              <li>
                <Link to="/remove-student" onClick={sideClickHandler}>
                  Remove Student
                </Link>
              </li>
              <li>
                <Link to="/add-room" onClick={sideClickHandler}>
                  Add Room
                </Link>
              </li>
              <li>
                <Link to="/view-students" onClick={sideClickHandler}>
                  View Students
                </Link>
              </li>
              <li>
                <Link to="/view-rooms" onClick={sideClickHandler}>
                  View Rooms
                </Link>
              </li>
            </ul>
          </Col>
          <Col sm={10} className="pl-0 h-100">
            <div className="main-content">
              {isClicked && (
                <div>
                  <Routes>
                    <Route path="/add-student" element={<AddStudent />} />
                    <Route path="/remove-student" element={<RemoveStudent />} />
                    <Route path="/add-room" element={<AddRoom />} />
                    <Route path="/view-students" element={<ViewStudents />} />
                    <Route path="/view-rooms" element={<ViewRooms />} />
                  </Routes>
                </div>
              )}
              {!isClicked && <DashboardCards />}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default DashboardLayout;
