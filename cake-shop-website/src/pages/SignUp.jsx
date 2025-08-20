import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAppContext } from '../context/AppContext';

// Import icons
import { FaEye, FaEyeSlash } from 'react-icons/fa';

// Import components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PageContainer from '../components/PageContainer';

// Import images
import loginImage1 from '../assets/images/cake-login-1.png';
import loginImage2 from '../assets/images/cake-login-2.png';
import loginImage3 from '../assets/images/cheese-cake.png';
import googleIcon from '../assets/images/google.png';
import facebookIcon from '../assets/images/Facebook.png';

const SignUp = () => {
    // State for form inputs and validation errors
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRobot, setIsRobot] = useState(false);
    const [errors, setErrors] = useState({});

    // New state for password visibility
    const [showPassword, setShowPassword] = useState(false);

    // Context and navigation hooks
    // registerUser சார்பையும் useAppContext-லிருந்து பெறவும்
    const { registerUser, setSignupEmail, setSignupPassword } = useAppContext();
    const navigate = useNavigate();

    const handleSignup = (e) => {
        e.preventDefault();
        const newErrors = {};

        // 1. Email validation
        if (!email) {
            newErrors.email = 'Email is required.';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email address is invalid.';
        }

        // 2. Password validation
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;
        if (!password) {
            newErrors.password = 'Password is required.';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters.';
        } else if (!passwordRegex.test(password)) {
            newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.';
        }

        // 3. I'm not a robot validation
        if (!isRobot) {
            newErrors.robot = 'Please confirm you are not a robot.';
        }

        // Update errors state
        setErrors(newErrors);

        // If no errors, proceed with signup logic
        if (Object.keys(newErrors).length === 0) {
            // registerUser சார்பை அழைக்கவும்
            const result = registerUser(email, password);

            if (result.success) {
                // Show success alert
                alert(result.message);

                // Save the email and password to context for auto-filling and validation in login form
                setSignupEmail(email);
                setSignupPassword(password);

                // Navigate to the login page after the user dismisses the alert
                navigate('/login');
            } else {
                // If signup failed (due to existing email), show the alert from the result message
                alert(result.message);
            }
        }
    };

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev);
    };

    return (
        <>
            <Navbar />
            <PageContainer>
                <div className="signup-page-container">
                    {/* Left Section: Images */}
                    <div className="signup-image-section">
                        <img
                            src={loginImage1}
                            alt="Delicious Cake"
                            className="signup-img-top"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/FEEBC8/5C4033?text=Cake+Image+1"; }}
                        />
                        <div className="signup-bottom-images">
                            <img
                                src={loginImage2}
                                alt="Heart-shaped Cake"
                                className="signup-img-heart-cake"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x150/FEEBC8/5C4033?text=Cake+Image+2"; }}
                            />
                            <img
                                src={loginImage3}
                                alt="Various Cupcakes"
                                className="signup-img-cupcakes"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x150/FEEBC8/5C4033?text=Cupcakes"; }}
                            />
                        </div>
                    </div>

                    {/* Right Section: signup Form */}
                    <div className="signup-form-section">
                        <h2 className="signup-heading">Sign Up</h2>
                        <p className="new-to-site-text">
                            Already A Member?{' '}
                            <Link to="/login" className="signup-link">
                                Log In
                            </Link>
                        </p>

                        {/* Form starts here */}
                        <form onSubmit={handleSignup}>
                            <div className="form-group">
                                <label htmlFor="email" className="signup-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="signup-input"
                                    placeholder="email@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                {errors.email && <p className="error-message">{errors.email}</p>}
                            </div>

                            <div className="form-group password-field">
                                <label htmlFor="password" className="signup-label">Password</label>
                                <div className="password-input-container">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        className="signup-input"
                                        placeholder="enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                {errors.password && <p className="error-message">{errors.password}</p>}
                            </div>

                            {/* I'm not a robot checkbox */}
                            <div className="form-group recaptcha-container">
                                <div className="recaptcha-box">
                                    <input
                                        type="checkbox"
                                        id="recaptcha"
                                        className="recaptcha-checkbox"
                                        checked={isRobot}
                                        onChange={(e) => setIsRobot(e.target.checked)}
                                    />
                                    <label htmlFor="recaptcha" className="recaptcha-label">I'm not a robot</label>
                                </div>
                                {errors.robot && <p className="error-message">{errors.robot}</p>}
                            </div>

                            <button type="submit" className="signup-button">Sign Up</button>
                        </form>

                        <div className="or-signup-divider">
                            <span className="or-signup-text">or sign up with</span>
                        </div>

                        <div className="social-media-icons-container">
                            <a href="#" className="social-media-icon-link">
                                <img
                                    src={googleIcon}
                                    alt="Google"
                                    className="social-media-icon"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/40x40/FF0000/FFFFFF?text=G"; }}
                                />
                            </a>
                            <a href="#" className="social-media-icon-link">
                                <img
                                    src={facebookIcon}
                                    alt="Facebook"
                                    className="social-media-icon"
                                    onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/40x40/0000FF/FFFFFF?text=f"; }}
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </PageContainer>
            <Footer />
        </>
    );
};0

export default SignUp;