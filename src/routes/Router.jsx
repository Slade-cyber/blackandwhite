// src/routes/Router.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import Detail from '../components/context/Detail';


const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* Ana layout rotası */}
        <Route path="/" element={<Layout />}>
          {/* Alt rotalar */}
          <Route index element={<Detail />} />
          <Route path="bisey" element={<Detail />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
