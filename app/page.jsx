'use client';
import React, {useState, useEffect} from 'react';
import HabitForm from '../components/HabitForm';
import Calendar from '../components/Calendar';

function HomePage() {
  const [habits, setHabits] = useState([]);
  const [showCalendar, setShowCalendar] = useState({});

  const fetchHabits = async () => {
    try {
      const response = await fetch('/api/habits');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setHabits(
        data.habits.map((habit) => ({
          ...habit,
          isEditing: false,
          editedName: habit.name
        }))
      );
    } catch (error) {
      console.error('Error fetching habits:', error);
    }
  };

  useEffect(() => {
    fetchHabits();
  }, []);

  const toggleCalendar = (habitId) => {
    setShowCalendar((prevState) => ({
      ...prevState,
      [habitId]: !prevState[habitId]
    }));
  };

  const deleteHabit = async (habitId) => {
    if (window.confirm('Are you sure you want to delete this habit?')) {
      try {
        const response = await fetch(`/api/habits/${habitId}`, {
          method: 'DELETE'
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        console.log('Habit deleted:', habitId);
        fetchHabits(); // Re-fetch habits to update the list
      } catch (error) {
        console.error('Error deleting habit:', error);
      }
    }
  };

  const editHabit = (habit) => {
    setHabits((prevHabits) =>
      prevHabits.map((h) =>
        h.id === habit.id ? {...h, isEditing: true, editedName: h.name} : h
      )
    );
  };

  const saveHabit = async (habit) => {
    try {
      const response = await fetch(`/api/habits/${habit.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name: habit.editedName})
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      console.log('Habit updated:', habit);
      setHabits((prevHabits) =>
        prevHabits.map((h) =>
          h.id === habit.id ? {...h, name: h.editedName, isEditing: false} : h
        )
      );
    } catch (error) {
      console.error('Error updating habit:', error);
    }
  };

  const cancelEdit = (habit) => {
    setHabits((prevHabits) =>
      prevHabits.map((h) =>
        h.id === habit.id ? {...h, isEditing: false, editedName: h.name} : h
      )
    );
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Habit Tracker</h1>
      <HabitForm onHabitCreated={fetchHabits} />
      <hr />
      {habits.length > 0 ? (
        habits.map((habit) => (
          <div key={habit.id} className="card mb-3">
            <div className="card-header d-flex justify-content-between align-items-center">
              {habit.isEditing ? (
                <div className="d-flex align-items-center flex-grow-1">
                  <input
                    type="text"
                    className="form-control form-control-sm me-2"
                    value={habit.editedName}
                    onChange={(e) =>
                      setHabits((prevHabits) =>
                        prevHabits.map((h) =>
                          h.id === habit.id
                            ? {...h, editedName: e.target.value}
                            : h
                        )
                      )
                    }
                  />
                  <button
                    className="btn btn-sm btn-success me-2"
                    onClick={() => saveHabit(habit)}
                  >
                    Save
                  </button>
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => cancelEdit(habit)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <h5>{habit.name}</h5>
              )}
              <div>
                {!habit.isEditing && (
                  <button
                    className="btn btn-sm btn-info me-2"
                    onClick={() => editHabit(habit)}
                  >
                    Edit
                  </button>
                )}
                {!habit.isEditing && (
                  <button
                    className="btn btn-sm btn-danger me-2"
                    onClick={() => deleteHabit(habit.id)}
                  >
                    Delete
                  </button>
                )}
                <button
                  className="btn btn-sm btn-primary"
                  onClick={() => toggleCalendar(habit.id)}
                >
                  {showCalendar[habit.id] ? 'Hide Calendar' : 'Show Calendar'}
                </button>
              </div>
            </div>
            {showCalendar[habit.id] && (
              <div className="card-body">
                <Calendar habit={habit} onDateCompleted={fetchHabits} />
              </div>
            )}
          </div>
        ))
      ) : (
        <div className="alert alert-info">No habits yet. Create one above!</div>
      )}
    </div>
  );
}

export default HomePage;
