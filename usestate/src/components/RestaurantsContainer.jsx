import Restaurant from "./Restaurant";

function RestaurantsContainer(props) {
  return (
    <div className="restaurantContainer">
      {props.restaurants.map((restaurant) => (
        <Restaurant key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
}

export default RestaurantsContainer;
