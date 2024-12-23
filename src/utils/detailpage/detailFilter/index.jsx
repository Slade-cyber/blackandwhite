import products from '../../../dummydata/products';

const DetailFilter = () => {
  const selectedProduct = products.women[0];  // women kategorisindeki ilk ürünü seçiyoruz

  return (
    <div>
      {/* Filtre Alanı */}
      <div className="h-[500px] w-[900px] p-4 mx-24 mb-2 mt-1 box-border border-2 border-none shadow-xl rounded-3xl backdrop-blur-md bg-white/30">
        <div className="flex flex-row gap-12 px-12">
          {/* Sol Grup: Alanlar */}
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-gray-600">Firma:</div>
            <div className="font-semibold text-gray-600">İl:</div>
            <div className="font-semibold text-gray-600">Etek Kesimi:</div>
            <div className="font-semibold text-gray-600">Yaka Tipi:</div>
            <div className="font-semibold text-gray-600">Tarz/Özellik:</div>
            <div className="font-semibold text-gray-600">Kumaş/Aksesuar:</div>
            <div className="font-semibold text-gray-600">Dekolte Tipi:</div>
            <div className="font-semibold text-gray-600">Etek Boyu:</div>
            <div className="font-semibold text-gray-600">Kol Tipi:</div>
            <div className="font-semibold text-gray-600">Renk:</div>
            <div className="font-semibold text-gray-600">Kiralama Opsiyonu:</div>
            <div className="font-semibold text-gray-600">Tür:</div>
          </div>

          {/* Sağ Grup: Yanıtlar */}
          <div className="flex flex-col gap-4">
            <div className="font-semibold text-gray-800">{selectedProduct.firma}</div>
            <div className="font-semibold text-gray-800">{selectedProduct.il}</div>
            <div className="font-semibold text-gray-800">{selectedProduct.etekKesimi}</div>
            <div className="font-semibold text-gray-800">{selectedProduct.yakaTipi}</div>
            <div className="font-semibold text-gray-800">{selectedProduct.tarzOzellik}</div>
            <div className="font-semibold text-gray-800">{selectedProduct.kumasAksesuar}</div>
            <div className="font-semibold text-gray-800">{selectedProduct.dekolteTipi}</div>
            <div className="font-semibold text-gray-800">{selectedProduct.etekBoyu}</div>
            <div className="font-semibold text-gray-800">{selectedProduct.kolTipi}</div>
            <div className="font-semibold text-gray-800">{selectedProduct.renk}</div>
            <div className="font-semibold text-gray-800">{selectedProduct.kiralamaOpsiyonu}</div>
            <div className="font-semibold text-gray-800">{selectedProduct.tur}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailFilter;
