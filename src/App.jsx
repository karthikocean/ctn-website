import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import StubPage from './pages/StubPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import './styles/Global.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy-policy" element={<StubPage title="Privacy Policy" />} />
        <Route path="/terms" element={<StubPage title="Terms & Conditions" />} />
        <Route path="/refund" element={<StubPage title="Refund Policy" />} />
        <Route path="/community-guidelines" element={<StubPage title="Community Guidelines" />} />
        <Route path="/contact" element={<StubPage title="Contact Us" />} />
        <Route path="/partner" element={<StubPage title="Partner With Us" />} />
        <Route path="/download" element={<StubPage title="Download App" />} />
      </Routes>
      <FloatingActions />
      <Footer />
    </Router>
  );
}

export default App;
