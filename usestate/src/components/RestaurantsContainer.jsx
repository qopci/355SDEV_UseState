import Restaurant from "./Restaurant";

function RestaurantsContainer(props) {
  return (
    <div className="restaurantContainer">
      {/* rendering a Restaurant component for each item in the restaurants array. */}
      {props.restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
