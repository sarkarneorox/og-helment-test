// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import HomePage from './components/HomePage.js';
import AboutPage from './components/AboutPage.js';
import ContactPage from './components/ContactPage.js';

const App = () => (
  <HelmetProvider>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
      </Routes>
    </Router>
 </HelmetProvider>
);

export default App;
