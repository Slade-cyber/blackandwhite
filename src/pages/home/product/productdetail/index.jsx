import React from "react";
import { useParams } from "react-router-dom";
import products from "../../../../dummydata/products";

const ProductDetail = () => {
  const { category, id } = useParams(); // URL'den kategori ve id'yi alıyoruz
  const categoryProducts = products[category]; // Kategoriye özgü ürünler
  const product = categoryProducts?.find((p) => p.id === parseInt(id)); // Ürünü buluyoruz

  if (!product) {
    return <div>Ürün bulunamadı!</div>;
  }

  return (
    <div>
      <h2 className="text-2xl mb-4">{product.name}</h2>
      <p>Fiyat: {product.price}₺</p>
      <p>{category.toUpperCase()} kategorisindeki bir ürün.</p>
    </div>
  );
};

export default ProductDetail;
