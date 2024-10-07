import React from 'react';
import moodImage from '../../assets/images/mood.jpg'; // Import the image
import './moodtracker.css'; // Import your CSS file

const MoodTracker = () => {
  return (
    <section className="mood-tracker">
      <div className="mood-image">
        <img src={moodImage} alt="Mood Tracking" />
      </div>
      <div className="mood-content">
        <h1>How Are You Feeling Today?</h1>
        <p>Check in with your emotions daily, track patterns over time</p>
        <p>and discover what drives your mood.</p>
        <button>Track Your Mood</button>
      </div>
    </section>
  );
};

export default MoodTracker;
