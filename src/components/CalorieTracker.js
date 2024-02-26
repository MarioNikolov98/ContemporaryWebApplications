import React, { useState, useEffect } from 'react';
import './CalorieTracker.css'; // Make sure to have this CSS file for styling

const CalorieTracker = () => {
  const [exerciseType, setExerciseType] = useState('Running');
  const [duration, setDuration] = useState(0); // Duration in seconds
  const [intensity, setIntensity] = useState('Moderate');
  const [isActive, setIsActive] = useState(false);
  const [caloriesBurned, setCaloriesBurned] = useState(0);
  
  useEffect(() => {
    let interval = null;
    const caloriesPerSecond = { 'Light': 5, 'Moderate': 20, 'Hard': 50 };

    if (isActive) {
      interval = setInterval(() => {
        setDuration((prevDuration) => prevDuration + 1);
        setCaloriesBurned((prevCalories) => prevCalories + caloriesPerSecond[intensity]);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isActive, intensity]);

  const handleStart = () => {
    setIsActive(true);
  };

  const handleStop = () => {
    setIsActive(false);
    setDuration(0);
    setCaloriesBurned(0);
  };

  // Format duration from seconds to HH:MM:SS
  const formatDuration = (seconds) => {
    const pad = (num) => num.toString().padStart(2, '0');
    const hours = pad(Math.floor(seconds / 3600));
    const minutes = pad(Math.floor((seconds % 3600) / 60));
    const secs = pad(seconds % 60);
    return `[${hours}:${minutes}:${secs}]`;
  };

  return (
    <div className="calorie-tracker">
      <h2>Exercise Type: {exerciseType}</h2>
      <h2>Duration: {formatDuration(duration)}</h2>
      <h2>Intensity: [{intensity}]</h2>
      <button className="start" onClick={handleStart} disabled={isActive}>Start</button>
      <button className="stop" onClick={handleStop} disabled={!isActive}>Stop</button>
      <h2>Calories Burned: {caloriesBurned} kcal</h2>
      <button className="save">Save and exit</button>
    </div>
  );
};

export default CalorieTracker;
