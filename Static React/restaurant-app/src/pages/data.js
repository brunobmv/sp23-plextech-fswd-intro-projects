import React from 'react';
import {useHistory} from "react-router-dom";
import { useState } from 'react';
import Menu from '../components/menu';

function DataEntries({spent, setSpent, cart, setCart}) {
   return (
        <div>
            <Menu spent={spent} setSpent={setSpent} cart={cart} setCart={setCart}></Menu>
        </div>
   );


}

export default DataEntries;
