import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';
const Dashboard = () => {
  return (
    <section>
      <h1>Welcome to the Dashboard</h1>
      <p>Please complete your contact details.</p>
      <Link to="/contact">Complete Contact Details</Link>
    </section>
  );
};

export default Dashboard;
