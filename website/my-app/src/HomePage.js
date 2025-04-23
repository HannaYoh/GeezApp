import React from 'react';
import './HomePage.css'; 

const HomePage = () => {
  return (
    <div className="HomePage">
      <header className="HomePage-header">
        <div className="characters">
          <div className="character blue"></div>
          <div className="character orange"></div>
        </div>
        <h1 className="title">LearnGeez</h1>
        <p className="subtitle">Learn ግእዝ easily</p>
        <div className="buttons">
          <button className="button sign-up">Sign up</button>
          <button className="button log-in">Log in</button>
        </div>
      </header>
    </div>
  );
};

export default HomePage;