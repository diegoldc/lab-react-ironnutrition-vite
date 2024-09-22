import { useState } from "react";
import "./App.css";
import foodsJson from "./foods.json";
import FoodBox from "./components/FoodBox";

function App() {
  const [food, setFood] = useState(foodsJson);

  const handleDelete = (id) => {
    const filteredFoods = food.filter((eachFood) => {
      return eachFood.id !== id
    })
    setFood(filteredFoods)
  }

  return (
    <div className="App">
      <h1>LAB | React IronNutrition</h1>

      <FoodBox
        food={food}
        handleDelete={handleDelete}
      />
    </div>
  );
}

export default App;
