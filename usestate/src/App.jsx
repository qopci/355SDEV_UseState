import "./App.css";
import { useState } from "react";
import { restaurants } from "./data/data.js"; 
import RestaurantsContainer from "./components/RestaurantsContainer.jsx"; 
import RestaurantForm from "./components/RestaurantForm.jsx"; 

function App() {
  const [restaurantState, setRestaurants] = useState([...restaurants]);

  // function for adding a new restaurant
  const addRestaurant = (newRestaurant) => {
    // using setRestaurants to update the state dynamically
    setRestaurants((prevState) => [...prevState, newRestaurant]);
  };

  return (
    <div className="App">
      <RestaurantsContainer restaurants={restaurantState} />
      <RestaurantForm addRestaurant={addRestaurant} />
    </div>
  );
}

export default App;
