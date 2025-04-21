import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <h1 style={styles.title}>Welcome to My Website</h1>
    </header>
  );
};

const styles = {
  header: {
    backgroundColor: '#333',
    padding: '20px',
    textAlign: 'center',
    color: 'white',
  },
  title: {
    margin: 0,
    fontSize: '24px',
  }
};

export default Header;