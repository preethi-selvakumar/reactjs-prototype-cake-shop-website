import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

import butterscotchCakeImage from '../assets/images/aboutus-left.jpg';
import redVelvetCake1Image from '../assets/images/red-velvet.jpg';
import chocolateCakeImage from '../assets/images/chocolate-cake.jpg';
import redVelvetCake2Image from '../assets/images/red-cake.jpg';

// This is a dummy data array.
const flavourProducts = [
    { id: 'butterscotch', name: 'Butterscotch Cake', image: butterscotchCakeImage },
    { id: 'red-velvet-1', name: 'Red Velvet', image: redVelvetCake1Image },
    { id: 'chocolate', name: 'Chocolate Cake', image: chocolateCakeImage },
    { id: 'red-velvet-2', name: 'Red Velvet', image: redVelvetCake2Image },
];

const FlavoursSection = forwardRef((_, ref) => {
    const navigate = useNavigate();
    // Get isLoggedIn, getAuthAlertMessage, and searchQuery from useAppContext
    const { isLoggedIn, getAuthAlertMessage, searchQuery } = useAppContext();

    const handleCardClick = (e, route) => {
        if (!isLoggedIn) {
            const alertMessage = getAuthAlertMessage();
            if (alertMessage) {
                alert(alertMessage);
            }
            return;
        }

        navigate(route);
    };

    // 1. Filter products using searchQuery
    const filteredFlavourProducts = flavourProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="flavours-section-container" ref={ref}>
            {/* Title and paragraph */}
            <div className="flavours-header">
                <h2 className="flavours-heading">Experience Our Flavours</h2>
                <p className="flavours-paragraph">Buy Cakes Online With A World Of Flavors At Your Fingertips</p>
            </div>

            {/* Flavor buttons */}
            <div className="flavours-buttons-wrapper">
                <div className="flavours-buttons-container">
                    <button className="flavour-button">Chocolate</button>
                    <button className="flavour-button">Black Forest</button>
                    <button className="flavour-button">Blueberry</button>
                    <button className="flavour-button">Butterscotch</button>
                    <button className="flavour-button">Red Velvet</button>
                    <button className="flavour-button">White Forest</button>
                </div>
            </div>

            {/* Display filtered product cards here */}
            <div className="product-cards-container">
                {filteredFlavourProducts.map((product) => (
                    <div
                        key={product.id}
                        className="product-card"
                        onClick={(e) => handleCardClick(e, '/special-cakes')}
                    >
                        <img src={product.image} alt={product.name} className="product-image" />
                        <p className="product-name">{product.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default FlavoursSection;