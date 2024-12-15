// src/pages/ProductDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const dummyProducts = [
  { id: 1, name: "Ürün 1", description: "Bu birinci ürünün açıklaması.", price: "100₺" },
  { id: 2, name: "Ürün 2", description: "Bu ikinci ürünün açıklaması.", price: "200₺" },
  { id: 3, name: "Ürün 3", description: "Bu üçüncü ürünün açıklaması.", price: "300₺" },
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = dummyProducts.find((p) => p.id === Number(id));

  if (!product) return <div>Ürün Bulunamadı!</div>;

  return (
    <div>
      <h1 className="text-2xl mb-4">{product.name}</h1>
      <p className="mb-2">{product.description}</p>
      <span className="text-lg font-bold">{product.price}</span>
    </div>
  );
};

export default ProductDetail;
