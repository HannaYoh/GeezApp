import React from 'react';
import './LearningPage.css'; 

const LearningPage = () => {
  return (
    <div className="learningpage">
      <nav className="sidebar">
        <h1>Learn Geez</h1>
        <ul>
          <li>🏠 Home</li>
          <li>📚 Lessons</li>
          <li>👤 Profile</li>
          <li>⚙️ Settings</li>
          <li>🚪 Logout</li>
        </ul>
      </nav>
      <main className="main-content">
        <header className="header">
          <h1>Good Morning, Learner!</h1>
          <p>Level 4</p>
        </header>

        <section className="vocabulary">
          <h2>Vocabulary</h2>
        </section>

        <section className="exercise">
          <h2>Exercise</h2>
        </section>
      </main>
    </div>
  );
};

export default LearningPage;