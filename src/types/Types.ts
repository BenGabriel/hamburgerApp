export interface FoodTypes {
    id: number
    name: string
}

export interface FoodProps {
    id: number,
    name: string,
    image: any,
    price: number,
    like: boolean,
    code: number,
    type?: string,
    color?: string
}