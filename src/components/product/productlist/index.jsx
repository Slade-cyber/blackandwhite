import React from "react";
import { useParams } from "react-router-dom";
import products from "../../../dummydata/products";
import DetailCard from "../../../utils/cards";

const ProductList = () => {
  const { category } = useParams(); // Kategoriyi URL'den alıyoruz
  const categoryProducts = products[category]; // Kategoriye özgü ürünleri alıyoruz

  if (!categoryProducts) {
    return <div>Bu kategoriye ait ürün bulunamadı!</div>;
  }

  return (
    <div className="flex flex-col">
      <h2 className="text-2xl mb-4">{category.toUpperCase()} Ürünleri</h2>
      <ul className="flex gap-4">
        {categoryProducts.map((product) => (
          <li key={product.id} className="list-none">
            <DetailCard product={product} category={category} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
