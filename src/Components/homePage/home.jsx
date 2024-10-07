import React from 'react';
import Navbar from '../navbar';  // Keep the Navbar if needed in the profile
import MoodTracker from './moodtracker';
import Toolkit from './toolkit';
import Games from './games';
import Music from './music';
import Journaling from './journaling';
import Connect from './connect';
import Footer from '../footer';

const Home = () => {
    return (
        <>
            <Navbar />
            <MoodTracker />
            <Toolkit />
            <Games />
            <Music />
            <Journaling />
            <Connect />
            <Footer />
        </>
    );
};

export default Home;
