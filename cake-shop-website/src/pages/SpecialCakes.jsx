import React from 'react';
import Navbar from '../components/Navbar';
import FilterSidebar from '../components/FilterSidebar';
import SpecialCakesSection from '../components/SpecialCakesSection';
import CakeProductSection from '../components/CakeProductSection';
import Footer from '../components/Footer';

import PageContainer from '../components/PageContainer';

// Import useAppContext
import { useAppContext } from '../context/AppContext';

// Import usePreventClick custom hook
import { usePreventClick } from '../hooks/usePreventClick';

const SpecialCakes = () => {
    // Get isLoggedIn using useAppContext.
    const { isLoggedIn } = useAppContext();

    // Call the usePreventClick custom hook.
    usePreventClick();

    return (
        <div>
            {/* Navbar is always displayed */}
            <Navbar />
            <PageContainer>
                <div className="special-content-container">
                    {/* FilterSidebar is always displayed */}
                    <FilterSidebar />
                    <div className="main-content-area">
                        {/* Conditionally render content based on isLoggedIn status */}
                        {isLoggedIn ? (
                            // If logged in, display both SpecialCakesSection and CakeProductSection
                            <>
                                <SpecialCakesSection />
                                <CakeProductSection />
                            </>
                        ) : (
                            // If not logged in, display a message prompting the user to log in
                            <div className="login-prompt">
                                <h2>Login to See Our Special Cakes and Products!</h2>
                                <p>Create an account to view our exclusive collection, all products, and exciting offers.</p>
                            </div>
                        )}
                    </div>
                </div>
            </PageContainer>
            {/* Footer is always displayed */}
            <Footer />
        </div>
    );
};

export default SpecialCakes;