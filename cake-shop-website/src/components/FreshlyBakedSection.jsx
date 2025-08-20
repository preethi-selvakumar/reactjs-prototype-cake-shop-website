import React from 'react';

const FreshlyBakedSection = () => {
    return (
        <div className="freshly-baked-section">
            <div className="freshly-baked-container">
                <h2 className="freshly-baked-title">Why Choose Our Freshly Baked Cakes In Online?</h2>
                <p className="freshly-baked-description">
                    Our Cakes Have Been Serving Our Guests With The Best Quality Treats, Traditionally Made And Presented With Care.
                </p>

                <div className="freshly-baked-features">
                    <div className="feature-item">
                        <h3 className="feature-title">100% Freshly Baked</h3>
                        <p className="feature-text">
                            We Believe In Delivering The Best. Our Cakes Are Freshly Prepared Every Day From Our Personalized Home Oven
                        </p>
                    </div>

                    <div className="feature-item">
                        <h3 className="feature-title">Committed To Quality</h3>
                        <p className="feature-text">
                            We Always Prioritize Quality From Our Ingredients To Our Kitchen Operations And Delivering Services.
                        </p>
                    </div>

                    <div className="feature-item">
                        <h3 className="feature-title">No Added Preservatives</h3>
                        <p className="feature-text">
                            Our Cakes Are Freshly Prepared Based On Requirements And Contain Zero Preservatives Or Sweeteners.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FreshlyBakedSection;