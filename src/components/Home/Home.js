import React from "react";
import HeroImage from "../HeroImages/HeroImage";
import Services from "../Services/Services";

const Home = () => {
    return (
        <section className='main'>
            <h1 className='main__head'>Wolne pokoje!</h1>
            <div className='main__photos'>
                <div className='main__img-container'>
                    <HeroImage title='Pokoje klasy ekonomicznej' type='economy' />
                    <HeroImage title='Pokoje klasy premium' type='premium' />
                </div>
            </div>
            <Services />
        </section>
    );
};

export default Home;
