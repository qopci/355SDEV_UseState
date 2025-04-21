import RestaurantsContainer from "./components/RestaurantsContainer";
import { restaurants } from "./data/data.js"; 
import { useState } from "react"; 
import "./App.css";

function App() {
  // creating state using the restaurants array
  const [restaurantState, setRestaurants] = useState([...restaurants]);

  return (
    <div className="App">
      {/* passing down state as props */}
      <RestaurantsContainer restaurants={restaurantState} />
    </div>
  );
}

export default App;
