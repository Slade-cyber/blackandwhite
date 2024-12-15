import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../pages/home/homepage/HomePage"; // Ana sayfa
import Layout from "../components/layout/Layout"; // Layout bileşeni
import ProductList from "../pages/home/product/productlist"; // Ürün listesi
import ProductDetail from "../pages/home/product/productdetail"; // Ürün detayı

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        {/* HomePage: Layout dışında, bağımsız olarak render edilecek */}
        <Route path="/" element={<HomePage />} />

        {/* Layout ile sarılı diğer rotalar */}
        <Route path="/*" element={<Layout />}>
          {/* Kategori bazlı ürün listesi */}
          <Route path="products/:category" element={<ProductList />} />

          {/* Ürün detay sayfası */}
          <Route path="products/:category/:id" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
