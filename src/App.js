import { useRef } from 'react';

import './App.scss';
import Home from './views/Home';
import Search from './views/Search';
import Footer from './views/Footer';
import Offers from './views/Offers';
import Menu from './components/Menu';

function App() {
  const homeRef = useRef(null);
  const searchRef = useRef(null);

  const options = [
    {title: 'Home', ref: homeRef, key: 'home-section', active: false},
  ];

  return (
    <section className="App">
      <Menu options={options}></Menu>
      <Home reference={homeRef}/>
      <Offers />
      <Search reference={searchRef}/>
      <Footer />
    </section>
  );
}

export default App;
