import mainpagebackground from '../../../images/mainpagebackground.jpg'
import logofinal from "../../../assets/logofinal.png";
import DrawerHam from '../../../components/drawer/index';
import CategoriesForMainPage from '../categories';


const HomePage = () => {
  return (
    <div
      className="bg-cover bg-center min-h-screen flex flex-col justify-between relative"
      style={{ backgroundImage: `url(${mainpagebackground})` }}
    >
{/* Text ve Buton Alanı */}
<div className="flex justify-between items-center pt-8 pb-8 mx-24 ">
  {/* Text Alanı */}
  <div className="flex items-center">
    <img
      src={logofinal} 
      alt="Logo"
      className="w-[50px] h-[50px] mr-2" 
    />
    <a
      href="/"
      className="text-2xl font-semibold font-serif"
    >
      Black&White
    </a>
  </div>

  {/* Buton ve Hamburger Menü Alanı */}
  <div className="flex items-center">
    {/* Butonlar */}
    <div className="flex space-x-2 text-base font-semibold text-white">
      <div className="flex justify-around items-center no-underline hover-underline box-border h-10 w-24 shadow-lg rounded-full bg-orange-600">
        <a href="basket" className="no-underline hover:underline">
          Sepetim
        </a>
      </div>
      <div className="flex justify-around items-center no-underline hover-underline box-border h-10 w-24 shadow-lg rounded-full bg-orange-600">
        <a href="favorites" className="no-underline hover:underline">
          Favori
        </a>
      </div>
      <div className="flex justify-around items-center no-underline hover-underline box-border h-10 w-24 shadow-lg rounded-full bg-orange-600">
        <a href="login" className="no-underline hover:underline">
          Giriş Yap
        </a>
      </div>
    </div>

    {/* Hamburger Menü */}
    <div>
      <DrawerHam />
    </div>
  </div>
</div>


      {/* Searchbar Alanı */}
      <div className="absolute bottom-1/3 left-1/2 transform -translate-x-1/2">
  <div className="w-full max-w-sm min-w-[800px] relative flex items-center  bg-opacity-70 backdrop-blur-sm box-border h-20">
    <input
      className="w-screen bg-transparent bg-white placeholder:text-slate-400 text-gray-700 text-sm border border-slate-200 
      p-4 ml-3 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm 
      focus:shadow"
      placeholder="Aradığınız kategoriyi yazınız..."
    />
    <button
      className="bg-orange-600 p-3.5 w-1/2 mr-3 border border-transparent text-center text-base font-semibold text-white transition-all 
      shadow-md hover:shadow-lg focus:bg-orange-800 focus:shadow-none active:bg-orange-800 hover:bg-orange-400 active:shadow-none 
      disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
    >
      ARA
    </button>
  </div>
</div>


      {/* Categories Bölümü */}
      <div className="bg-orange-800 bg-opacity-70 backdrop-blur-none p-8">
        <CategoriesForMainPage />
      </div>
    </div>
  );
};

export default HomePage;
