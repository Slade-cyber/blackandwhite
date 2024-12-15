// src/routes/Router.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../components/layout/Layout";
import ProductList from "../pages/home/product/productlist";
import ProductDetail from "../pages/home/product/productdetail";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          {/* Ana sayfa */}
          <Route index element={<ProductList />} />
          
          {/* Ürün detay sayfası */}
          <Route path="products/:id" element={<ProductDetail />} />

          {/* Discover sayfası */}
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
