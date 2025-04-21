import { useState } from "react";

function Restaurant(props) {
  // creating state variables to manage the visibility of hours and menu
  const [hours, setHours] = useState(false);
  const [menu, setMenu] = useState(false);

  // functions for toggling the visibility of restaurant hours and menu
  const handleHours = () => {
    setHours((prev) => !prev);
  };
  const handleMenu = () => {
    setMenu((prev) => !prev);
  };

  return (
    <div className="restaurant">
      <img src={props.restaurant.image} alt={props.name} />
      <h2>{props.restaurant.name}</h2>
      <ul>
        <li>{props.restaurant.address}</li>
        <li>{props.restaurant.phone}</li>
        <li>{props.restaurant.cuisine}</li>
        <li>{props.restaurant.rating}</li>
      </ul>
      {/* buttons to toggle the visibility of restaurant hours and menu */}
      <button onClick={handleHours}>Hours</button>
      <button onClick={handleMenu}>Menu</button>
      {/* rendering the menu if the menu state is true */}
      {menu && (
        <ul>
          {props.restaurant.menu.map((menuItem, index) => (
            <li key={index}>{`${menuItem.item} $${menuItem.price}`}</li>
          ))}
        </ul>
      )}
      {/* rendering the hours if the hours state is true */}
      {hours && (
        <ul>
          {Object.entries(props.restaurant.hours).map(([day, time]) => (
            <li key={day}>
              {/* capitalizing the first letter of the day and displaying the hours */}
              <strong>{day.charAt(0).toUpperCase() + day.slice(1)}:</strong>{" "}
              {time}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Restaurant;
