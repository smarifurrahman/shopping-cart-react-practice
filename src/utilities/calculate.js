const add = (first, second) => {
    return first + second;
}

const multiply = (first, second) => {
    return first * second;
}

const subtract = (first, second) => {
    return first - second;
}

const getTotalPrice = (products) => {
    const totalPrice = products.reduce((previous, current) => previous + current.price, 0);
    return totalPrice;
}

// export default add;
export {
    add,
    multiply,
    subtract,
    getTotalPrice as getPrice
};