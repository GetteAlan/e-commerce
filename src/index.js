import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './pages/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Search from './pages/Search';
import Account from './pages/Account';
import Purchases from './pages/Purchases';
import Cart from './pages/Cart';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import './index.scss';

export default function App() {
return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="login" element={<Login />} />
                <Route path="search" element={<Search />} />
                <Route path="account" element={<Account />} />
                <Route path="purchases" element={<Purchases />} />
                <Route path="cart" element={<Cart />} />
                <Route path="favorites" element={<Favorites />} />
                <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    </BrowserRouter>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
