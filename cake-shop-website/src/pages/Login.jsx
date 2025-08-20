import React, { useState, useContext, useEffect } from 'react';
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

const Login = () => {
    // Get necessary states and functions from useAppContext
    const { registeredUsers, signupEmail, setIsLoggedIn } = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    // New state for password visibility
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate();

    // The useEffect hook now sets the email from context when the component mounts
    useEffect(() => {
        if (signupEmail) {
            setEmail(signupEmail);
        }
    }, [signupEmail]);

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');

        // 1. Check if email or password are empty
        if (!email || !password) {
            setError('Please enter both email and password.');
            return;
        }

        // 2. Check the registeredUsers list
        const user = registeredUsers.find(
            (user) => user.email === email && user.password === password
        );

        if (user) {
            // If user is found, login is successful
            alert('Login successful!');

            // Set the login status to true
            setIsLoggedIn(true);

            console.log('Login successful!');
            navigate('/'); // Navigate to the root/home page after the alert
        } else {
            // If user is not found, display an error
            setError('Invalid email or password. Please try again.');
        }
    };

    // Function to toggle password visibility
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    return (
        <>
            <Navbar />
            <PageContainer>
                <div className="login-page-container">
                    {/* Left Section: Images */}
                    <div className="login-image-section">
                        <img
                            src={loginImage1}
                            alt="Delicious Cake"
                            className="login-img-top"
                            onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x300/FEEBC8/5C4033?text=Cake+Image+1"; }}
                        />
                        <div className="login-bottom-images">
                            <img
                                src={loginImage2}
                                alt="Heart-shaped Cake"
                                className="login-img-heart-cake"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x150/FEEBC8/5C4033?text=Cake+Image+2"; }}
                            />
                            <img
                                src={loginImage3}
                                alt="Various Cupcakes"
                                className="login-img-cupcakes"
                                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/200x150/FEEBC8/5C4033?text=Cupcakes"; }}
                            />
                        </div>
                    </div>

                    {/* Right Section: Login Form */}
                    <div className="login-form-section">
                        <h2 className="login-heading">Login</h2>
                        <p className="new-to-site-text">
                            New to this site?{' '}
                            <Link to="/signup" className="signup-link">
                                Sign Up
                            </Link>
                        </p>

                        {/* Display error message */}
                        {error && <p className="error-message">{error}</p>}

                        <form onSubmit={handleLogin}>
                            <div className="form-group">
                                <label htmlFor="email" className="login-label">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    className="login-input"
                                    placeholder="email@example.com"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>

                            <div className="form-group password-field">
                                <label htmlFor="password" className="login-label">Password</label>
                                <div className="password-input-container">
                                    <input
                                        type={showPassword ? "text" : "password"}
                                        id="password"
                                        className="login-input"
                                        placeholder="enter your password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                    <span className="password-toggle-icon" onClick={togglePasswordVisibility}>
                                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                                    </span>
                                </div>
                                <Link to="/forgot-password" className="forgot-password-link">
                                    Forgot password?
                                </Link>
                            </div>

                            <button type="submit" className="login-button">Login</button>
                        </form>

                        <div className="or-login-divider">
                            <span className="or-login-text">or login with</span>
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
};

export default Login;
