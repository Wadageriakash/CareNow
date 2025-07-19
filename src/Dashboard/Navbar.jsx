// Navbar.jsx
import React from "react";
import { useState } from "react";
import { Navigate, useNavigate } from 'react-router-dom';
import './Navbar.css'; // Import your CSS

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // Corrected typo: searchTearm -> searchTerm
  const [isMeDropdownOpen, setIsMeDropdownOpen] = useState(false);
  const [isAppointmentDropdownOpen, setIsAppointmentDropdownOpen] = useState(false);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };
  const handleSearchButton = (event) => {
    event.preventDefault();
    console.log("searchTerm ", searchTerm);
  };
  const handleMeMouseEnter = () => {
    setIsMeDropdownOpen(true);
  };
  const handleMeMouseLeave = () => {
    setIsMeDropdownOpen(false);
  };
  const handleAppointmentMouseEnter = () => { // Corrected typo: hanldeAppointmentMouseEnter -> handleAppointmentMouseEnter
    setIsAppointmentDropdownOpen(true);
  }
  const handleAppointmentMouseLeave = () => {
    setIsAppointmentDropdownOpen(false);
  }
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  }

  const ScheduleNewAppointments = () => {
    navigate("/newappointment")
  }

  return (
    <>
      <nav className="navbar">
        <div className="search-bar-container">
          <div className="search-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              width="25px"
              height="25px"
              color="black"
            >
              <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
            </svg>
          </div>

          <input
            type="text"
            placeholder="Search"
            className="search-input"
            value={searchTerm}
            onChange={handleSearchChange}
          />
          {/* Removed handleSearchButton from here as it's not a button */}
        </div>
        <ul className="nav-links">
          <li>
            <a>Dashboard</a>
          </li>
          <li
            className="dropdown-container"
            onMouseEnter={handleAppointmentMouseEnter}
            onMouseLeave={handleAppointmentMouseLeave}
          >
            <a className="dropdown-toggle">Appointments</a>
            {isAppointmentDropdownOpen && (
              <ul className="dropdown-menu show"> {/* Added 'show' class conditionally */}
                <li><a>View Upcoming Appointments</a></li>
                <li><a onClick={ScheduleNewAppointments}>Schedule New Appointment</a></li>
                <li><a>Past Appointments</a></li>
                <li><a>Reschedule/Cancel Appointment</a></li>
                <li><a>Check-In for Appointment</a></li>
                <li><a>Pre-Visit Forms</a></li>
              </ul>
            )}
          </li>
          <li>
            <a>Medical Records</a>
          </li>
          <li
            className="dropdown-container"
            onMouseEnter={handleMeMouseEnter}
            onMouseLeave={handleMeMouseLeave}
          >
            <a className="dropdown-toggle">Me</a>
            {isMeDropdownOpen && (
              <ul className="dropdown-menu show"> {/* Added 'show' class conditionally */}
                <li>
                  <a>Profile</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li>
                  <a onClick={logout}>Logout</a>
                </li>
              </ul>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;