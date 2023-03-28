import React, { useEffect, useState } from 'react';
import { getPrice } from '../../utilities/calculate';
import { deleteShoppingCart } from '../../utilities/fakeDB';
import Cosmetic from '../Cosmetic/Cosmetic';
import './Cosmetics.css';

const Cosmetics = () => {
    /* const cosmetics = [
        { id: 1, name: 'alta', price: 100 },
        { id: 2, name: 'palish', price: 200 },
        { id: 3, name: 'malish', price: 300 },
        { id: 4, name: 'balish', price: 400 },
        { id: 5, name: 'nalish', price: 500 }
    ]; */
    /* const cosmetics = [
        {
            "id": "64220d46f342f645b7a5100f",
            "price": 301,
            "name": "Lynch Jacobs"
        },
        {
            "id": "64220d468cd19b937ee26446",
            "price": 503,
            "name": "Melendez Gill"
        },
        {
            "id": "64220d465316cb2dcd25a47f",
            "price": 221,
            "name": "Sharon Kirby"
        },
        {
            "id": "64220d4601fbeac698038953",
            "price": 178,
            "name": "Agnes Guthrie"
        },
        {
            "id": "64220d46cebdb923dc22d39e",
            "price": 173,
            "name": "Araceli Summers"
        },
        {
            "id": "64220d46e1ec2ea076f3e551",
            "price": 391,
            "name": "Linda Shelton"
        }
    ]; */

    const [cosmetics, setCosmetics] = useState([]);
    useEffect(() => {
        fetch('data.json')
            // fetch('https://cosmetic.free.beeceptor.com')
            .then(res => res.json())
            .then(data => setCosmetics(data))
    }, []);

    const totalPrice = getPrice(cosmetics);

    return (
        <div>
            <h2>Welcome to my Cosmetics Store</h2>
            <p>Money Needed: {totalPrice}</p>
            <div className='cosmetics-container'>
                {
                    cosmetics.map(cosmetic => <Cosmetic
                        cosmetic={cosmetic}
                        key={cosmetic.id}
                    ></Cosmetic>)
                }
            </div>
            <button onClick={deleteShoppingCart}>Clear Shopping Cart</button>
        </div>
    );
};

export default Cosmetics;