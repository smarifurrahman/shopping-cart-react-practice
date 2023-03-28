import React from 'react';
import { add, multiply, subtract } from '../../utilities/calculate';

const Shoes = () => {
    const first = 11;
    const second = 12;
    const sum = add(first, second);
    const mul = multiply(first, second);
    const sub = subtract(first, second);
    return (
        <div>
            <h3>This is shoes compo</h3>
            <p>Sum: {sum}, Multiply: {mul}, and Subtract: {sub}</p>
        </div>
    );
};

export default Shoes;