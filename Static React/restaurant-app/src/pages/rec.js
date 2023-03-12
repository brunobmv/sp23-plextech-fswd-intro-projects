import React from 'react';
import {useHistory} from "react-router-dom";
import { spent } from "../components/menu.js";
import { Link } from "react-router-dom";


const RecomendationPage = ({spent, items}) => {
    const getTotalItems = () => {
      const totalCount = items.reduce((acc, item) => acc + item.count, 0);
      return totalCount;
    }

    const getCount = ({category}) => {
      return items.find((item) => item[0] === category).count;
    }

    
    const getDistributionRecommendation = () => {
        const totalCount = getTotalItems();
        if (totalCount == 0) {
          return "Add some items to the list first!"
        }
      
        const bobaCount = getCount("boba");
        const coffeeCount = getCount("coffee");
        const sweetCount = getCount("sweet");
    
        const bobaPercent = (bobaCount / totalCount) * 100;
        const coffeePercent = (coffeeCount / totalCount) * 100;
        const sweetPercent = (sweetCount / totalCount) * 100;
        if (bobaPercent > 50) {
          return 'You bought a lot of boba! Consider diversifying your purchases.';
        } else if (coffeePercent > 50) {
          return 'You bought a lot of coffee! Consider choosing healthier options.';
        } else if (sweetPercent > 50) {
          return 'You bought a lot of sweet! Consider choosing homemade options.';
        } else {
          return 'Your purchases are well-balanced!';
        }
      };

      const recomendationSpent = () => {
        if (spent > 100) {
            return "Sheeesh! You are spending a lot!"
        } else if  (spent < 50) {
            return "You can spend a little more, have fun!"
        } else {
            return "You are spending a solid amount."
        }
      }

      return (
        <div>
            <h1>REC PAGE</h1>
            <div>
                <Link to='../pages/data'>
                    <button className="button-route">Menu</button>
                </Link>
              <h2>Total amount spent: {spent}</h2>
              <h3>Suggestion: {recomendationSpent()}</h3>
              <h3>
                Total amount of items selected: {getTotalItems()}
              </h3>
              <h3>Distribution recommendation: {getDistributionRecommendation()}</h3>
            </div>
        </div>
      )

}


export default RecomendationPage;
