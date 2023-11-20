import { Outlet } from "react-router-dom";
import Menu from '../../components/Menu';
import './index.scss';

const Layout = () => {
  const menuOptions = [
    {title: 'Home', to: '/', key: 'home-section', },
    {title: 'Search', to: '/search', key: 'search-section', },
    {title: 'Purchases', to: '/purchases', key: 'purchases-section', },
    {title: 'Account', to: '/account', key: 'account-section', },
  ];

  return (
    <>
      <Menu options={menuOptions} />
      <Outlet />
    </>
  )
};

export default Layout;
