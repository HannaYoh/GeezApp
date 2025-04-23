import React, { useState } from 'react';

const LearningPage = () => {
  const [progress, setProgress] = useState(0);
  const [life, setLife] = useState(3); 
  const [streak, setStreak] = useState(5); 
  const [score, setScore] = useState(100); 

  const handleNextLesson = () => {
    setProgress(progress + 10);
    setScore(score + 10); 
    setStreak(streak + 1); 
  };

  return (
    <div style={styles.container}>
      <aside style={styles.sidebar}>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}>🏠 Home</li>
            <li style={styles.navItem}>📚 Lessons</li>
            <li style={styles.navItem}>🎯 Goals</li>
            <li style={styles.navItem}>🏆 Leaderboard</li>
          </ul>
        </nav>
      </aside>
      <main style={styles.main}>
        <header style={styles.topHeader}>
          <div style={styles.headerItem}>❤️ {life}</div>
          <div style={styles.headerItem}>🔥 {streak}</div>
          <div style={styles.headerItem}>⭐ Score: {score}</div>
        </header>
        <section style={styles.content}>
          <h1>Language Learning Path</h1>
          <p>Progress: {progress}%</p>
          <button style={styles.button} onClick={handleNextLesson}>
            Next Lesson
          </button>
        </section>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    fontFamily: 'Arial, sans-serif',
    backgroundColor: '#683BAB',
    color: 'white',
    height: '100vh',
  },
  sidebar: {
    width: '200px',
    backgroundColor: '#593392',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
    width: '100%',
  },
  navItem: {
    padding: '10px',
    cursor: 'pointer',
    fontSize: '18px',
    textAlign: 'center',
    borderRadius: '5px',
    backgroundColor: '#FFD700',
    marginBottom: '10px',
  },
  main: {
    flex: 1,
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  },
  topHeader: {
    display: 'flex',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#593392',
    padding: '10px',
    borderRadius: '5px',
    color: '#FFD700',
  },
  headerItem: {
    fontSize: '18px',
    fontWeight: 'bold',
  },
  content: {
    marginTop: '20px',
  },
  button: {
    backgroundColor: '#FFD700',
    border: 'none',
    padding: '10px 20px',
    fontSize: '18px',
    margin: '10px',
    cursor: 'pointer',
    borderRadius: '5px',
  },
};

export default LearningPage;