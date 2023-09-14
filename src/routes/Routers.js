import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Home from "../pages/Trangchu";
import Menu from "../pages/Menu";
import Khuyenmai from "../pages/Khuyenmai";
import Gioithieu from "../pages/Gioithieu";
import FoodDetails from "../pages/FoodDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";

const Routers = () => {
    return <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/khuyenmai" element={<Khuyenmai />} />
        <Route path="/gioithieu" element={<Gioithieu />} />
        <Route path="/foods/:id" element={<FoodDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
    </Routes>
}

export default Routers