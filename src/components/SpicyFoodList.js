import React, { useState } from "react";
import { spicyFoods, getNewRandomSpicyFood } from "../data";

function SpicyFoodList() {
  const [foods, setFoods] = useState(spicyFoods);
  const [filterBy, setFilterBy] = useState("All")

  function handleAddFood() {
    const newFood = getNewRandomSpicyFood();
    // console.log(newFood);
    const newFoodArray = [...foods, newFood];
    setFoods(newFoodArray);
  }

  function handleLiClick(id) {
    const newFoodArray = foods.filter((food) => food.id !== id);
    setFoods(newFoodArray);
  } 
  function handleFilterChange(event) {
    setFilterBy(event.target.value);
  }
  

  const foodsToDisplay = foods.filter((food) => {
    if (filterBy === "All") {
      return true;
    } else {
      return food.cuisine === filterBy;
    }
  })
  

  const foodList = foodsToDisplay.map((food) => (
    <li key={food.id} onClick={() => handleLiClick(food.id)}>
      {food.name} | Heat: {food.heatLevel} | Cuisine: {food.cuisine}
    </li>
  ));

  return (
    <div>
      <button onClick={handleAddFood}>Add New Food</button>
      <ul>{foodList}</ul>
      
    </div>
  );
}

export default SpicyFoodList;
