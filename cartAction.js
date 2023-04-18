import { ADD_TO_CART } from "../Types/cartType";


const addToCart = (product)=>(
{
    type: ADD_TO_CART,
    payload:product
}
)

export default addToCart;