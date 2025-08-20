import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';
import { useAppContext } from '../context/AppContext';

import gpayLogo from '../assets/images/g-pay.png';
import visaLogo from '../assets/images/visa.png';
import rupayLogo from '../assets/images/rupay.png';

const Payment = () => {
    const navigate = useNavigate();
    const { clearCart } = useAppContext(); // get clearCart from context

    const [formData, setFormData] = useState({
        contactEmailPhone: '',
        countryRegion: '',
        firstName: '',
        lastName: '',
        address: '',
        apartment: '',
        city: '',
        state: '',
        pin: '',
        phone: '',
        paymentMethod: '',
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });

        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.contactEmailPhone) {
            newErrors.contactEmailPhone = 'Email or Phone Number is required.';
        } else if (!/^(\S+@\S+\.\S+|\d{10})$/.test(formData.contactEmailPhone)) {
            newErrors.contactEmailPhone = 'Invalid email or 10-digit phone number.';
        }
        if (!formData.countryRegion) newErrors.countryRegion = 'Country/Region is required.';
        if (!formData.firstName) newErrors.firstName = 'First Name is required.';
        if (!formData.lastName) newErrors.lastName = 'Last Name is required.';
        if (!formData.address) newErrors.address = 'Address is required.';
        if (!formData.city) newErrors.city = 'City is required.';
        if (!formData.state) newErrors.state = 'State is required.';
        if (!formData.pin) {
            newErrors.pin = 'Pin is required.';
        } else if (!/^\d{6}$/.test(formData.pin)) {
            newErrors.pin = 'Pin must be 6 digits.';
        }
        if (!formData.phone) {
            newErrors.phone = 'Phone Number is required.';
        } else if (!/^\d{10}$/.test(formData.phone)) {
            newErrors.phone = 'Phone must be 10 digits.';
        }
        if (!formData.paymentMethod) newErrors.paymentMethod = 'Please select a payment method.';

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Payment details submitted successfully!');

            // Clear cart using context
            clearCart();

            // Navigate to homepage
            navigate('/');
        } else {
            alert('Please fill in all required fields correctly.');
        }
    };

    return (
        <>
            <Navbar />
            <PageContainer>
                <div className="payment-page-container">
                    <div className="payment-header">
                        <h2 className="payment-page-title">Payment</h2>
                        <div className="payment-divider">
                            <div className="diamond-icon"></div>
                        </div>
                    </div>

                    <form onSubmit={handleSubmit} className="payment-form">
                        {/* Contact */}
                        <div className="payment-section">
                            <h3 className="payment-section-title">Contact</h3>
                            <input
                                type="text"
                                name="contactEmailPhone"
                                placeholder="Email Or Phone Number"
                                value={formData.contactEmailPhone}
                                onChange={handleChange}
                                className={`contact-input ${errors.contactEmailPhone ? 'input-error' : ''}`}
                            />
                            {errors.contactEmailPhone && (
                                <span className="error-message">{errors.contactEmailPhone}</span>
                            )}
                        </div>

                        {/* Delivery */}
                        <div className="payment-section">
                            <h3 className="payment-section-title">Delivery</h3>
                            <input
                                type="text"
                                name="countryRegion"
                                placeholder="Country/Region"
                                value={formData.countryRegion}
                                onChange={handleChange}
                                className={errors.countryRegion ? 'input-error' : ''}
                            />
                            {errors.countryRegion && <span className="error-message">{errors.countryRegion}</span>}

                            <div className="form-row two-cols">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="firstName"
                                        placeholder="First Name"
                                        value={formData.firstName}
                                        onChange={handleChange}
                                        className={errors.firstName ? 'input-error' : ''}
                                    />
                                    {errors.firstName && <span className="error-message">{errors.firstName}</span>}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="lastName"
                                        placeholder="Last Name"
                                        value={formData.lastName}
                                        onChange={handleChange}
                                        className={errors.lastName ? 'input-error' : ''}
                                    />
                                    {errors.lastName && <span className="error-message">{errors.lastName}</span>}
                                </div>
                            </div>

                            <input
                                type="text"
                                name="address"
                                placeholder="Address"
                                value={formData.address}
                                onChange={handleChange}
                                className={errors.address ? 'input-error' : ''}
                            />
                            {errors.address && <span className="error-message">{errors.address}</span>}

                            <input
                                type="text"
                                name="apartment"
                                placeholder="Apartment"
                                value={formData.apartment}
                                onChange={handleChange}
                            />

                            <div className="form-row three-cols">
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City"
                                        value={formData.city}
                                        onChange={handleChange}
                                        className={errors.city ? 'input-error' : ''}
                                    />
                                    {errors.city && <span className="error-message">{errors.city}</span>}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="state"
                                        placeholder="State"
                                        value={formData.state}
                                        onChange={handleChange}
                                        className={errors.state ? 'input-error' : ''}
                                    />
                                    {errors.state && <span className="error-message">{errors.state}</span>}
                                </div>
                                <div className="form-group">
                                    <input
                                        type="text"
                                        name="pin"
                                        placeholder="Pin"
                                        value={formData.pin}
                                        onChange={handleChange}
                                        className={errors.pin ? 'input-error' : ''}
                                    />
                                    {errors.pin && <span className="error-message">{errors.pin}</span>}
                                </div>
                            </div>

                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone"
                                value={formData.phone}
                                onChange={handleChange}
                                className={errors.phone ? 'input-error' : ''}
                            />
                            {errors.phone && <span className="error-message">{errors.phone}</span>}
                        </div>

                        {/* Shipping */}
                        <div className="payment-section">
                            <h3 className="payment-section-title">Shipping Address</h3>
                            <p className="shipping-address-placeholder">
                                Enter Your Shipping Address To View Available Shipping Method
                            </p>
                        </div>

                        {/* Payment */}
                        <div className="payment-section">
                            <h3 className="payment-section-title">Payment</h3>
                            <p className="payment-secure-text">All Transactions Are Secure And Encrypted.</p>

                            <div className="payment-methods-wrapper">
                                <div className="payment-method-option">
                                    <input
                                        type="radio"
                                        id="phonepay"
                                        name="paymentMethod"
                                        value="phonepay"
                                        checked={formData.paymentMethod === 'phonepay'}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="phonepay">
                                        Phonepay Payment Gateway (Gpay, Cards & Netbanking)
                                        <div className="payment-icons">
                                            <img src={gpayLogo} alt="Gpay" className="payment-icon" />
                                            <img src={visaLogo} alt="Visa" className="payment-icon" />
                                            <img src={rupayLogo} alt="RuPay" className="payment-icon" />
                                        </div>
                                    </label>
                                </div>

                                <div className="payment-method-option">
                                    <input
                                        type="radio"
                                        id="netbanking"
                                        name="paymentMethod"
                                        value="netbanking"
                                        checked={formData.paymentMethod === 'netbanking'}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="netbanking">Netbanking/UPI Payment</label>
                                </div>

                                <div className="payment-method-option">
                                    <input
                                        type="radio"
                                        id="creditDebit"
                                        name="paymentMethod"
                                        value="creditDebit"
                                        checked={formData.paymentMethod === 'creditDebit'}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="creditDebit">Credit/Debit</label>
                                </div>

                                <div className="payment-method-option">
                                    <input
                                        type="radio"
                                        id="cashOnDelivery"
                                        name="paymentMethod"
                                        value="cashOnDelivery"
                                        checked={formData.paymentMethod === 'cashOnDelivery'}
                                        onChange={handleChange}
                                    />
                                    <label htmlFor="cashOnDelivery">Cash On Delivery</label>
                                </div>
                                {errors.paymentMethod && <span className="error-message">{errors.paymentMethod}</span>}
                            </div>
                        </div>

                        <button type="submit" className="pay-now-btn">Pay Now</button>
                    </form>
                </div>
            </PageContainer>
            <Footer />
        </>
    );
};

export default Payment;
