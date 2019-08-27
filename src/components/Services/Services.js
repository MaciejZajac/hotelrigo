import React from "react";
import { FaBeer, FaKeybase, FaOdnoklassniki } from "react-icons/fa";

const Services = () => (
    <div className='main__services'>
        <h1 className='main__services-header'>Services</h1>
        <div className='flex padding-bottom-25'>
            <div className='main__single-service'>
                <span className='main__icon'>
                    <FaOdnoklassniki />
                </span>
                <h3>miła obsługa</h3>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni</div>
            </div>
            <div className='main__single-service'>
                <span className='main__icon'>
                    <FaBeer />
                </span>
                <h3>darmowe piwo</h3>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni</div>
            </div>
            <div className='main__single-service'>
                <span className='main__icon'>
                    <FaKeybase />
                </span>
                <h3>bez dzieci</h3>
                <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni</div>
            </div>
        </div>
    </div>
);

export default Services;
