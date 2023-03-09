import React from "react";
import { useState } from "react";
import Button from './button.js';
import DataEntries from "../pages/data.js";

function ChangeCount() {
    const [cart, setCart] = useState([]);
    const [cost, setCost] = useState(0);
    const [counts, setCounts] = useState({
        boba: 0,
        coffee: 0,
        sweet: 0
    });
};

const AddCart = (category, price, cart, setCart, cost, setCost, counts, setCounts) => {
    const item = {category, price};
    setCart([...cart, item]);
    setCost(cost + price);
    setCounts({...counts, [category]: counts[category] + 1});
}

const RemoveCart = (category, price, cart, setCart, cost, setCost, counts, setCounts) => {
    let found = false;
    const newCart = cart.filter((item) => {
        if (item.hasOwnProperty(category) && !found) {
            found = true;
            return false;
        }
        return true;
    });
    if (found) {
        setCost(cost - price)
        setCounts({...counts, [category]: counts[category] - 1});
    }
    setCart(newCart);
}

const ResetCart = (setCart, setCost, setCounts) => {
    setCart([]);
    setCost(0);
    setCounts({
        boba: 0,
        coffee: 0,
        sweet: 0
    });
};

export default AddCart;
