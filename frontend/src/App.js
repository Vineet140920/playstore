import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import OwnerAuth from './components/OwnerAuth';
import UserAuth from './components/UserAuth';
import ApplicationManager from './components/ApplicationManager';
import UserApplications from './components/UserApplications';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    const [isOwnerLoggedIn, setIsOwnerLoggedIn] = useState(false);
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    const handleOwnerLogin = () => {
        setIsOwnerLoggedIn(true);
        setIsUserLoggedIn(false); // Ensure only one type of user is logged in
    };

    const handleUserLogin = () => {
        setIsUserLoggedIn(true);
        setIsOwnerLoggedIn(false); // Ensure only one type of user is logged in
    };

    const handleLogout = () => {
        setIsOwnerLoggedIn(false);
        setIsUserLoggedIn(false);
    };

    return (
        <Router>
            <Navbar 
                isLoggedIn={isOwnerLoggedIn || isUserLoggedIn}
                isOwner={isOwnerLoggedIn}
            />
            <div style={styles.mainContent}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/owner-auth" element={isOwnerLoggedIn ? <Navigate to="/applications" /> : <OwnerAuth onLogin={handleOwnerLogin} />} />
                    <Route path="/user-auth" element={isUserLoggedIn ? <Navigate to="/user-applications" /> : <UserAuth onLogin={handleUserLogin} />} />
                    <Route path="/applications" element={isOwnerLoggedIn ? <ApplicationManager /> : <Navigate to="/" />} />
                    <Route path="/user-applications" element={isUserLoggedIn ? <UserApplications /> : <Navigate to="/" />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

const styles = {
    mainContent: {
        padding: '20px',
        minHeight: 'calc(100vh - 100px)', // Adjust based on footer height
    },
};

export default App;
