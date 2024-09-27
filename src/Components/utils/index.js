/*
This function calculates total price of a new order
@param {Array} products  cartProducts: Array of Objects
@return {numer} Total price
*/
export const totalPrice = (products) => {
    let sum = 0 
    products.forEach(products => sum += products.price)
        return sum.toFixed(2)
    };