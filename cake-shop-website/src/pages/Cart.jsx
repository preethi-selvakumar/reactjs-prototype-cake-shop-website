import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';
import { useAppContext } from '../context/AppContext';

const Cart = () => {
    const { cartItems, updateQuantity, removeFromCart, clearCart } = useAppContext();
    const navigate = useNavigate();

    // Calculate subtotal for all items in the cart
    const subtotal = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

    // Handle quantity change
    const handleQuantityChange = (item, change) => {
        updateQuantity(item.id, item.quantity + change);
    };

    // Handle item removal
    const handleRemove = (item) => {
        const confirmRemove = window.confirm(`Are you sure you want to remove ${item.name} from the cart?`);
        if (confirmRemove) {
            removeFromCart(item.id);
        }
    };

    // Handle 'Remove All' functionality
    const handleRemoveAll = () => {
        const confirmClear = window.confirm("Are you sure you want to remove all items from the cart?");
        if (confirmClear) {
            clearCart();
        }
    };

    return (
        <>
            <Navbar />
            <PageContainer>
                <div className="cart-page-container">
                    {cartItems.length === 0 ? (
                        <div className="empty-cart-message">
                            Your cart is empty. <Link to="/" className="cart-link">Go shopping!</Link>
                        </div>
                    ) : (
                        <div className="cart-content-wrapper">
                            <div className="cart-header">
                                <h3 className="cart-header-title">Shopping Cart</h3>
                                <span className="cart-header-remove-all" onClick={handleRemoveAll}>Remove All</span>
                            </div>
                            <div className="cart-line-divider"></div>

                            <div className="cart-items-list">
                                {cartItems.map((item) => (
                                    <div className="cart-item-card" key={item.id}>
                                        <div className="cart-item-image-wrapper">
                                            <img src={item.image} alt={item.name} className="cart-item-image" />
                                        </div>

                                        <div className="cart-item-details-center">
                                            <h4 className="cart-item-name">{item.name}</h4>
                                            <p className="cart-item-weight">Weight: 1kg (Round)</p>
                                            <div className="cart-item-quantity-controls">
                                                <button className="quantity-btn" onClick={() => handleQuantityChange(item, 1)}>+</button>
                                                <span className="quantity-display">{item.quantity}</span>
                                                <button className="quantity-btn" onClick={() => handleQuantityChange(item, -1)}>-</button>
                                            </div>
                                        </div>

                                        <div className="cart-item-details-right">
                                            <p className="cart-item-total-price">Rs.{item.price * item.quantity}</p>
                                            <p className="cart-item-remove-text" onClick={() => handleRemove(item)}>Remove</p>
                                            <button className="buy-now-btn" onClick={() => navigate('/payment')}>Buy Now</button>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="cart-line-divider"></div>

                            <div className="cart-summary-section">
                                <div className="cart-summary-row">
                                    <h4 className="cart-summary-title">Sub-Total:</h4>
                                    <p className="cart-summary-price">Rs.{subtotal}</p>
                                </div>
                                <div className="cart-actions-right">
                                    <button className="cart-continue-btn" onClick={() => navigate('/')}>Continue Shopping</button>
                                    <button className="cart-checkout-btn" onClick={() => navigate('/payment')}>Checkout</button>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </PageContainer>
            <Footer />
        </>
    );
};

export default Cart;