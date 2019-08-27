import React from "react";
import { Link } from "react-router-dom";

const HeroImage = ({ title, type }) => {
    let classes = "";
    classes += type === "economy" ? "--economy" : "--premium";
    return (
        <div>
            <div className={`main__photo main__photo${classes}`}>
                <Link to={`/rooms`} className='main__img-link'>
                    Zobacz pokoje
                </Link>
            </div>
            <div className='main__description'>
                <h2 className='main__header'>{title}</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur id lacus vitae mi ullamcorper
                    cursus. Nam gravida, erat et venenatis cursus, massa ante iaculis nisl, ut faucibus nisi lorem quis
                    sapien.{" "}
                </p>
            </div>
            <div>
                <Link to='/rooms' className='main__link'>
                    Zobacz
                </Link>
            </div>
        </div>
    );
};

export default HeroImage;
