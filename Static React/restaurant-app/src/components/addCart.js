import React from "react";

function AddCart(category, price, cart, setCart, cost, setCost, counts, setCounts){
    const item = {category, price};
    setCart([...cart, item]);
    setCost(cost + price);
    setCounts({...counts, [category]: counts[category] + 1});
}

export default AddCart;