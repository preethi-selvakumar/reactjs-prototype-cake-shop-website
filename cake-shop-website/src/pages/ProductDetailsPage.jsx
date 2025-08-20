import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';
import { mergedProducts } from '../data/mergedProducts';
import { useAppContext } from '../context/AppContext';

// Import related item images
import relatedImg1 from '../assets/images/50-cake.jpg';
import relatedImg2 from '../assets/images/d-cake2.jpg';
import relatedImg3 from '../assets/images/bd-cake1.jpg';
import relatedImg4 from '../assets/images/anni-cake.jpg';

// Import your custom star icon
import starIcon from '../assets/images/star-icon.png';

const ProductDetailsPage = () => {
    const { productId } = useParams();
    const navigate = useNavigate(); // Initialize useNavigate
    const { addToCart } = useAppContext();

    // Find the product in the merged array
    const product = mergedProducts.find(p => p.id === productId);

    if (!product) {
        return <PageContainer><div>Product not found!</div></PageContainer>;
    }

    // Function to handle adding to cart
    const handleAddToCart = () => {
        addToCart(product, 1); // Call the context function with default quantity 1
        alert(`${product.name} has been added to the cart!`); // Show alert
    };

    // Function to handle Buy Now
    const handleBuyNow = () => {
        addToCart(product, 1); // Add the product to cart first
        navigate('/cart'); // Navigate to the cart page
    };

    // Common related products for display (you can make this dynamic later)
    const commonRelatedProducts = [
        { id: 'rel1', image: relatedImg1, name: 'Related Item 1' },
        { id: 'rel2', image: relatedImg2, name: 'Related Item 2' },
        { id: 'rel3', image: relatedImg3, name: 'Related Item 3' },
        { id: 'rel4', image: relatedImg4, name: 'Related Item 4' },
    ];

    return (
        <>
            <Navbar />
            <PageContainer>
                {/* Add the main heading and divider here */}
                <h2 className="product-details-page-title">Product Details</h2>
                <div className="product-details-divider">
                    <div className="diamond-icon"></div>
                </div>

                <div className="product-details-container">
                    <div className="product-details-main">
                        {/* Left side: Image */}
                        <div className="product-details-image-section">
                            <img src={product.image} alt={product.name} className="product-details-image" />
                            {/* Reviews section below image */}
                            <div className="product-reviews-section">
                                <h3>Reviews</h3>
                                <div className="review-stars-wrapper">
                                    {/* Use your imported star icon here */}
                                    <img src={starIcon} alt="Star Rating" className="star-icon" />
                                    <img src={starIcon} alt="Star Rating" className="star-icon" />
                                    <img src={starIcon} alt="Star Rating" className="star-icon" />
                                    <img src={starIcon} alt="Star Rating" className="star-icon" />
                                    <img src={starIcon} alt="Star Rating" className="star-icon" />
                                    <p className="review-text">0 Reviews / Write A Review</p>
                                </div>
                                <div className="section-bottom-line"></div> {/* Line below reviews */}
                            </div>
                        </div>

                        {/* Right side: Details */}
                        <div className="product-details-info-section">
                            <h1 className="product-details-name">{product.name}</h1>

                            <div className="product-location-info">
                                <FaMapMarkerAlt />
                                <p>Same Day Delivery</p>
                            </div>

                            <p className="product-prep-time">
                                Min Preparation Time: 6 Hours
                            </p>

                            <p className="product-price">Rs.{product.price}</p>

                            <div className="product-options">
                                <label>Weight</label>
                                <select>
                                    <option>1kg(Round)</option>
                                    <option>2kg(Round)</option>
                                    <option>1kg(Heart)</option>
                                </select>
                            </div>

                            <div className="product-options">
                                <label>Message On The Cake</label>
                                <textarea placeholder="Message"></textarea>
                            </div>

                            <div className="product-buttons">
                                <button className="add-to-cart-btn-details" onClick={handleAddToCart}>
                                    Add Cart
                                </button>
                                <button className="buy-now-btn-details" onClick={handleBuyNow}> {/* Add onClick event */}
                                    Buy Now
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Related Items section */}
                    <div className="related-items-section-container">
                        <h3>Related Items</h3>
                        <div className="section-bottom-line"></div>
                        <div className="related-items-grid">
                            {commonRelatedProducts.map((item) => (
                                <div className="related-item-card" key={item.id}>
                                    <img src={item.image} alt={item.name} className="related-item-image" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </PageContainer>
            <Footer />
        </>
    );
};

export default ProductDetailsPage;