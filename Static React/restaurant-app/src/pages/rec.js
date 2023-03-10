import React from 'react';
import {useHistory} from "react-router-dom";
import { spent } from "../components/menu.js";


const RecomendationPage = ({spent, items}) => {
    const getAllItems = () => {
        const countTotal = items.reduce((acc, curr) => {
            return acc + curr.count;
        }, 0);
        return countTotal;
    }

    const getTotalItems = () => {
      
    }

    const getDistributionRecommendation = () => {
        const totalCount = getTotalItems();
        const bobaCount = items.find((item) => item.category === 'boba').count;
        const coffeeCount = items.find((item) => item.category === 'coffee').count;
        const sweetCount = items.find((item) => item.category === 'sweet').count;
    
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
            <h2>{spent}</h2>
        </div>
      )

}


export default RecomendationPage;
