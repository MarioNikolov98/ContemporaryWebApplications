import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Make sure the CSS file is correctly linked

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        SolentFit {/* Updated to be a text-based logo */}
      </div>
      <ul className="nav-links">
      
        <li><Link to="/login" className='nav-item'>Login/Register</Link></li>
        <li><Link to="/" className="nav-item">Workouts</Link></li>
        <li><Link to="/calories" className="nav-item">Calorie Tracker</Link></li>
        <li><Link to="/goals" className="nav-item">Workout Goals</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
