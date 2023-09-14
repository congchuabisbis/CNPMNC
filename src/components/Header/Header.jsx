import React, {useRef} from "react";

import { Container } from "reactstrap";
import logo from "../../assets/images/logo1.png";
import { Link, NavLink } from "react-router-dom";

import '../../styles/header.css'
const nav__links = [
    {
        display: 'Trang chủ',
        path: '/home',
    },
    {
        display: 'Giới Thiệu',
        path: '/gioithieu',
    },
    {
        display: 'Thực Đơn',
        path: '/menu',
    },
    {
        display: 'Khuyến Mãi',
        path: '/khuyenmai',
    },
    {
        display: ' Giỏ Hàng',
        path: '/cart',
    },
    {
        display: 'Liên Hệ',
        path: '/contact',
    },
]



const Header = () => {
    
    const menuRef = useRef(null)
    const toggleMenu = () => menuRef.current.classList.toggle('show__thanhmenu')
        return (<header className="header">

        <Container>
            <div className="nav__wrapper d-flex align-items-center
            justify-content-between ">
                <div className="logo">
                    <img src={logo} alt="logo" fill />
                    <h5>TUTI FOOD</h5>
                </div>

                {/*=====menu=====*/}
                <div className="navigation" ref ={menuRef}>
                    <div className="thanhmenu d-flex align-item-center gap-5">
                        {nav__links.map((item, index) => (
                            <NavLink 
                            onClick={toggleMenu}
                            to={item.path} key={index}
                            className={navClass => navClass.isActive ? 'active__thanhmenu'
                            : ''}
                                >
                                    {item.display}
                                </NavLink>
                            ))}
                    </div>
                </div>

                {/*===nav right icons===*/}
                <div className="nav__right d-flex align-items-center gap-5">
                    <span className="cart__icon">
                    <i class="ri-shopping-basket-line"></i>
                        <span className="cart__badge">2</span>
                    </span>

                    <span className="user">
                        <Link to='/login'><i class="ri-user-line"></i></Link>
                    </span>
           
                    

                    <span className="mobile__menu" onClick={toggleMenu} >
                        <i class="ri-menu-line"></i>
                    </span>
                </div>
            </div>
        </Container>
    </header>
    );

}

export default Header;