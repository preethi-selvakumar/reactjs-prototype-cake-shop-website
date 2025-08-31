import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';

import companyLogo from '../assets/images/cake-logo.png';
import facebookIcon from '../assets/images/Facebook.png';
import instagramIcon from '../assets/images/Instagram.png';
import whatsappIcon from '../assets/images/WhatsApp.png';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="footer-container">
                <div className="footer-content-top">
                    <div className="footer-logo">
                        <img
                            src={companyLogo}
                            alt="Company Logo"
                            className="footer-logo-img"
                        />
                    </div>

                    <div className="footer-columns">
                        <div className="footer-column">
                            <h3 className="column-title">ONLINE SHOPPING</h3>
                           <ul className="column-list">
                                <li><Link to="/" className="column-link">Home</Link></li>
                                <li><Link to="/" className="column-link">products</Link></li>
                                <li><Link to="/about" className="column-link">about us</Link></li>
                                <li><Link to="/special-cakes" className="column-link">special cake</Link></li>
                                <li><Link to="/snacks" className="column-link">Snacks</Link></li>
                                <li><Link to="/contact" className="column-link">Contact</Link></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className="column-title">USEFUL LINKS</h3>
                            <ul className="column-list">
                                <li><a href="#t&c" className="column-link">T&C</a></li>
                                <li><a href="#booking" className="column-link">Booking</a></li>
                                <li><a href="#cancellation" className="column-link">Cancellation</a></li>
                                <li><a href="#privacy-policy" className="column-link">Privacy Policy</a></li>
                                <li><a href="#returns" className="column-link">Return / Refunds</a></li>
                                <li><a href="#payments" className="column-link">Payments</a></li>
                            </ul>
                        </div>

                        <div className="footer-column">
                            <h3 className="column-title">CONTACT US</h3>
                            <div className="contact-info">
                                <p className="contact-address">
                                    <FaMapMarkerAlt className="contact-icon" /> Manek Ratna<br />
                                    3rd Floor, Block No. 304,<br />
                                    Ryna Arcade, Zakeria Road, Malad (West),<br />
                                    Maharashtra, Mumbai, Pincode : 400064
                                </p>
                                <p className="contact-phone">
                                    <FaPhoneAlt className="contact-icon" /> +91 8879438031
                                </p>
                                <p className="contact-email">
                                    <FaEnvelope className="contact-icon" /> info@cakeshop.com
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <hr className="footer-divider" />

                <div className="footer-content-bottom">
                    <p className="footer-copyright">
                        © 2021-2025 www.Cakeshop.Com All Rights Reserved.
                    </p>
                    <div className="footer-social-icons">
                        <img src={facebookIcon} alt="Facebook" className="social-icon"
                        />
                        <img src={instagramIcon} alt="Instagram" className="social-icon"
                        />
                        <img src={whatsappIcon} alt="WhatsApp" className="social-icon"
                        />
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
