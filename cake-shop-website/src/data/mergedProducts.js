import { cakeProducts } from './cakeProducts';
import { snacksProducts } from './snacksProducts';

export const mergedProducts = [
    ...snacksProducts, ...cakeProducts
];