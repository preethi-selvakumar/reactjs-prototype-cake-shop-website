import React, { useEffect, useState } from 'react';

const PageContainer = ({ children }) => {
    // Create a state for page fade-in effect
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // Scroll to top when the page loads
        window.scrollTo(0, 0);

        // After a small delay, set 'isLoaded' state to true
        // so the CSS transition will work
        const timer = setTimeout(() => {
            setIsLoaded(true);
        }, 100); // 100ms delay gives a smooth effect
        
        // Clear timer when the component unmounts
        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={`fade-in-section ${isLoaded ? 'loaded' : ''}`}>
            {children}
        </div>
    );
};

export default PageContainer;