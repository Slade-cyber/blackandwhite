// src/pages/ProductList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const dummyProducts = [
  { id: 1, name: "Ürün 1", price: "100₺" },
  { id: 2, name: "Ürün 2", price: "200₺" },
  { id: 3, name: "Ürün 3", price: "300₺" },
];

const ProductList = () => {
  return (
    <div>
      <h1 className="text-2xl mb-4">Ürünler</h1>
      <ul className="space-y-4">
        {dummyProducts.map((product) => (
          <li key={product.id} className="border p-4 rounded-md shadow-md">
            <Link to={`/products/${product.id}`} className="text-blue-500 hover:underline">
              {product.name} - {product.price}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
