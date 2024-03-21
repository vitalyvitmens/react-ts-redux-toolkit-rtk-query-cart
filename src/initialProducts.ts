import { IProduct } from "./types/IProduct";

export const initialProducts: IProduct[] = [
    {
        id: 1,
        name: 'Cupcake',
        price: 4.90,
        quantity: 0,
        image: './images/cupcake.jpg'
    },
    {
        id: 2,
        name: 'Coffee',
        price: 3.50,
        quantity: 0,
        image: './images/coffee.jpg'
    },
    {
        id: 3,
        name: 'Chocolate',
        price: 5.70,
        quantity: 0,
        image: './images/chocolate.jpg'
    },
    {
        id: 4,
        name: 'Waffle',
        price: 6.90,
        quantity: 1,
        image: './images/waffle.jpg'
    },
    {
        id: 5,
        name: 'Donuts',
        price: 3.90,
        quantity: 0,
        image: './images/donuts.jpg'
    },
]
