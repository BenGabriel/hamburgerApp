import { FoodProps, FoodTypes } from "./Types";

export const Food: FoodTypes[] = [
    {
        id: 1,
        name: 'Burger'
    },
    {
        id: 2,
        name: 'Pizza'
    },
    {
        id: 3,
        name: 'Pasta'
    },
    {
        id: 4,
        name: 'Salad'
    },
]

export const OrderType: FoodTypes[] = [
    {
        id: 1,
        name: 'Active Orders'
    },
    {
        id: 2,
        name: 'Past Orders'
    },
]

export const AllFood: FoodProps[] = [
    {
        id: 1,
        name: 'Cheese Burger',
        type: 'Burger',
        price: 10.00,
        image: require('../../assets/cheeseBurger.png'),
        code: 7881,
        like: false,
        color: '#ef9a40'
    },
    {
        id: 2,
        name: 'Spicy Burger',
        type: 'Burger',
        price: 12.00,
        image: require('../../assets/spicyBurger.png'),
        code: 7885,
        like: true,
        color: '#56cc82'
    },
    {
        id: 3,
        name: 'Cheese Burger',
        type: 'Burger',
        price: 10.00,
        image: require('../../assets/cheeseBurger.png'),
        code: 7881,
        like: false,
        color: '#ef9a40'
    },
    {
        id: 4,
        name: 'Spicy Burger',
        type: 'Burger',
        price: 12.00,
        image: require('../../assets/spicyBurger.png'),
        code: 7885,
        like: true,
        color: '#56cc82'
    },
]