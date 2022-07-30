import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

//import framer animation
import { AnimatePresence } from 'framer-motion'
// import pages
import HomePage from '../pages/HomePage';
import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import ProfilePage from '../pages/ProfilePage';
import AboutPage from '../pages/AboutPage';
import NewsPage from '../pages/NewsPage';
import AppFunnel from '../pages/AppFunnel';
import NoMatch from '../pages/NoMatch';

const AnimatedRoutes = () => {
    const location = useLocation();
    return (
        <AnimatePresence>
            <Routes location={location} key={location.pathname}>
                <Route 
                    path="/" 
                    element={<HomePage />} 
                />
                <Route 
                    path="/login" 
                    element={<LoginPage />} 
                />
                <Route 
                    path="/signup" 
                    element={<SignupPage />} 
                />
                <Route 
                    path="/profile" 
                    element={<ProfilePage />} 
                />
                <Route 
                    path="/about" 
                    element={<AboutPage />} 
                />
                <Route 
                    path="/news" 
                    element={<NewsPage />} 
                />
                <Route 
                    path="/app" 
                    element={<AppFunnel />} 
                />
                <Route 
                    path="*" 
                    element={<NoMatch />} 
                />
        </Routes>
      </AnimatePresence>
    )
}

export default AnimatedRoutes;