import React, { useState } from 'react';
import { FaPhone, FaEnvelope } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';
import { useNavigate } from 'react-router-dom';

// Import useAppContext
import { useAppContext } from '../context/AppContext';

// Import usePreventClick custom hook
import { usePreventClick } from '../hooks/usePreventClick';

const ContactUs = () => {
    // Get isLoggedIn using useAppContext.
    const { isLoggedIn } = useAppContext();

    // Call the usePreventClick custom hook.
    // Only 'contact-submit-button' should be excluded.
    usePreventClick(['contact-submit-button']);

    const navigate = useNavigate();

    // States for form inputs
    const [formData, setFormData] = useState({
        name: '',
        contactNo: '',
        email: '',
        city: '',
        subject: '',
        message: '',
        attachedFile: null,
    });

    // States for form validation
    const [errors, setErrors] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('');

    const handleChange = (e) => {
        // Do not allow any changes if the user is not logged in.
        if (!isLoggedIn) {
            alert('Please Sign Up to fill out the form.');
            return;
        }

        const { name, value, files } = e.target;

        if (name === 'attachedFile') {
            const file = files[0];
            if (file && file.size <= 1048576) {
                setFormData({ ...formData, attachedFile: file });
                setErrors({ ...errors, attachedFile: '' });
            } else {
                setFormData({ ...formData, attachedFile: null });
                setErrors({ ...errors, attachedFile: 'File size should be up to 1MB.' });
            }
        } else if (name === 'name') {
            if (/^[A-Za-z\s]*$/.test(value) || value === '') {
                setFormData({ ...formData, [name]: value });
                setErrors({ ...errors, [name]: '' });
            } else {
                setErrors({ ...errors, [name]: 'Only letters and spaces are allowed.' });
            }
        } else if (name === 'contactNo') {
            if (/^[0-9]*$/.test(value) || value === '') {
                setFormData({ ...formData, [name]: value });
                setErrors({ ...errors, [name]: '' });
            } else {
                setErrors({ ...errors, [name]: 'Only numbers are allowed.' });
            }
        } else if (name === 'email') {
            const emailRegex = /^\S+@\S+\.\S+$/;
            setFormData({ ...formData, [name]: value });
            if (value.trim() !== '' && !emailRegex.test(value)) {
                setErrors({ ...errors, [name]: 'Invalid email format.' });
            } else {
                setErrors({ ...errors, [name]: '' });
            }
        } else if (name === 'city') {
            if (/^[A-Za-z\s]*$/.test(value) || value === '') {
                setFormData({ ...formData, [name]: value });
                setErrors({ ...errors, [name]: '' });
            } else {
                setErrors({ ...errors, [name]: 'Only letters and spaces are allowed.' });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Do not allow form submission if the user is not logged in.
        if (!isLoggedIn) {
            alert('Please Sign Up to submit the form.');
            return;
        }

        setErrors({});

        const newErrors = {};
        if (!formData.name) newErrors.name = 'Name is required.';
        if (!formData.contactNo) newErrors.contactNo = 'Contact Number is required.';
        if (!formData.email) newErrors.email = 'Email is required.';
        if (!formData.city) newErrors.city = 'City is required.';
        if (!formData.subject) newErrors.subject = 'Subject is required.';
        if (!formData.message) newErrors.message = 'Message is required.';

        if (formData.email && !/^\S+@\S+\.\S+$/.test(formData.email)) {
            newErrors.email = 'Invalid email format.';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            alert('Please fill out all the fields before submitting.');
            return;
        }

        alert('Thank you, your details have been received successfully!');

        // Redirect to home page after alert is dismissed
        navigate('/');

        // Reset the form (this will be done automatically as the component unmounts)
        setFormData({
            name: '',
            contactNo: '',
            email: '',
            city: '',
            subject: '',
            message: '',
            attachedFile: null,
        });
        setIsSubmitted(false);
        setSubmitStatus('');
    };

    return (
        <div>
            <Navbar />
            <PageContainer>
                <div className="contact-page-container">
                    <h2 className="contact-page-title">Contact Us</h2>
                    <div className="contact-page-divider"><div className="diamond-icon"></div></div>
                    <p className="contact-page-intro">
                        We Would Love To Hear From You. Share Your Thoughts And Queries With Us!
                    </p>

                    <div className="contact-page-form-section">
                        <form onSubmit={handleSubmit} className="contact-page-form">
                            <div className="contact-form-row">
                                <div className="contact-form-group">
                                    <label htmlFor="name">Name *</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={errors.name ? 'contact-input-error' : ''}
                                        disabled={!isLoggedIn} // Enabled only if logged in
                                    />
                                    {errors.name && <span className="contact-error-message">{errors.name}</span>}
                                </div>
                                <div className="contact-form-group">
                                    <label htmlFor="contactNo">Contact No. *</label>
                                    <input
                                        type="text"
                                        id="contactNo"
                                        name="contactNo"
                                        value={formData.contactNo}
                                        onChange={handleChange}
                                        className={errors.contactNo ? 'contact-input-error' : ''}
                                        disabled={!isLoggedIn}
                                    />
                                    {errors.contactNo && <span className="contact-error-message">{errors.contactNo}</span>}
                                </div>
                            </div>

                            <div className="contact-form-row">
                                <div className="contact-form-group">
                                    <label htmlFor="email">Email *</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={errors.email ? 'contact-input-error' : ''}
                                        disabled={!isLoggedIn}
                                    />
                                    {errors.email && <span className="contact-error-message">{errors.email}</span>}
                                </div>
                                <div className="contact-form-group">
                                    <label htmlFor="city">City *</label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        value={formData.city}
                                        onChange={handleChange}
                                        disabled={!isLoggedIn}
                                    />
                                    {errors.city && <span className="contact-error-message">{errors.city}</span>}
                                </div>
                            </div>

                            <div className="contact-form-group-full">
                                <label htmlFor="subject">Subject *</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    disabled={!isLoggedIn}
                                />
                                {errors.subject && <span className="contact-error-message">{errors.subject}</span>}
                            </div>

                            <div className="contact-form-group-full">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    value={formData.message}
                                    onChange={handleChange}
                                    disabled={!isLoggedIn}
                                ></textarea>
                                {errors.message && <span className="contact-error-message">{errors.message}</span>}
                            </div>

                            <div className="contact-form-group-full">
                                <label>Attach Files</label>
                                <div className="custom-file-upload">
                                    <input
                                        type="file"
                                        name="attachedFile"
                                        id="attachedFile"
                                        onChange={handleChange}
                                        className="contact-file-input"
                                        style={{ display: 'none' }}
                                        disabled={!isLoggedIn}
                                    />
                                    <label htmlFor="attachedFile" className="file-upload-button">Choose File</label><span className="file-selected-name">
                                        {formData.attachedFile ? formData.attachedFile.name : 'No file chosen'}
                                    </span>
                                </div>
                                {errors.attachedFile && <span className="contact-error-message">{errors.attachedFile}</span>}
                                <p className="contact-file-note">Note: We Accept File Sizes Up To 1Mb And In A Jpeg, Png Or Pdf Format.</p>
                            </div>

                            <button type="submit" className="contact-submit-button" disabled={isSubmitted || !isLoggedIn}>
                                Submit
                            </button>
                            {submitStatus && <p className="contact-submit-status">{submitStatus}</p>}
                        </form>
                    </div>

                    <div className="contact-page-details-section">
                        {/* Right-side content */}
                        <div className="contact-company-details">
                            <h3>Shino Cake Private Limited</h3>
                            <h4>Registered Address:</h4>
                            <p>32/33 A, Deonar Village Road, Opp. Metal Box<br />
                                Company, Govandi East,<br />
                                Mumbai-400088,<br />
                                Maharashtra, India</p>
                            <h4>Grievance & Nodal Officer:</h4>
                            <p>Ms. Simantini Burdukh,<br />
                                General Counsel & Company Secretary</p>
                            <h4>Contact Details:</h4>
                            <div className="contact-page-info">
                                <FaPhone className="contact-page-icon" />
                                <p>+91 8879438031</p>
                            </div>
                            <div className="contact-page-info">
                                <FaEnvelope className="contact-page-icon" />
                                <p>info@cakeshop.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </PageContainer>
            <Footer />
        </div>
    );
};

export default ContactUs;