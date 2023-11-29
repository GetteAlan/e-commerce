import { useRef, useEffect, useState } from 'react';
import './index.scss';

// services
import { getCategories } from '../../services/categories';
import { getOffers } from '../../services/offers';
import { getBestSellers } from '../../services/bestSellers';

// sections
import Offers from '../../sections/Offers';
import Categories from '../../sections/Categories';
import BestSellers from '../../sections/BestSellers';
import Footer from '../../sections/Footer';


const Home = () => {
    const [categories, setCategories] = useState([]);
    const [offers, setOffers] = useState([]);
    const [bestSellers, setBestSellers] = useState([]);
    const offersRef = useRef(null);
    const bestSellersRef = useRef(null);
    const categoriesRef = useRef(null);

    useEffect(() => {
        (async() => {
            setCategories(await getCategories());
            setOffers(await getOffers());
            setBestSellers(await getBestSellers());
        })();


    }, []);

    return (
        <section className="home">
            <Categories reference={categoriesRef} categories={categories}></Categories>
            <Offers reference={offersRef} offers={offers}></Offers>
            <BestSellers reference={bestSellersRef} bestSellers={bestSellers}></BestSellers>
            <Footer></Footer>
        </section>
    );
  };
  
export default Home;
