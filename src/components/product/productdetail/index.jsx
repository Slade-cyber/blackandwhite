import { useParams } from "react-router-dom";
import products from "../../../dummydata/products";
import DetailMinimal from "../../../utils/detailpage/detailMinimal"; // Minik resimler bileşeni
import DetailDescription from "../../../utils/detailpage/detailDescription"; // Ürün açıklama bileşeni
import DetailFilter from "../../../utils/detailpage/detailFilter"; // Ürün filtreleme bileşeni
import DetailSalary from "../../../utils/detailpage/detailSalary"; // Ürün fiyat ve sepet alanı

const ProductDetail = () => {
  const { category, id } = useParams(); // URL'den kategori ve id'yi alıyoruz
  const categoryProducts = products[category]; // Kategoriye özgü ürünler
  const product = categoryProducts?.find((p) => p.id === parseInt(id)); // Ürünü buluyoruz

  if (!product) {
    return <div>Ürün bulunamadı!</div>;
  }

  return (
    <div className="flex flex-col gap-8 mx-8 mt-12">
      {/* Ürün Adı */}
      <h2 className="text-3xl font-semibold">{product.urunAdi}</h2>

      {/* Ürün Detayları */}
      <div className="flex flex-row gap-8 mt-8">
        {/* Diğer Bileşenler Sidebar'a Yakın Olsun */}
        <div className="flex-1">
          {/* Resim Galerisi */}
          <DetailMinimal category={category} />

          {/* Ürün Filtreleme ve Özellikler */}
          <div className="mt-8">
            <DetailFilter />
          </div>

          {/* Ürün Açıklaması */}
          <div className="mt-8">
            <DetailDescription />
          </div>
        </div>

        {/* Ürün Fiyat ve Sepet Alanı (Sağda Kalsın) */}
        <div className="flex-none w-[415px]">
          <DetailSalary selectedProduct={product} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
