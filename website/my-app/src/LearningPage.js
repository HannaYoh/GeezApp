import React from 'react';
import './LearningPage.css'; 

const LearningPage = () => {
  return (
    <div className="learn-lingo-page">
      <nav className="sidebar">
        <ul>
          <li>🏠 Home</li>
          <li>📚 Practice</li>
          <li>🏆 Leaderboard</li>
          <li>👤 Profile</li>
          <li>⚙️ Settings</li>
          <li>🚪 Logout</li>
        </ul>
      </nav>
      <main className="main-content">
        <header className="header">
          <h1>Good evening, Lisa!</h1>
          <p>Level 76</p>
        </header>

        <section className="languages">
          <h2>Your Languages</h2>
          <div className="flags">
            <span role="img" aria-label="Spanish">🇪🇸</span>
            <span role="img" aria-label="Italian">🇮🇹</span>
            <span role="img" aria-label="French">🇫🇷</span>
            <span role="img" aria-label="German">🇩🇪</span>
            <button className="add-language">+</button>
          </div>
        </section>

        <section className="skills">
          <h2>Test your skills</h2>
          <button className="start-quiz">Start Quiz</button>
        </section>

        <section className="lecture">
          <h2>Today's Lecture</h2>
          <p>Italian - Food 4</p>
          <button className="begin-lecture">Begin</button>
        </section>

        <section className="challenge">
          <h2>Daily Challenge</h2>
          <p>Guess 20 words without failing!</p>
          <button className="try-now">Try Now</button>
        </section>

        <section className="leaderboard">
          <h2>Leaderboard</h2>
          <ul>
            <li>#01 Mark: 2393 pts</li>
            <li>#02 Hannah: 2079 pts</li>
            <li>#03 Mony: 1823 pts</li>
            <li>#07 You: 400 pts</li>
          </ul>
        </section>

        <section className="activities">
          <h2>Activities</h2>
          <div className="activity-icons">
            <div className="activity">📖 Reading</div>
            <div className="activity">💡 Lifestyle</div>
            <div className="activity">✍️ Grammar</div>
            <div className="activity">🎯 Skill Test</div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LearningPage;