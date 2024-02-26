import React from 'react';
import './WorkoutList.css'; // Assuming you have a CSS file for styling

const workouts = [
  { id: 1, name: 'Strength Training', description: 'Focus on increasing muscle strength.' },
  { id: 2, name: 'Endurance', description: 'Improve your stamina and endurance.' },
  { id: 3, name: 'Yoga', description: 'Enhance flexibility and mental well-being.' }
];

const WorkoutList = () => {
  return (
    <div className="workout-list">
      <h2>Your Workouts</h2>
      <div className="workouts">
        {workouts.map(workout => (
          <div key={workout.id} className="workout-card">
            <h3>{workout.name}</h3>
            <p>{workout.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WorkoutList;
