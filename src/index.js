import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Search from './pages/Search';
import ProductDetail from './pages/ProductDetail';
import Account from './pages/Account';
import Purchases from './pages/Purchases';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import Payment from './pages/Payment';
import SignUp from './pages/SignUp';
import AuthProvider from "./providers/authProvider";
import CartProvider from "./providers/cartProvider";
import './index.scss';

export default function App() {
return (
    <AuthProvider>
        <CartProvider>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<Home />} />
                        <Route path="login" element={<Login />} />
                        <Route path='signup' element={<SignUp />}></Route>
                        <Route path="search" element={<Search />} />
                        <Route path="/product-detail/:idProduct" exact element={<ProductDetail />} />
                        <Route path="account" element={<Account />} />
                        <Route path="purchases" element={<Purchases />} />
                        <Route path="cart" element={<Cart />} />
                        <Route path="favorites" element={<Favorites />} />
                        <Route path="payment" element={<Payment />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </CartProvider>
    </AuthProvider>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
