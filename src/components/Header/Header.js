import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav className='header'>
            <div className='header__container'>
                <Link to='/' className='header__logo'>
                    Hotelrigo
                </Link>
                <div className='header__menu'>
                    <ul className='header__list'>
                        <Link to='/' className='header__item'>
                            Home
                        </Link>
                        <Link to='/rooms' className='header__item'>
                            Pokoje
                        </Link>
                        <Link to='/blog' className='header__item'>
                            Blog
                        </Link>
                        <Link to='/contact' className='header__item'>
                            Kontakt
                        </Link>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
