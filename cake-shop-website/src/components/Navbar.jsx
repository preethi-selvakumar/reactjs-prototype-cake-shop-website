import React from 'react';
import { FaSearch, FaBars } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

import logo from '../assets/images/cake-logo.png';
import profileImg from '../assets/images/profile-icon.png';
import cartImg from '../assets/images/cart-icon.png';

const Navbar = () => {
    // Get setSelectedCategory from useAppContext
    const { isMenuOpen, toggleMenu, cartItems, isLoggedIn, searchQuery, setSearchQuery, setSelectedCategory } = useAppContext();
    const navigate = useNavigate();

    const totalItemsInCart = cartItems.reduce((total, item) => total + item.quantity, 0);

    const handleProfileClick = () => {
        if (isLoggedIn) {
            alert('You are already logged in!');
            // You could navigate to a profile page or show a alert message.
        } else {
            navigate('/login');
        }
    };

    const handleSearchChange = (event) => {
        setSearchQuery(event.target.value);
    };

    // This function runs when the Enter key is pressed in the search bar
    const handleSearchKeyDown = (event) => {
        if (event.key === 'Enter') {
            const trimmedQuery = searchQuery.trim().toLowerCase();

            // Check if it's a cake-related search
            if (trimmedQuery.includes('cake') || trimmedQuery.includes('forest') || trimmedQuery.includes('velvet')) {
                setSelectedCategory('Birthday Cake'); // Set a default category when navigating to the cake page
                navigate('/special-cakes');
            }
            // Check if it's a snacks-related search
            else if (trimmedQuery.includes('brownies') || trimmedQuery.includes('snacks') || trimmedQuery.includes('pastries')) {
                navigate('/snacks');
            }
            // If nothing else, navigate to the homepage
            else {
                navigate('/');
            }
        }
    };

    return (
        <>
            <div className="announcement-bar">
                Welcome To Our Shop. Kindly Note, Currently We Deliver To All Locations!. Thank You For Your Love And Support.
            </div>

            <nav className="navbar">
                <div className="navbar-left">
                    <img src={logo} alt="Cake Shop Logo" className="logo" />
                </div>

                <div className="hamburger-menu" onClick={toggleMenu}>
                    <FaBars />
                </div>

                <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul className="mobile-links">
                        <li><Link to="/" onClick={toggleMenu}>Products</Link></li>
                        <li><Link to="/about" onClick={toggleMenu}>About Us</Link></li>
                        <li><Link to="/special-cakes" onClick={toggleMenu}>Special Cakes</Link></li>
                        <li><Link to="/snacks" onClick={toggleMenu}>Snacks</Link></li>
                        <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
                        {/* Mobile Profile Icon */}
                        <li>
                            <div className="profile-icon-wrapper" onClick={() => { handleProfileClick(); toggleMenu(); }}>
                                <img src={profileImg} alt="Profile" className="icon" />
                            </div>
                        </li>
                        {/* Mobile Cart Icon */}
                        <li>
                            <Link to="/cart" onClick={toggleMenu} className="cart-icon-wrapper">
                                <img src={cartImg} alt="Cart" className="icon" />
                                {totalItemsInCart > 0 && (
                                    <span className="cart-item-count">{totalItemsInCart}</span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </div>

                <ul className="navbar-links">
                    <li><Link to="/">Products</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/special-cakes">Special Cakes</Link></li>
                    <li><Link to="/snacks">Snacks</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>

                <div className="navbar-right">
                    <div className="search-bar">
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={handleSearchChange}
                            onKeyDown={handleSearchKeyDown} // <-- Function to handle Enter key press
                        />
                        <FaSearch className="search-icon" />
                    </div>
                    {/* Desktop Profile Icon */}
                    <div className="profile-icon-wrapper" onClick={handleProfileClick}>
                        <img src={profileImg} alt="Profile" className="icon" />
                    </div>
                    {/* Cart Icon */}
                    <Link to="/cart" className="cart-icon-wrapper">
                        <img src={cartImg} alt="Cart" className="icon" />
                        {totalItemsInCart > 0 && (
                            <span className="cart-item-count">{totalItemsInCart}</span>
                        )}
                    </Link>
                </div>
            </nav>
        </>
    );
};

export default Navbar;