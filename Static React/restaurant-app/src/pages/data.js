import React from 'react';
import {useHistory} from "react-router-dom";
import { useState } from 'react';

function Data({foodItems, addAction}) {
    const [counts, setCounts] = useState({
        boba: 0,
        coffee: 0,
        sweets: 0
    })

    const prices = {
        boba: 7,
        coffee: 6,
        sweet: 5
    }

    const [balance, setBalance] = useState(0);

    function incrementBoba() {
        counts.boba.setCounts(counts + 1);
        setBalance(balance + prices.boba);
    }

    function incrementCoffee() {
        counts.coffee.setCounts(counts + 1);
        setBalance(balance + prices.coffee);
    }

    function incrementSweet() {
        counts.sweet.setCounts(counts + 1);
        setBalance(balance + prices.sweet);
    }

    function decrementBoba() {
        counts.boba.setCounts(counts - 1);
        setBalance(balance - prices.boba);
    }

    function decrementCoffee() {
        counts.coffee.setCounts(counts - 1);
        setBalance(balance - prices.coffee);
    }

    function incrementSweet() {
        counts.sweet.setCounts(counts - 1);
        setBalance(balance - prices.sweet);
    }

    function clear() {
        counts.boba.setCounts(0);
        counts.coffee.setCounts(0);
        counts.sweet.setCounts(0);
    }

    const [list, setList] = useState([]);

    const newList = list.filter((item) => item.name !== category);


    return (
        <div>
            
        </div>
    );
    


}

