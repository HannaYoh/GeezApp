import React from 'react';

const HomePage = () => {
  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Learn Languages the Fun Way!</h1>
      </header>
      <main style={styles.main}>
        <button style={styles.button}>Start Learning</button>
        <button style={styles.button}>Login</button>
      </main>
    </div>
  );
};

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    backgroundColor: '#58CC02',
    color: 'white',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  main: {
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

export default HomePage;