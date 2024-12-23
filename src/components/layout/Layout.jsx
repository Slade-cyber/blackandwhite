import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../utils/header"; // Header import edilmiş
import SidebarApp from "../../utils/sidebar"; // SidebarApp import edilmiş
import Categories from "../../utils/categories"; // Eksik olan Categories bileşeni eklendi

const Layout = () => {
  return (
    <div className="h-screen w-screen overflow-x-hidden"> {/* Yalnızca yatay kaydırma çubuğunu gizler */}
      {/* Header ve Kategoriler */}
      <div>
        <Header />
        <hr className="my-4" />
        <Categories />
        <hr className="my-4" />
      </div>

      {/* Sidebar ve Ana İçerik */}
      <div className="flex">
        <div>
          <SidebarApp />
        </div>
        <main className="flex-grow p-4 overflow-auto">
          {/* Alt rotaların render edildiği alan */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
