import React, { forwardRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

import pastriesImage from '../assets/images/cake12.jpg';
import nutsCakeImage from '../assets/images/cake11.jpg';
import teaCakeImage from '../assets/images/cake10.jpg';
import browniesImage from '../assets/images/cake9.jpg';
import chocoCakeImage from '../assets/images/cake8.jpg';
import cheeseCakeImage from '../assets/images/cake7.jpg';
import whiteForestImage from '../assets/images/cake6.jpg';

const cakeProducts = [
    { id: '1', name: 'Pastries', image: pastriesImage },
    { id: '2', name: 'Nuts Cake', image: nutsCakeImage },
    { id: '3', name: 'Tea Cake', image: teaCakeImage },
    { id: '4', name: 'Brownies', image: browniesImage },
    { id: '5', name: 'Brownies', image: browniesImage },
    { id: '6', name: 'Choco Cake', image: chocoCakeImage },
    { id: '7', name: 'Cheese Cake', image: cheeseCakeImage },
    { id: '8', name: 'White Forest', image: whiteForestImage },
];

const CakesSection = forwardRef((_, ref) => { 
    // Get necessary functions from useAppContext
    const { isLoggedIn, getAuthAlertMessage, searchQuery } = useAppContext();
    const navigate = useNavigate();

    // This function will be called when a card is clicked
    const handleCardClick = (e, route) => {
        // Check if the user is logged in
        if (!isLoggedIn) {
            // Get the appropriate alert message using the function from AppContext
            const alertMessage = getAuthAlertMessage();
            if (alertMessage) {
                alert(alertMessage);
            }
            // Stop any further action here after showing the alert
            return;
        }

        // If the user is logged in, perform navigation
        navigate(route);
    };

    // 1. Filter products using searchQuery
    const filteredCakeProducts = cakeProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="cakes-container" ref={ref}>
            <h2 className="cakes-header">Satisfy Your Cake Craving In A Flash!</h2>
            <div className="cakes-divider">
                <div className="diamond-icon"></div>
            </div>
            <div className="cakes-grid">
                {/* Display filtered product cards here */}
                {filteredCakeProducts.map((product) => (
                    // Use div instead of Link, add onClick handler
                    <div
                        key={product.id}
                        className="cakes-card"
                        onClick={(e) => handleCardClick(e, '/special-cakes')}
                    >
                        <div className="cakes-image-wrapper">
                            <img src={product.image} alt={product.name} className="cakes-image" />
                        </div>
                        <div className="cakes-card-content">
                            <p className="cakes-product-name">{product.name}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
});

export default CakesSection;