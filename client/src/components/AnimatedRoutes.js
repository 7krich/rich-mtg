import React, { useState, useEffect} from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// log in imports
import UserContext from '../contexts/UserContext.js';
import { getLoggedInUser, login } from '../api/UserAPI';

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
    // vars
    const location = useLocation();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [ user, setUser ] = useState(null);
    const [error, setError] = useState(null);
  
    // logic
    console.log("USER: ", user)
    useEffect(() => {
      const getUser = async () => {
        if (localStorage.getItem("auth-user") !== 'null') {
          let response = await getLoggedInUser(localStorage.getItem("auth-user"));
          let data = await response.json();
          if (data.username) {
            setIsLoggedIn(true);
            setUser(data);
          }
        }
      }
      if (!user) {
        getUser();
      }
    }, [user])
  
    const handleLogin = async (evt) => {
      evt.preventDefault();
      let userObject = {
        username: evt.target.username.value,
        password: evt.target.password.value,
      }
      let response = await login(userObject);
      let data = await response.json();
      if (data.token) {
        localStorage.setItem("auth-user", `${data.token}`);
        setIsLoggedIn(true);
        setUser(data.user);
      }
    }
  
    const handleLogout = () => {
      localStorage.setItem("auth-user", null);
      setIsLoggedIn(false);
      setUser(null);
    }

    return (
        <AnimatePresence exitBeforeEnter>
            <UserContext.Provider value={{ user: user, setUser: handleLogin, error: error }}>
                <Routes
                location={location} key={location.pathname}
                >
                    <Route 
                        path="/" 
                        element={<HomePage isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>} 
                    />
                    <Route 
                        path="/login" 
                        element={<LoginPage isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} user={user} />} 
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
            </UserContext.Provider>
      </AnimatePresence>
    )
}

export default AnimatedRoutes;