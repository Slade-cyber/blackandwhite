import { useParams } from "react-router-dom";
import products from "../../../dummydata/products";

const DetailDescription = () => {
  // URL parametrelerinden kategori ve ürün ID'sini alıyoruz
  const { category, id } = useParams();

  // Kategoriye göre ürünler
  const categoryProducts = products[category];

  // Ürünü ID'ye göre buluyoruz
  const product = categoryProducts?.find((product) => product.id === parseInt(id));

  if (!product) {
    return <div>Ürün bulunamadı!</div>;
  }

  return (
    <div>
      {/* Açıklama Alanı */}
      <div className="h-[500px] w-[900px] p-4 mx-24 mb-2 mt-3 box-border border-2 border-none shadow-xl rounded-3xl backdrop-blur-md bg-white/30">
        <div className="flex flex-row gap-12 px-12">
          <div className="flex flex-col gap-4">
            <ul className="list-disc text-gray-700 my-10">
              <div className="mb-10 text-xl text-gray-800">Ürün Açıklaması</div>
              {product.aciklama?.map((desc, index) => (
                <li key={index}>
                  {desc}
                  <hr className="my-4 border-gray-300" />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailDescription;
