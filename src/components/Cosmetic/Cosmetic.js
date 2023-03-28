import React from 'react';
import { addToDB, removeFromDB } from '../../utilities/fakeDB';
import './Cosmetic.css';

const Cosmetic = (props) => {
    const { name, price, id } = props.cosmetic;

    const addToCart = id => {
        addToDB(id);
    }

    const removeFromCart = id => {
        removeFromDB(id);
    }
    return (
        <div className='product'>
            <h3>Buy this: {name}</h3>
            <p>Only for: ${price}</p>
            <p><small>It's id: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to Cart</button>
            <button onClick={() => removeFromCart(id)}>Remove</button>
        </div>
    );
};

export default Cosmetic;