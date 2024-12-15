// src/routes/Router.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Ana layout rotası */}
        <Route path="/" element={<Layout />}>
          {/* Alt rotalar */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
