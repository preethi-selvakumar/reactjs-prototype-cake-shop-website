import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import aboutUsBannerImage from '../assets/images/aboutus-bg.jpg';
import contentImage from '../assets/images/aboutus-left.jpg';

import PageContainer from '../components/PageContainer';

// Import usePreventClick custom hook
import { usePreventClick } from '../hooks/usePreventClick';

const AboutUs = () => {
    // Call the usePreventClick custom hook.
    usePreventClick();

    return (
        <div>
            <Navbar />
            <PageContainer>
                {/* About Us Banner Section */}
                <div className="about-us-banner">
                    <img src={aboutUsBannerImage} alt="About Us Banner" className="about-us-banner-image" />
                </div>

                {/* About Us Content Section */}
                <div className="about-us-content-section">
                    <div className="content-intro">
                        <p className="intro-paragraph">
                            Our Journey Began In 2012, With Nothing More Than A Passion For Baking And A Dream To Share Our Creations With The World! Starting With Zero Knowledge About Running A Business, We Faced Numerous Challenges And Uncertainties. Yet, We Had An Unwavering Hope And Confidence In Our Ability To Create Delicious And Delightful Cakes That Could Bring Joy To Others.
                        </p>
                        <p className="intro-paragraph">
                            From The Very Beginning, We Have Been Committed To Crafting Cakes That Not Only Taste Incredible But Also Capture The Essence Of Celebration And Love. Our Kitchen Became A Place Of Experimentation, Creativity, And Learning. With Each Cake We Baked, We Drew More Determined To Perfect Our Recipes And Techniques.
                        </p>
                        <p className="intro-paragraph">
                            The Road Wasn't Always Smooth. We Experienced Both Triumphs And Setbacks, But With Every Obstacle, We Learned And Grew Stronger. Our Journey Has Been A Testament To Perseverance, Dedication, And The Power Of A Shared Dream. We Are Incredibly Grateful For The Support And Encouragement We Received From Our Community, Friends, And Family. Your Trust And Belief In Us Fueled Our Drive To Keep Going, Even When The Going Got Tough.
                        </p>
                        <p className="intro-paragraph">
                            Thank You For Being A Part Of Our Journey. Your Continued Support And Blessings Have Made It Possible For Us To Achieve Our Dreams. As We Move Forward, We Promise To Keep Delivering The Best Cakes And Continue To Make Your Celebrations Even Sweeter.
                        </p>
                    </div>

                    <div className="content-main-section">
                        <div className="content-image-wrapper">
                            <img src={contentImage} alt="Cake in a bakery" className="content-image" />
                        </div>
                        <div className="content-text-wrapper">
                            <p className="main-content-paragraph">
                                Now, As We Celebrate Our 12th Year In Business, We Look Back With Immense Pride And Gratitude. What Started As A Humble Venture Has Blossomed Into A Beloved Cake Shop, Known For Its Quality, Creativity, And Heart. Our Cakes Have Become A Part Of Countless Celebrations, Marking Birthdays, Weddings, Anniversaries, And Many Other Special Moments.
                            </p>
                            <p className="main-content-paragraph">
                                At Call For Cake, Every Cake Is Baked With Love, Care, And Attention To Detail. We Use Only The Finest Ingredients To Ensure That Every Bite Is A Delightful Experience. Our Team, Which Has Grown Over The Years, Shares The Same Passion For Baking, And Commitment To Excellence That We Started With.
                            </p>
                            <p className="main-content-paragraph">
                                Thank You For Being A Part Of Our Journey. Your Continued Support And Blessings Have Made It Possible For Us To Achieve Our Dreams. As We Move Forward, We Promise To Keep Delivering The Best Cakes And Continue To Make Your Celebrations Even Sweeter.
                            </p>
                        </div>
                    </div>
                </div>

                <Footer />
            </PageContainer>
        </div>
    );
};

export default AboutUs;