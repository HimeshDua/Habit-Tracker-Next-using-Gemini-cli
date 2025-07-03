'use client';
import React, {useState, useEffect, useMemo} from 'react';
import HabitForm from '../components/HabitForm';
import Calendar from '../components/Calendar';
import styles from '../styles/App.module.css';

function HomePage() {
  const [habits, setHabits] = useState([]);
  const [showCalendar, setShowCalendar] = useState({});
  const [notification, setNotification] = useState(null);

  const showNotification = (message, type = 'info') => {
    setNotification({message, type});
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

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
      showNotification(`Error fetching habits: ${error.message}`, 'error');
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
        showNotification('Habit deleted successfully!', 'success');
        fetchHabits(); // Re-fetch habits to update the list
      } catch (error) {
        console.error('Error deleting habit:', error);
        showNotification(`Error deleting habit: ${error.message}`, 'error');
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
      showNotification('Habit updated successfully!', 'success');
      setHabits((prevHabits) =>
        prevHabits.map((h) =>
          h.id === habit.id ? {...h, name: h.editedName, isEditing: false} : h
        )
      );
    } catch (error) {
      console.error('Error updating habit:', error);
      showNotification(`Error updating habit: ${error.message}`, 'error');
    }
  };

  const cancelEdit = (habit) => {
    setHabits((prevHabits) =>
      prevHabits.map((h) =>
        h.id === habit.id ? {...h, isEditing: false, editedName: h.name} : h
      )
    );
  };

  const calculateProgress = useMemo(
    () => (habit) => {
      const today = new Date();
      const firstDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth(),
        1
      );
      const lastDayOfMonth = new Date(
        today.getFullYear(),
        today.getMonth() + 1,
        0
      );
      const daysInMonth = lastDayOfMonth.getDate();

      let completedCount = 0;
      habit.completedDates.forEach((cd) => {
        const completedDate = new Date(cd.date);
        if (
          completedDate >= firstDayOfMonth &&
          completedDate <= lastDayOfMonth
        ) {
          completedCount++;
        }
      });

      return Math.round((completedCount / daysInMonth) * 100);
    },
    []
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Habit Tracker</h1>
      {notification && (
        <div className={`${styles.notification} ${styles[notification.type]}`}>
          {notification.message}
        </div>
      )}
      <HabitForm onHabitCreated={fetchHabits} />
      <hr className={styles.divider} />
      {habits.length > 0 ? (
        habits.map((habit) => (
          <div key={habit.id} className={styles.card}>
            <div className={styles.cardHeader}>
              {habit.isEditing ? (
                <div className={styles.editForm}>
                  <input
                    type="text"
                    className={styles.editInput}
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
                    className={`${styles.button} ${styles.success}`}
                    onClick={() => saveHabit(habit)}
                  >
                    Save
                  </button>
                  <button
                    className={`${styles.button} ${styles.secondary}`}
                    onClick={() => cancelEdit(habit)}
                  >
                    Cancel
                  </button>
                </div>
              ) : (
                <h5 className={styles.habitName}>{habit.name}</h5>
              )}
              <div className={styles.cardActions}>
                {!habit.isEditing && (
                  <button
                    className={`${styles.button} ${styles.info}`}
                    onClick={() => editHabit(habit)}
                  >
                    Edit
                  </button>
                )}
                {!habit.isEditing && (
                  <button
                    className={`${styles.button} ${styles.danger}`}
                    onClick={() => deleteHabit(habit.id)}
                  >
                    Delete
                  </button>
                )}
                <button
                  className={`${styles.button} ${styles.primary}`}
                  onClick={() => toggleCalendar(habit.id)}
                >
                  {showCalendar[habit.id] ? 'Hide Calendar' : 'Show Calendar'}
                </button>
              </div>
            </div>
            <div className={styles.progressContainer}>
              <div
                className={styles.progressBar}
                style={{width: `${calculateProgress(habit)}%`}}
              ></div>
              <span className={styles.progressText}>
                {calculateProgress(habit)}% completed this month
              </span>
            </div>
            {showCalendar[habit.id] && (
              <div className={styles.cardBody}>
                <Calendar habit={habit} onDateCompleted={fetchHabits} />
              </div>
            )}
          </div>
        ))
      ) : (
        <div className={styles.infoMessage}>
          No habits yet. Create one above!
        </div>
      )}
    </div>
  );
}

export default HomePage;
