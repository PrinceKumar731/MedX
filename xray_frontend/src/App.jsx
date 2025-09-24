import React, { useState } from 'react';
import './App.css';

// Import all your components
import Login from './components/Login.jsx';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Upload from './components/Upload.jsx';
import History from './components/History.jsx'; // ✨ IMPORT HISTORY
import Footer from './components/Footer.jsx';

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Upload />
        <History /> {/* ✨ ADD HISTORY COMPONENT */}
      </main>
      <Footer />
    </>
  );
};

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        <Dashboard />
      ) : (
        <Login onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;