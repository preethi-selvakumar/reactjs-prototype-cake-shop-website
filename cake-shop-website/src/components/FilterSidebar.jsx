import React from 'react';
import { useAppContext } from '../context/AppContext';

const FilterSidebar = () => {
    // Get setSelectedCategory from Context
    const {
        setSelectedCategory,
        selectedTimeSlots,
        setSelectedTimeSlots,
        selectedFlavours,
        setSelectedFlavours
    } = useAppContext();

    // This function will be used to update selectedCategory in AppContext.
    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
    };

    const handleTimeSlotChange = (timeSlot) => {
        // No changes are needed in this function.
        if (selectedTimeSlots.includes(timeSlot)) {
            setSelectedTimeSlots(selectedTimeSlots.filter(item => item !== timeSlot));
        } else {
            setSelectedTimeSlots([...selectedTimeSlots, timeSlot]);
        }
    };

    const handleFlavourChange = (flavour) => {
        // No changes are needed in this function.
        if (selectedFlavours.includes(flavour)) {
            setSelectedFlavours(selectedFlavours.filter(item => item !== flavour));
        } else {
            setSelectedFlavours([...selectedFlavours, flavour]);
        }
    };

    return (
        <div className="filter-sidebar-container">
            {/* Special Cakes Section - Filters by main cake category */}
            <div className="filter-section">
                <h3 className="filter-heading">Special Cakes</h3>
                <ul className="filter-list">
                    {/* Add an "All Products" option here */}
                    <li className="filter-item" onClick={() => handleCategoryClick('All Products')}>
                        All Products
                    </li>
                    <li className="filter-item" onClick={() => handleCategoryClick('Birthday Cake')}>
                        Birthday Cake
                    </li>
                    <li className="filter-item" onClick={() => handleCategoryClick('Anniversary Cake')}>
                        Anniversary Cake
                    </li>
                    <li className="filter-item" onClick={() => handleCategoryClick('Kids Designer Cake')}>
                        Kids Designer Cake
                    </li>
                </ul>
            </div>

            {/* Time Slot Section - Filters by delivery time options */}
            <div className="filter-section">
                <h3 className="filter-heading">Time Slot</h3>
                <ul className="filter-list">
                    <li className="filter-item">
                        <input
                            type="checkbox"
                            id="sameDay"
                            onChange={() => handleTimeSlotChange('Same Day Delivery')}
                            checked={selectedTimeSlots.includes('Same Day Delivery')}
                        />
                        <label htmlFor="sameDay">Same Day Delivery</label>
                    </li>
                    <li className="filter-item">
                        <input
                            type="checkbox"
                            id="threeHours"
                            onChange={() => handleTimeSlotChange('3 Hours Delivery')}
                            checked={selectedTimeSlots.includes('3 Hours Delivery')}
                        />
                        <label htmlFor="threeHours">3 Hours Delivery</label>
                    </li>
                    <li className="filter-item">
                        <input
                            type="checkbox"
                            id="nextDay"
                            onChange={() => handleTimeSlotChange('Next Day Delivery')}
                            checked={selectedTimeSlots.includes('Next Day Delivery')}
                        />
                        <label htmlFor="nextDay">Next Day Delivery</label>
                    </li>
                </ul>
            </div>

            {/* Flavours Section - Filters by cake flavours */}
            <div className="filter-section">
                <h3 className="filter-heading">Flavours</h3>
                <ul className="filter-list">
                    <li className="filter-item">
                        <input
                            type="checkbox"
                            id="blackforest"
                            onChange={() => handleFlavourChange('Blackforest')}
                            checked={selectedFlavours.includes('Blackforest')}
                        />
                        <label htmlFor="blackforest">Blackforest</label>
                    </li>
                    <li className="filter-item">
                        <input
                            type="checkbox"
                            id="butterscotch"
                            onChange={() => handleFlavourChange('Butterscotch')}
                            checked={selectedFlavours.includes('Butterscotch')}
                        />
                        <label htmlFor="butterscotch">Butterscotch</label>
                    </li>
                    <li className="filter-item">
                        <input
                            type="checkbox"
                            id="blueberry"
                            onChange={() => handleFlavourChange('Blueberry')}
                            checked={selectedFlavours.includes('Blueberry')}
                        />
                        <label htmlFor="blueberry">Blueberry</label>
                    </li>
                    <li className="filter-item">
                        <input
                            type="checkbox"
                            id="chocoTruffle"
                            onChange={() => handleFlavourChange('Choco Truffle')}
                            checked={selectedFlavours.includes('Choco Truffle')}
                        />
                        <label htmlFor="chocoTruffle">Choco Truffle</label>
                    </li>
                    <li className="filter-item">
                        <input
                            type="checkbox"
                            id="pineapple"
                            onChange={() => handleFlavourChange('Pineapple')}
                            checked={selectedFlavours.includes('Pineapple')}
                        />
                        <label htmlFor="pineapple">Pineapple</label>
                    </li>
                    <li className="filter-item">
                        <input
                            type="checkbox"
                            id="vanilla"
                            onChange={() => handleFlavourChange('Vanilla')}
                            checked={selectedFlavours.includes('Vanilla')}
                        />
                        <label htmlFor="vanilla">Vanilla</label>
                    </li>
                    <li className="filter-item">
                        <input
                            type="checkbox"
                            id="strawberry"
                            onChange={() => handleFlavourChange('Strawberry')}
                            checked={selectedFlavours.includes('Strawberry')}
                        />
                        <label htmlFor="strawberry">Strawberry</label>
                    </li>
                    <li className="filter-item">
                        <input
                            type="checkbox"
                            id="whiteForest"
                            onChange={() => handleFlavourChange('White Forest')}
                            checked={selectedFlavours.includes('White Forest')}
                        />
                        <label htmlFor="whiteForest">White Forest</label>
                    </li>
                    <li className="filter-item">
                        <input
                            type="checkbox"
                            id="blackForest"
                            onChange={() => handleFlavourChange('Black Forest')}
                            checked={selectedFlavours.includes('Black Forest')}
                        />
                        <label htmlFor="blackForest">Black Forest</label>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default FilterSidebar;