import { useRef } from 'react';
import './index.scss';

// sections
import Offers from '../../sections/Offers';
import Categories from '../../sections/Categories';
import BestSellers from '../../sections/BestSellers';
import Footer from '../../sections/Footer';

const Home = () => {
    const offersRef = useRef(null);
    const bestSellersRef = useRef(null);
    const categoriesRef = useRef(null);

    return (
        <section className="home">
            <Categories reference={categoriesRef}></Categories>
            <Offers reference={offersRef}></Offers>
            <BestSellers reference={bestSellersRef}></BestSellers>
            <Footer></Footer>
        </section>
    );
  };
  
export default Home;
