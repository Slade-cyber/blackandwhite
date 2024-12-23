import React, { useState } from "react";
import products from "../../../dummydata/products";

const DetailMinimal = ({ category }) => {
  // Kategoriyi ve ürünü seçmek için 'useState' ile mainImage durumu tanımlıyoruz
  const [mainImage, setMainImage] = useState(products[category][0].thumbnails[0]);

  // Seçilen ürünün küçük resimlerini almak
  const thumbnails = products[category][0].thumbnails;

  return (
    <div>
      {/* Ana resim */}
      <div className="flex justify-center max-w-5xl bg-gray-500">
        <img
          src={mainImage}
          alt="Main Product"
          className="h-[300px] w-[300px] object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Minimal Resimler */}
      <div className="flex justify-center max-w-5xl mt-4">
        {thumbnails.map((thumbnail, index) => (
          <div
            key={index}
            onClick={() => setMainImage(thumbnail)} // Tıklandığında ana resmi değiştir
            className="h-[80px] w-[80px] p-4 ml-5 box-border border-0 border-black shadow-xl rounded-lg backdrop-blur-md bg-white/30 cursor-pointer"
          >
            <div className="absolute inset-0">
              <img
                src={thumbnail}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DetailMinimal;
