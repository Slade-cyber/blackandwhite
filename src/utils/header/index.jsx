import { FaRegUser } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import Search from "./search";

const Header = () => {
  // `isLogin` durumunu kontrol et
  const isLogin = localStorage.getItem("isLogin");

  const handleLoginClick = () => {
    if (isLogin) {
      // Kullanıcı giriş yapmışsa profil sayfasına yönlendirin
      window.location.href = "/profile";
    } else {
      // Kullanıcı giriş yapmamışsa giriş yap sayfasına yönlendirin
      window.location.href = "/login";
    }
  };

  return (
    <div className="flex justify-between items-center pt-8 pb-8 mx-24">
      <div>
        <a
          href="/mainpage"
          className="text-2xl bg-gradient-to-r from-slate-400 via-slate-700 to-gray-950 inline-block 
        text-transparent bg-clip-text font-bold"
        >
          Black&White
        </a>
      </div>

      {/* Arama Alanı */}
      <Search/>

      {/* Kullanıcı İkonları */}
      <div className="flex space-x-4 text-xs text-gray-800">
        {/* Giriş Yap */}
        <div className="flex flex-col items-center">
          <FaRegUser className="text-xl" />
          <button
            onClick={handleLoginClick}
            className="mt-1 no-underline hover:underline text-blue-500"
          >
            {isLogin ? "Profil" : "Giriş Yap"}
          </button>
        </div>

        {/* Favori */}
        <div className="flex flex-col items-center">
          <FaRegStar className="text-xl" />
          <a href="/favorites" className="mt-1 no-underline hover:underline">
            Favori
          </a>
        </div>

        {/* Sepetim */}
        <div className="flex flex-col items-center">
          <SlBasket className="text-xl" />
          <a href="/basket" className="mt-1 no-underline hover:underline">
            Sepetim
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
