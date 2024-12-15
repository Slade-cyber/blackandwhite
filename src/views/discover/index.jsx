import Header from '../../utils/header';
import Categories from '../../utils/categories';
import SidebarApp from '../../utils/sidebar';

const Discover = () => {
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
          </div>
        </div>
      );
}

export default Discover;
