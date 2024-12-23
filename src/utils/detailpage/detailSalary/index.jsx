import PropTypes from 'prop-types';  // PropTypes kütüphanesini içeri aktarın
import { FaRegStar } from "react-icons/fa6";
import { RiContactsBook3Line } from "react-icons/ri";
import { IoMdShare } from "react-icons/io";


const DetailSalary = ({ selectedProduct }) => {
  const fiyat = parseFloat(selectedProduct.fiyat);  // Fiyatı sayıya dönüştürüyoruz
  
  return (
    <div>
      {/* Fiyat Alanı */}
      <div className="fixed top-46 right-20 h-[320px] w-[415px] p-4 box-border border-2 border-none shadow-xl rounded-3xl backdrop-blur-md bg-white/30">
        <div className="absolute inset-0">
          <div className="flex flex-col gap-2 items-start mx-4 my-7">
            <span className="text-gray-600 text-2xl font-medium">{selectedProduct.ureticiAdi}</span>
            <span>{selectedProduct.urunAdi}</span>
          </div>
          <div className="flex items-start mx-4 my-6">
            {/* Fiyatı ekliyoruz */}
            <span className="text-2xl font-mono text-gray-800">{selectedProduct.fiyat}₺</span>
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
  );
}

// selectedProduct prop'unu doğruluyoruz
DetailSalary.propTypes = {
  selectedProduct: PropTypes.shape({
    urunAdi: PropTypes.string.isRequired,
    ureticiAdi: PropTypes.string.isRequired,
    fiyat: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  }).isRequired,
};

export default DetailSalary;

