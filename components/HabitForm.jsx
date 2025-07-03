import React, { useState } from 'react';
import styles from '../styles/HabitForm.module.css';

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
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h4>Create New Habit</h4>
      </div>
      <div className={styles.cardBody}>
        <form onSubmit={createHabit}>
          <div className={styles.formGroup}>
            <label htmlFor="habitName" className={styles.formLabel}>Habit Name</label>
            <input
              type="text"
              className={styles.formControl}
              id="habitName"
              value={newHabitName}
              onChange={(e) => setNewHabitName(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={`${styles.button} ${styles.success}`}>Add Habit</button>
        </form>
      </div>
    </div>
  );
}

export default HabitForm;