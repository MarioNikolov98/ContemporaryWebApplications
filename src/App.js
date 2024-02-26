import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import WorkoutList from './components/WorkoutList';
import CalorieTracker from './components/CalorieTracker';
import GoalTracker from './components/GoalTracker';
import AuthPage from './components/AuthPage';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<AuthPage />} />
        <Route path="/" element={<WorkoutList />} />
        <Route path="/calories" element={<CalorieTracker />} />
        <Route path="/goals" element={<GoalTracker />} />
      </Routes>
    </Router>
  );
}

export default App;
