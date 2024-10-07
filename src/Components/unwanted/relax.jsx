import React from 'react';
import snakeImg from '../assets/images/snake.png';
import musicImage from '../assets/images/music.jpg';
import journalingImage from '../assets/images/journal.jpg'; // You can add an image for Journaling
import './relax.css'; // Import your combined CSS file

const RelaxActivities = () => {
  return (
    <section className="relax-activities">
      <h1>Relax Yourself with These Activities</h1>
      <div className="activity-cards">
        {/* Games Card */}
        <div className="card">
          <img src={snakeImg} alt="Games" className="card-image" />
          <h3>Games</h3>
          <p>Enjoy a variety of games designed to provide relaxation and mental stimulation.</p>
          <button>Play Games</button>
        </div>

        {/* Music Card */}
        <div className="card">
          <img src={musicImage} alt="Music" className="card-image" />
          <h3>Music</h3>
          <p>Relax and unwind with calming and therapeutic music to manage stress and enhance your mood.</p>
          <button>Listen to Music</button>
        </div>

        {/* Journaling Card */}
        <div className="card">
          <img src={journalingImage} alt="Journaling" className="card-image" />
          <h3>Journaling</h3>
          <p>Reflect on your thoughts and feelings with our journaling tool to track your mental wellness journey.</p>
          <button>Start Journaling</button>
        </div>
      </div>
    </section>
  );
};

export default RelaxActivities;
