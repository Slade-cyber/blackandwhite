import React from "react";
import { useParams, Link } from "react-router-dom";
import products from "../../../../dummydata/products";

const ProductList = () => {
  const { category } = useParams(); // Kategoriyi URL'den alıyoruz
  const categoryProducts = products[category]; // Kategoriye özgü ürünleri alıyoruz

  if (!categoryProducts) {
    return <div>Bu kategoriye ait ürün bulunamadı!</div>;
  }

  return (
    <div>
      <h2 className="text-2xl mb-4">{category.toUpperCase()} Ürünleri</h2>
      <ul>
        {categoryProducts.map((product) => (
          <li key={product.id}>
            <Link
              to={`/products/${category}/${product.id}`}
              className="text-blue-500 hover:underline"
            >
              {product.name} - {product.price}₺
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
