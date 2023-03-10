import React from "react";
import ChangeCount from "./changeCount";
import Button from "./button";
import { Link } from "react-router-dom";
import { useState } from "react";
import App from "../App.js";



export function Menu({spent, setSpent}) {
    const [cart, setCart] = useState([]);
    
    

    const AddCart = (category, price) => {
        // Check if the category is already in the shopping cart
        const categoryIndex = cart.findIndex(item => item.category === category);
    
        if (categoryIndex !== -1) {
          // If category is already in the cart, increment the count and update the amount
          const updatedCart = [...cart];
          updatedCart[categoryIndex] = { category, price, count: updatedCart[categoryIndex].count + 1 };
          setCart(updatedCart);
          setSpent(prevAmount => prevAmount + price);
        } else {
          // If category is not in the cart, add it
          const newCart = [...cart, { category, price, count: 1 }];
          setCart(newCart);
          setSpent(prevAmount => prevAmount + price);
        }
      };
    
      const RemoveCart = (category, price) => {
        const categoryIndex = cart.findIndex(item => item.category === category);
    
        if (categoryIndex !== -1) {
          const updatedCart = [...cart];
          const count = updatedCart[categoryIndex].count;
          if (count === 1) {
            // If the count is 1, remove the item from the cart
            updatedCart.splice(categoryIndex, 1);
          } else {
            // If the count is greater than 1, decrement the count and update the amount
            updatedCart[categoryIndex] = { category, price, count: count - 1 };
          }
          setCart(updatedCart);
          setSpent(prevAmount => prevAmount - price);
        }
      };
    
      const ClearCart = () => {
        setCart([]);
        setSpent(0);
      };


    return (
        <div>
            <div className="title">
                <h1>Menu</h1>
                <h3>Pick your food!</h3>
                <Link to='../pages/rec.js'>
                    <button className="button-route">Stuck? See our recommendations</button>
                </Link>
            </div>
            <div className="container">
                <div className="item">
                    <h2 className="item-title">Boba</h2>
                    <h2 className="item-title">$6.99</h2>
                    <img src='/boba.png'></img>
                    <div className="button">
                        <Button title={"+"} task={() => AddCart("boba", 7)}></Button>
                        <Button title={"-"} task={() => RemoveCart("boba", 7)}></Button>
                    </div>
                </div>    
                <div className="item">
                    <h2 className="item-title">Coffee</h2>
                    <h2 className="item-title">$4.99</h2>
                    <img src='/coffee.png'></img>
                    <div className="button">
                        <Button title={"+"} task={() => AddCart("coffee", 5)}></Button>
                        <Button title={"-"} task={() => RemoveCart("coffee", 5)}></Button>
                    </div>
                </div> 
                <div className="item">
                    <h2 className="item-title">Sweets</h2>
                    <h2 className="item-title">$5.99</h2>
                    <img src='/sweet.png'></img>
                    <div className="button">
                        <Button title={"+"} task={() => AddCart("sweet", 6)}></Button>
                        <Button title={"-"} task={() => RemoveCart("sweet", 6)}></Button>
                    </div>
                </div> 
            </div>
            <div className="shop">
                <h2 className="title">Shopping Cart</h2>
                    <div className="list-container"> 
                        <h2 className="spent">Total price: {spent}</h2>
                        <button className="button-clear" onClick={ClearCart}>Clear Shopping Cart</button>
                        <h3 className="title">Your cart:</h3>
                            <ul>
                                {cart.map(item => (
                                    <li key={item.category}>
                                        <pre>{item.category}       quantity: {item.count}   |  price: ${item.price}   ====   subtotal: ${item.count * item.price}</pre>
                                    </li>
                                ))}
                            </ul>
                    </div>
            </div>
            <footer>
                <p>&copy; Bruno's and Stella's shop</p>
            </footer>
        </div>
    );
};

export default Menu;