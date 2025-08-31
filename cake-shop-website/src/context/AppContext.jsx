import React, { createContext, useState, useContext, useEffect, useRef } from 'react';

// Create a context for the application
const AppContext = createContext();

// Custom hook to easily access the context values
export const useAppContext = () => useContext(AppContext);

// Provider component that wraps your application and provides context values
export const AppProvider = ({ children }) => {
    // State for managing the mobile menu's open/close status
    const [isMenuOpen, setIsMenuOpen] = useState(false); 

    // State for managing the currently selected product category in filters
    // Changed initial state to 'All Products' so all cakes show by default
    const [selectedCategory, setSelectedCategory] = useState('All Products');
    const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
    const [selectedFlavours, setSelectedFlavours] = useState([]);

    // New state for search query
    const [searchQuery, setSearchQuery] = useState('');

    // State for managing items in the shopping cart
    // It initializes from localStorage to persist cart items across sessions
    const [cartItems, setCartItems] = useState(() => {
        try {
            const localCart = localStorage.getItem("cartItems");
            return localCart ? JSON.parse(localCart) : [];
        }
        catch (error) {
            console.error("Failed to parse cart items from localStorage:", error);
            return [];
        }
    });

    // New state to store all registered users (email and password pairs)
    // Initialize from localStorage to persist registered users across sessions
    const [registeredUsers, setRegisteredUsers] = useState(() => {
        try {
            const localUsers = localStorage.getItem("registeredUsers");
            return localUsers ? JSON.parse(localUsers) : [];
        } catch (error) {
            console.error("Failed to parse registered users from localStorage:", error);
            return [];
        }
    });

    // New state to store the email from the signup page for pre-filling login form
    // Note: signupEmail and signupPassword are now primarily for form input/temp storage
    const [signupEmail, setSignupEmail] = useState(''); // Initialized as empty
    const [signupPassword, setSignupPassword] = useState(''); // Initialized as empty

    // New state to track if the user is logged in
    // Retrieve isLoggedIn status from localStorage
    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        try {
            const loggedInStatus = localStorage.getItem('isLoggedIn');
            // Use Boolean value instead of 'true' string or null
            return loggedInStatus === 'true';
        }
        catch (error) {
            console.error("Failed to get login status from localStorage:", error);
            return false;
        }
    });
    const timeoutRef = useRef(null);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    const addToCart = (product, quantity = 1) => {
        setCartItems((prevItems) => {
            const existingItem = prevItems.find((item) => item.id === product.id);

            if (existingItem) {
                return prevItems.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            } else {
                return [...prevItems, { ...product, quantity }];
            }
        });
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) =>
            prevItems.filter((item) => item.id !== productId)
        );
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) {
            removeFromCart(productId);
            return;
        }

        setCartItems((prevItems) =>
            prevItems.map((item) =>
                item.id === productId ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const clearCart = () => {
        setCartItems([]);
        localStorage.removeItem("cartItems");
    };

    const handleLogout = () => {
        setIsLoggedIn(false);
        // Also change the login status in localStorage to 'false'
        localStorage.setItem('isLoggedIn', 'false');
        alert('You have been logged out due to inactivity.');
    };

    // Function to start the inactivity timer
    const startTimer = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
        // Set a timer for 30 minutes (1,800,000 milliseconds)
        timeoutRef.current = setTimeout(handleLogout, 1800000); // 30 minutes
    };

    // New function to register a user
    const registerUser = (email, password) => {
        // Check if the email already exists
        const userExists = registeredUsers.some(user => user.email === email);
        if (userExists) {
            return { success: false, message: "Already signed up with this email!" };
        }

        // Add the new user
        const newUser = { email, password };
        setRegisteredUsers((prevUsers) => [...prevUsers, newUser]);
        // Store email for pre-filling login form
        setSignupEmail(email);
        setSignupPassword(password); 

        return { success: true, message: "Signup successful!" };
    };

    // Effect hook for auto-logout: Starts the timer when the user logs in
    useEffect(() => {
        if (isLoggedIn) {
            // Start the timer when the user logs in
            startTimer();

            // Clean up: Clear timer when component unmounts or isLoggedIn becomes false
            return () => {
                if (timeoutRef.current) {
                    clearTimeout(timeoutRef.current);
                }
            };
        } else {
            // If not logged in, ensure any existing timer is cleared
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current);
            }
        }
    }, [isLoggedIn]);

    // Effect hook to keep localStorage in sync with cartItems state
    useEffect(() => {
        try {
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        } catch (error) {
            console.error("Failed to save cart items to localStorage:", error);
        }
    }, [cartItems]);

    // Effect hook to save registeredUsers to localStorage whenever they change
    useEffect(() => {
        try {
            localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));
        } catch (error) {
            console.error("Failed to save registered users to localStorage:", error);
        }
    }, [registeredUsers]);

    // Update localStorage whenever isLoggedIn state changes
    useEffect(() => {
        localStorage.setItem('isLoggedIn', isLoggedIn);
    }, [isLoggedIn]);

    // Function to check login status and return the correct alert message
    const getAuthAlertMessage = () => {
        if (isLoggedIn) {
            return ''; // If logged in, no message needed
        }
        // Check if an account exists based on registeredUsers or localStorage
        // Note: For production, do NOT store password in localStorage
        if (registeredUsers.length > 0) { // If there are any registered users
            return 'Please log in to continue.';
        } else {
            return 'Please sign up to continue.';
        }
    };

    // The value object contains all the states and functions to be provided to consumers
    const value = {
        // Menu states and functions
        isMenuOpen,
        toggleMenu,
        // Cart states and functions
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        // Product filtering states and functions
        selectedCategory,
        setSelectedCategory,
        selectedTimeSlots,
        setSelectedTimeSlots,
        selectedFlavours,
        setSelectedFlavours,
        // Search query state and setter
        searchQuery,
        setSearchQuery,
        // Signup email and password states and setters (for prototype)
        signupEmail,
        setSignupEmail,
        signupPassword,
        setSignupPassword,
        // Login status state and setter
        isLoggedIn,
        setIsLoggedIn,
        // New function to handle auth alerts
        getAuthAlertMessage,
        // New function to register user
        registerUser,
        // Registered users state (for login validation)
        registeredUsers,
    };

    // Provide the value to all children components
    return (
        <AppContext.Provider value={value}>
            {children}
        </AppContext.Provider>
    );
};
