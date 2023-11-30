import { useRef, useEffect, useState } from 'react';
import './index.scss';

// services
import { getCategories } from '../../services/categories';

// sections
import Offers from '../../sections/Offers';
import Categories from '../../sections/Categories';
import BestSellers from '../../sections/BestSellers';
import Footer from '../../sections/Footer';

const Home = () => {
    const [categories, setCategories] = useState([]);
    const offersRef = useRef(null);
    const bestSellersRef = useRef(null);
    const categoriesRef = useRef(null);

    useEffect(() => {
        (async() => {
            setCategories(await getCategories());
        })();

    }, []);

    return (
        <section className="home">
            <Categories reference={categoriesRef} categories={categories}></Categories>
            <Offers reference={offersRef}></Offers>
            <BestSellers reference={bestSellersRef}></BestSellers>
            <Footer/>
        </section>
    );
  };
  
export default Home;
