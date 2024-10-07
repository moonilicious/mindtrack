import React from 'react';
import './how.css';

const HowItWorks = () => {
    return (
        <div className="signup-and-how-it-works">
            <div className="signup-form">
                <h2>Sign Up</h2>
                <form>
                    <input type="text" placeholder="Name" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    <button type="submit">Sign Up</button>
                    <p>OR</p>
                    <button className="google-login" type="button">Continue with Google</button>
                </form>
                <p>Already a member? <a href="/login">Log In</a></p>
            </div>

            <div className="how-it-works">
                <h1 className="section-title">How It Works</h1>
                <p>
                    At MindTrack, we aim to support your mental well-being through a range of engaging features.
                    Start by signing up for a free account, which allows you to track your mood daily.
                    By logging your emotions, you gain valuable insights into your mental health patterns.
                </p>
                <p>
                    Explore our diverse resources, including relaxing games, journaling tools, and guided exercises that promote self-reflection and relaxation.
                    You can also take self-assessment tests to better understand your emotional state.
                    These assessments are designed to provide insights, not diagnoses, and it's essential to consult a qualified mental health professional for any diagnostic purposes.
                </p>
                <p>
                    If you require further support, our platform connects you with certified therapists who can offer personalized guidance tailored to your needs.
                    Additionally, our AI chatbot is available to provide instant advice and tips for managing your mental health on the go.
                </p>
            </div>
        </div>
    );
};


export default HowItWorks;
