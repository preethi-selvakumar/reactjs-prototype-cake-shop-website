import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { snacksProducts } from '../data/snacksProducts';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

// Import useAppContext
import { useAppContext } from '../context/AppContext';

const Snacks = () => {
    // We get searchQuery and isLoggedIn using useAppContext.
    const { searchQuery, isLoggedIn } = useAppContext();

    // 1. Filter products using searchQuery
    const filteredSnacksProducts = snacksProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Navbar />
            <PageContainer>
                {/* Conditional rendering is added here */}
                {isLoggedIn ? (
                    // If the user is logged in, display the regular Snacks content
                    <div className="snacks-container">
                        <h2 className="snacks-header">Snacks Items</h2>
                        <div className="snacks-divider">
                            <div className="diamond-icon"></div>
                        </div>
                        <div className="snacks-grid">
                            {/* Display filtered product cards here */}
                            {filteredSnacksProducts.map((product) => (
                                <div className="snacks-card" key={product.id}>
                                    <div className="snacks-image-wrapper">
                                        <img src={product.image} alt={product.name} className="snacks-image" />
                                    </div>
                                    <div className="snacks-card-content">
                                        <p className="snacks-product-name">{product.name}</p>
                                        <div className="snacks-price-and-btn-wrapper">
                                            <p className="snacks-price">Rs.{product.price}</p>
                                            {/* link to product details page  */}
                                            <Link to={`/product-details/${product.id}`} className="add-to-cart-btn">
                                                Add Cart
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ) : (
                    // If the user is logged out, display this message
                    <div className="login-prompt">
                        <h2>Login to See All Snacks and Products!</h2>
                        <p>Create an account to view our exclusive collection and exciting offers.</p>
                    </div>
                )}
            </PageContainer>
            <Footer />
        </>
    );
};

export default Snacks;