import { Outlet } from "react-router-dom";
import Menu from '../../components/Menu';
import './index.scss';

const Layout = () => {
  const menuOptions = [
    {title: 'Home', to: '/', key: 'home-page', },
    {title: 'Search', to: '/search', key: 'search-page', },
    {title: 'Purchases', to: '/purchases', key: 'purchases-page', },
    {title: 'Favorites', to: '/favorites', key: 'favorites-page', },
  ];

  return (
    <>
      <Menu options={menuOptions} />
      <Outlet />
    </>
  )
};

export default Layout;
