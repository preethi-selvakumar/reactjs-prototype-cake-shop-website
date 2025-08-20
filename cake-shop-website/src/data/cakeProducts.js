// Import all six cake images
import whiteForestImage from '../assets/images/bd-cake1.jpg';
import teaCakeImage from '../assets/images/bd-cake2.jpg';
import browniesImage from '../assets/images/bd-cake3.jpg';
import chocoCakeImage from '../assets/images/chocolate-cake.jpg';
import cheeseCakeImage from '../assets/images/cheese-cake.png';
import whiteForest2Image from '../assets/images/aboutus-left.jpg';

export const cakeProducts = [
    {
        id: 'birthday-white-forest',
        name: 'White Forest',
        price: '750',
        image: whiteForestImage,
        category: 'Birthday Cake', 
        timeSlot: '3 Hours Delivery',
        flavour: 'White Forest'
    },
    {
        id: 'anniversary-tea-cake',
        name: 'Tea Cake',
        price: '590',
        image: teaCakeImage,
        category: 'Anniversary Cake', 
        timeSlot: 'Next Day Delivery',
        flavour: 'Vanilla'
    },
    {
        id: 'kids-brownies',
        name: 'Brownies',
        price: '850',
        image: browniesImage,
        category: 'Kids Designer Cake', 
        timeSlot: 'Same Day Delivery',
        flavour: 'Choco Truffle'
    },
    {
        id: 'birthday-choco-cake',
        name: 'Choco Cake',
        price: '800',
        image: chocoCakeImage,
        category: 'Birthday Cake', 
        timeSlot: '3 Hours Delivery',
        flavour: 'Choco Truffle'
    },
    {
        id: 'anniversary-cheese-cake',
        name: 'Chees Cake',
        price: '750',
        image: cheeseCakeImage,
        category: 'Anniversary Cake', 
        timeSlot: 'Next Day Delivery',
        flavour: 'Pineapple'
    },
    {
        id: 'kids-white-forest-2',
        name: 'White Forest',
        price: '500',
        image: whiteForest2Image,
        category: 'Kids Designer Cake', 
        timeSlot: 'Same Day Delivery',
        flavour: 'White Forest'
    },
];