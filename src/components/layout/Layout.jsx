import React from "react";
import { Outlet, Link } from "react-router-dom";
import Header from "../../utils/header";
import Categories from "../../utils/categories";
import SidebarApp from "../../utils/sidebar";

const Layout = () => {
  return (
    <div>
      <div>
        <Header />
        <hr className="my-4" />
        <Categories />
        <hr className="my-4" />
      </div>
      <div className="flex">
        <div>
          <SidebarApp />
        </div>
        <main>
          {/* Alt rotaların içeriklerini buraya yerleştir */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
