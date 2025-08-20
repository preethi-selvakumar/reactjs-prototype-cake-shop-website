import React from 'react';

import cakeImage from '../assets/images/cake1.png';

const HomeBanner = () => {
    return (
        <div className="home-banner-container">
            <div className="home-banner-content">
                <p className="home-banner-tagline">Include In Sweet Bliss</p>
                <h1 className="home-banner-title">Celebrate The Season With Our <br />Exclusive Flavour</h1>
            </div>
            <img src={cakeImage} alt="Delicious Cake" className="home-banner-cake-image" />
        </div>
    );
};

export default HomeBanner;