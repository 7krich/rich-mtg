import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

// import components
import Nav from './components/Nav';
import Footer from './components/Footer'
import AnimatedRoutes from './components/AnimatedRoutes'

function App() {

  return (
    <div className="App">
      <Router>
        <Nav />
        <AnimatedRoutes />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
