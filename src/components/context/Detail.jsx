import { useState } from 'react';
import { useParams } from 'react-router-dom';  // useParams'ı import ettik
import Header from '../../utils/header';
import Categories from '../../utils/categories';
import { FaRegStar } from "react-icons/fa6";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoMdShare } from "react-icons/io";
import itemsHairdresser from "../../dummydata/itemsHairdresser";  // Dummy data import edildi

const Detail = () => {
  const { id } = useParams();  // useParams'ı burada kullanıyoruz
  const item = itemsHairdresser.find((dress) => dress.id === Number(id)); // Dummy data'dan gelen item

  const [mainImage, setMainImage] = useState(item?.thumbnails[0]);

  if (!item) return <div>Ürün bulunamadı!</div>; // Eğer item bulunmazsa

  return (
    <div>
      <Header />
      <hr className="my-4 border-gray-300" />
      <Categories />
      <hr className="my-4 border-gray-300" />

      <div className="flex flex-col gap-6">
        {/* Resim ve Fiyat Alanı */}
        <div className="flex flex-row gap-6 mx-24 mt-8">
          {/* Resim Alanı */}
          <div className="relative h-[450px] w-[900px] p-4 box-border border-2 border-none shadow-xl rounded-3xl backdrop-blur-md bg-white/30">
            <div className="absolute inset-0">
              <img
                src={mainImage}
                alt="Main"
                className="h-full w-full object-contain"
              />
            </div>
          </div>

          {/* Fiyat Alanı */}
          <div className="fixed top-46 right-20 h-[320px] w-[415px] p-4 box-border border-2 border-none shadow-xl rounded-3xl backdrop-blur-md bg-white/30">
            <div className="absolute inset-0">
              <div className="flex flex-col gap-2 items-start mx-4 my-7">
                <span className="text-gray-600 text-2xl font-medium">{item.ureticiAdi}</span>
                <span>{item.gelinlikAdi}</span>
              </div>
              <div className="flex items-start mx-4 my-6">
                <span className="text-2xl font-mono text-gray-800">{item.fiyat}₺</span>
              </div>

              <div className="flex space-x-2 text-sm text-gray-800 justify-center mt-8">
                <div className="flex justify-around items-center no-underline hover-underline">
                  <FaRegStar className="size-7 mr-1" />
                  <a href="Login" className="no-underline hover:underline">Favori Ekle</a>
                </div>
                <div className="flex justify-around items-center">
                <RiContactsBook3Line className="size-7 mr-1" />
                <a href="Favorites" className="no-underline hover:underline">İletişim</a>
                </div>
                <div className="flex justify-around items-center">
                  <IoMdShare className="size-7 mr-1" />
                  <a href="Basket" className="no-underline hover:underline">Paylaş</a>
                </div>
              </div>

              <div className="flex items-center justify-center my-11">
                <button className="border bg-purple-700 text-white rounded-full shadow-2xl w-1/2 h-10">Sepete Ekle</button>
              </div>
            </div>
          </div>
        </div>

        {/* Minimal Resimler */}
        <div className="flex justify-center max-w-5xl">
          {item.thumbnails.map((thumbnail, index) => (
            <div
              key={index}
              onClick={() => setMainImage(thumbnail)}
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
              <div className="font-semibold text-gray-800">{item.firma}</div>
              <div className="font-semibold text-gray-800">{item.il}</div>
              <div className="font-semibold text-gray-800">{item.etekKesimi}</div>
              <div className="font-semibold text-gray-800">{item.yakaTipi}</div>
              <div className="font-semibold text-gray-800">{item.tarzOzellik}</div>
              <div className="font-semibold text-gray-800">{item.kumasAksesuar}</div>
              <div className="font-semibold text-gray-800">{item.dekolteTipi}</div>
              <div className="font-semibold text-gray-800">{item.etekBoyu}</div>
              <div className="font-semibold text-gray-800">{item.kolTipi}</div>
              <div className="font-semibold text-gray-800">{item.renk}</div>
              <div className="font-semibold text-gray-800">{item.kiralamaOpsiyonu}</div>
              <div className="font-semibold text-gray-800">{item.tur}</div>
            </div>
          </div>
        </div>

        {/* Açıklama Alanı */}
        <div className="h-[500px] w-[900px] p-4 mx-24 mb-2 mt-3 box-border border-2 border-none shadow-xl rounded-3xl backdrop-blur-md bg-white/30">
          <div className="flex flex-row gap-12 px-12">
            <div className="flex flex-col gap-4">
              <ul className="list-disc text-gray-700 my-10">
                <div className="mb-10 text-xl text-gray-800">Ürün Açıklaması</div>
                {item.aciklama.map((desc, index) => (
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
    </div>
  );
};

export default Detail;
