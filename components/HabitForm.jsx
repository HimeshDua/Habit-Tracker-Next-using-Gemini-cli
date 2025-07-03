import React, { useState } from 'react';

function HabitForm({ onHabitCreated }) {
  const [newHabitName, setNewHabitName] = useState('');

  const createHabit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/habits', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: newHabitName }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log('Habit created:', data.habit);
      setNewHabitName('');
      onHabitCreated(data.habit);
    } catch (error) {
      console.error("Error creating habit:", error);
    }
  };

  return (
    <div className="card mb-4">
      <div className="card-header">
        <h4>Create New Habit</h4>
      </div>
      <div className="card-body">
        <form onSubmit={createHabit}>
          <div className="mb-3">
            <label htmlFor="habitName" className="form-label">Habit Name</label>
            <input
              type="text"
              className="form-control"
              id="habitName"
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success">Add Habit</button>
        </form>
      </div>
    </div>
  );
}

export default HabitForm;