import React, { useRef, useEffect } from 'react';
import Navbar from '../components/Navbar';
import HomeBanner from '../components/HomeBanner';
import CakesSection from '../components/CakesSection';
import FlavoursSection from '../components/FlavoursSection';
import FreshlyBakedSection from '../components/FreshlyBakedSection';
import Footer from '../components/Footer';

// Import PageContainer component
import PageContainer from '../components/PageContainer';

// Import useAppContext
import { useAppContext } from '../context/AppContext';

// Import usePreventClick custom hook
import { usePreventClick } from '../hooks/usePreventClick';

const Home = () => {
    // Get only searchQuery using useAppContext
    const { searchQuery } = useAppContext();

    // Create a useRef for each section
    const cakesRef = useRef(null);
    const flavoursRef = useRef(null);

    // Call the usePreventClick custom hook.
    usePreventClick();

    // This useEffect will run when searchQuery changes
    useEffect(() => {
        const trimmedQuery = searchQuery.trim().toLowerCase();

        // Scroll to sections based on search query
        if (trimmedQuery && (trimmedQuery.includes('cake') || trimmedQuery.includes('pastries') || trimmedQuery.includes('nuts') || trimmedQuery.includes('choco') || trimmedQuery.includes('white forest'))) {
            cakesRef.current?.scrollIntoView({ behavior: 'smooth' });
        } else if (trimmedQuery && (trimmedQuery.includes('flavour') || trimmedQuery.includes('chocolate') || trimmedQuery.includes('forest') || trimmedQuery.includes('red velvet'))) {
            flavoursRef.current?.scrollIntoView({ behavior: 'smooth' });
        }
    }, [searchQuery]); // Runs only when searchQuery state changes

    return (
        <div>
            <Navbar />
            <PageContainer>
                <HomeBanner />
                <CakesSection ref={cakesRef} />
                <FlavoursSection ref={flavoursRef} />
                <FreshlyBakedSection />
                <Footer />
            </PageContainer>
        </div>
    );
};

export default Home;