import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Hero from './Components/landingPage/hero';
import FeaturesSection from './Components/landingPage/features';
import HowItWorks from './Components/landingPage/how';
import Login from './components/login';
import Home from './Components/homePage/home'; // Import the User Profile component
import Footer from './components/footer';
import Games from './components/gamesSection/games';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <FeaturesSection />
            <HowItWorks />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} /> {/* Route for home page */}
        <Route path="/games" element={<Games />} />
      </Routes>
    </Router>
  );
}

export default App;
