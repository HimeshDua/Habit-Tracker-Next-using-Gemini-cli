import React, { useState, useMemo, useEffect } from 'react';
import styles from '../styles/Calendar.module.css';

function Calendar({ habit, onDateCompleted }) {
  const today = useMemo(() => new Date(), []);
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  useEffect(() => {
    const now = new Date();
    setCurrentMonth(now.getMonth());
    setCurrentYear(now.getFullYear());
  }, [habit]); // Re-initialize month/year when habit changes

  const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const currentMonthName = useMemo(() => {
    return new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' });
  }, [currentYear, currentMonth]);

  const calendarDays = useMemo(() => {
    const days = [];
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);

    // Add empty cells for days before the 1st of the month
    for (let i = 0; i < firstDayOfMonth.getDay(); i++) {
      days.push(null);
    }

    // Add days of the month
    for (let i = 1; i <= lastDayOfMonth.getDate(); i++) {
      days.push(new Date(currentYear, currentMonth, i));
    }

    return days;
  }, [currentYear, currentMonth]);

  const isCompleted = (date) => {
    return habit.completedDates.some(d => new Date(d.date).toDateString() === date.toDateString());
  };

  const isMissed = (date) => {
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const checkDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return checkDate < todayDate && !isCompleted(date);
  };

  const isToday = (date) => {
    return date.toDateString() === today.toDateString();
  };

  const isFuture = (date) => {
    const todayDate = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    const checkDate = new Date(date.getFullYear(), date.getMonth(), date.getDate());
    return checkDate > todayDate;
  };

  const missedDaysCount = useMemo(() => {
    let count = 0;
    calendarDays.forEach(day => {
      if (day && isMissed(day)) {
        count++;
      }
    });
    return count;
  }, [calendarDays, habit.completedDates]);

  const toggleCompletion = async (date) => {
    const formattedDate = date.toISOString().split('T')[0]; // YYYY-MM-DD

    try {
      const response = await fetch(`/api/habits/${habit.id}/complete`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ date: formattedDate }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      onDateCompleted(); // Notify parent to re-fetch habits
    } catch (error) {
      console.error("Error toggling habit completion:", error);
    }
  };

  const prevMonth = () => {
    setCurrentMonth(prev => (prev === 0 ? 11 : prev - 1));
    if (currentMonth === 0) {
      setCurrentYear(prev => prev - 1);
    }
  };

  const nextMonth = () => {
    setCurrentMonth(prev => (prev === 11 ? 0 : prev + 1));
    if (currentMonth === 11) {
      setCurrentYear(prev => prev + 1);
    }
  };

  const calculateStreaks = useMemo(() => {
    const sortedDates = habit.completedDates
      .map(d => new Date(new Date(d.date).getFullYear(), new Date(d.date).getMonth(), new Date(d.date).getDate())) // Normalize to start of day
      .sort((a, b) => a.getTime() - b.getTime());

    let current = 0;
    let longest = 0;
    let lastDate = null;

    for (let i = 0; i < sortedDates.length; i++) {
      const currentDate = sortedDates[i];

      if (lastDate) {
        const diffTime = Math.abs(currentDate.getTime() - lastDate.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        if (diffDays === 1) {
          current++;
        } else if (diffDays > 1) {
          current = 1;
        }
      } else {
        current = 1;
      }
      longest = Math.max(longest, current);
      lastDate = currentDate;
    }

    // Adjust for today if completed
    const todayNormalized = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    if (isCompleted(todayNormalized)) {
      if (sortedDates.length > 0) {
        const lastCompletedNormalized = sortedDates[sortedDates.length - 1];
        const diffTime = Math.abs(todayNormalized.getTime() - lastCompletedNormalized.getTime());
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        if (diffDays === 1) {
          // Current streak is accurate
        } else if (diffDays > 1 && !isCompleted(todayNormalized)) {
          current = 1;
        }
      } else {
        current = 1;
      }
    } else {
      if (sortedDates.length > 0) {
        const lastCompletedNormalized = sortedDates[sortedDates.length - 1];
        const yesterdayNormalized = new Date(today.getFullYear(), today.getMonth(), today.getDate() - 1);
        if (lastCompletedNormalized.toDateString() === yesterdayNormalized.toDateString()) {
          // Current streak is the streak up to yesterday
        } else {
          current = 0;
        }
      } else {
        current = 0;
      }
    }

    return { current, longest };
  }, [habit.completedDates]);

  const { current: currentStreak, longest: longestStreak } = calculateStreaks;

  return (
    <div className={styles.calendar}>
      <div className={styles.header}>
        <button className={styles.navButton} onClick={prevMonth}>&lt;</button>
        <h4>{currentMonthName} {currentYear}</h4>
        <button className={styles.navButton} onClick={nextMonth}>&gt;</button>
      </div>

      <div className={styles.calendarGrid}>
        {daysOfWeek.map(day => (
          <div key={day} className={styles.dayHeader}>{day}</div>
        ))}
        {calendarDays.map((day, index) => (
          <div
            key={index}
            className={`${styles.dayCell} ${
              !day ? styles.empty : ''
            } ${
              day && isCompleted(day) ? styles.completed : ''
            } ${
              day && isMissed(day) ? styles.missed : ''
            } ${
              day && isToday(day) ? styles.today : ''
            } ${
              day && !isFuture(day) ? styles.clickable : ''
            }`}
            onClick={() => day && !isFuture(day) && toggleCompletion(day)}
          >
            {day ? day.getDate() : ''}
          </div>
        ))}
      </div>

      {missedDaysCount > 0 && (
        <div className={styles.missedAlert}>
          You missed {missedDaysCount} days for this habit!
        </div>
      )}
      <div className={styles.streakInfo}>
        <p>Current Streak: <strong>{currentStreak} days</strong></p>
        <p>Longest Streak: <strong>{longestStreak} days</strong></p>
      </div>
    </div>
  );
}

export default Calendar;