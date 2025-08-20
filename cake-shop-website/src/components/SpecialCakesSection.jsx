import React from 'react';

// Import images
import birthdayCakeImage from '../assets/images/bd-cake.jpg';
import anniversaryCakeImage from '../assets/images/anni-cake.jpg';
import designerCakeImage from '../assets/images/car-cake.jpg';

const SpecialCakesSection = () => {
    return (
        <div className="special-cakes-section-container">
            <h2 className="special-section-title">speciality cakes</h2>
            <div className="contact-page-divider"><div className="diamond-icon"></div></div>
            <div className="speciality-cakes-grid">
                <div className="special-cake-item">
                    <img src={birthdayCakeImage} alt="Happy Birthday Cake" className="special-cake-image" />
                </div>
                <div className="special-cake-item">
                    <img src={anniversaryCakeImage} alt="Anniversary Cake" className="special-cake-image" />
                </div>
                <div className="special-cake-item">
                    <img src={designerCakeImage} alt="Kids Designer Cake" className="special-cake-image" />
                </div>
            </div>
        </div>
    );
};

export default SpecialCakesSection;