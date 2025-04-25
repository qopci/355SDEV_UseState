import { useState } from "react";

const RestaurantForm = ({ addRestaurant }) => {
  // initializing form state for name, cuisine, and rating
  const [formData, setFormData] = useState({
    name: "",
    cuisine: "",
    rating: ""
  });

  // handling input changes and updating state
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newRestaurant = {
      id: Date.now(),
      name: formData.name,
      cuisine: formData.cuisine,
      rating: parseFloat(formData.rating),
      menu: [], // empty array to prevent breaking menu rendering
      hours: {} // empty object to prevent breaking hours rendering
    };

    addRestaurant(newRestaurant);
    setFormData({ name: "", cuisine: "", rating: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Restaurant Name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="cuisine"
        placeholder="Cuisine"
        value={formData.cuisine}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        step="0.1" 
        name="rating"
        placeholder="Rating"
        value={formData.rating}
        onChange={handleChange}
        required
      />
      <button type="submit">Add Restaurant</button>
    </form>
  );
};

export default RestaurantForm;
