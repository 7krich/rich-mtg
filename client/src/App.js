import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// import components
import Nav from './components/Nav';
import Footer from './components/Footer'

// import pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import ProfilePage from './pages/ProfilePage';
import AboutPage from './pages/AboutPage';
import NewsPage from './pages/NewsPage';
import AppFunnel from './pages/AppFunnel';
import NoMatch from './pages/NoMatch';

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <Routes>
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
      </Router>
      <Footer />
    </div>
  );
}

export default App;
