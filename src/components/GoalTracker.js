import React, { useState } from 'react';
import './GoalTracker.css'; // Ensure this CSS file exists and is styled accordingly

const GoalTracker = () => {
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: '',
    location: '',
    goal: ''
  });
  const [goalsList, setGoalsList] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setGoalsList([...goalsList, userInfo]);
    setUserInfo({ name: '', age: '', location: '', goal: '' });
  };

  return (
    <div className="goal-tracker">
      <form onSubmit={handleSubmit} className="goal-form">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          name="name"
          type="text"
          value={userInfo.name}
          onChange={handleChange}
        />

        <label htmlFor="age">Age:</label>
        <input
          id="age"
          name="age"
          type="number"
          value={userInfo.age}
          onChange={handleChange}
        />

        <label htmlFor="location">Location:</label>
        <input
          id="location"
          name="location"
          type="text"
          value={userInfo.location}
          onChange={handleChange}
        />

        <label htmlFor="goal">Workout Goal:</label>
        <textarea
          id="goal"
          name="goal"
          value={userInfo.goal}
          onChange={handleChange}
        />

        <button type="submit" className="submit-goal">Submit Goal</button>
      </form>

      <div className="goals-list">
        {goalsList.map((goalItem, index) => (
          <div key={index} className="goal-entry">
            <p><strong>Name:</strong> {goalItem.name}</p>
            <p><strong>Age:</strong> {goalItem.age}</p>
            <p><strong>Location:</strong> {goalItem.location}</p>
            <p><strong>Workout Goal:</strong> {goalItem.goal}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GoalTracker;

