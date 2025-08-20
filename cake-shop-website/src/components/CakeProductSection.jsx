import React from 'react';
import { Link } from 'react-router-dom';
import { cakeProducts } from '../data/cakeProducts'; 
import { useAppContext } from '../context/AppContext';

const CakeProductSection = () => {
    // Get all filter states from Context
    const { selectedCategory, selectedTimeSlots, selectedFlavours, searchQuery } = useAppContext();

    // Start with all products
    let filteredProducts = cakeProducts;

    // 1. Filter by Category FIRST (If a category is selected)
    // This is the crucial change. Filter by category first.
    // 'All Products' can be a default category
    if (selectedCategory && selectedCategory !== 'All Products') {
        filteredProducts = filteredProducts.filter(product =>
            product.category === selectedCategory
        );
    }

    // 2. Filter by search query
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // 3. Filter by Time Slot
    if (selectedTimeSlots.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            selectedTimeSlots.includes(product.timeSlot)
        );
    }

    // 4. Filter by Flavours
    if (selectedFlavours.length > 0) {
        filteredProducts = filteredProducts.filter(product =>
            selectedFlavours.includes(product.flavour)
        );
    }

    return (
        <div className="cake-product-section-container">
            {/* Display the title dynamically from selectedCategory */}
            {/* If selectedCategory is null, display a default title */}
            <h3 className="section-subtitle">{selectedCategory || 'All Cakes'}</h3> {/* Default Title */}
            <div className="cake-product-grid">
                {filteredProducts.map((product) => (
                    <div className="snacks-card" key={product.id}>
                        <div className="snacks-image-wrapper">
                            <img src={product.image} alt={product.name} className="snacks-image" />
                        </div>
                        <div className="snacks-card-content">
                            <p className="snacks-product-name">{product.name}</p>
                            <div className="snacks-price-and-btn-wrapper">
                                <p className="snacks-price">Rs.{product.price}</p>
                                <Link to={`/product-details/${product.id}`} className="add-to-cart-btn">
                                    Add Cart
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CakeProductSection;