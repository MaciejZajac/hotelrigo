import React from "react";
import { Link } from "react-router-dom";

const year = new Date().getFullYear();

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container'>
                <Link to='/' className='footer__link'>
                    Maciej Zając
                </Link>{" "}
                @ {year}
            </div>
        </footer>
    );
};

export default Footer;
