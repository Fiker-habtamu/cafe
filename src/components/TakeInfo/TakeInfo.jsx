import { useState } from "react";
import axios from "axios";

export default function TakeInfo() {
  const [drink, setDrink] = useState({
    name: "",
    drink_url: "",
    image_url: "",
    price: "",
    short_description: "",
    full_description: "",
  });

  const handleChange = (e) => {
    setDrink({
      ...drink,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(drink);

    // Send to your Express API here
    axios.post("http://localhost:3000/api/drinks", drink);
    alert("the information is successfully send to the database");
    setDrink({
      name: "",
      drink_url: "",
      image_url: "",
      price: "",
      short_description: "",
      full_description: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#FFE8D6] flex items-center justify-center p-8">
      <div className="w-full max-w-3xl bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-[#40916C] mb-8">
          Add New Drink
        </h1>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Drink Name */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Drink Name
            </label>
            <input
              type="text"
              name="name"
              value={drink.name}
              onChange={handleChange}
              placeholder="Cappuccino"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#40916C]"
            />
          </div>

          {/* URL Slug */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Drink URL
            </label>
            <input
              type="text"
              name="drink_url"
              value={drink.drink_url}
              onChange={handleChange}
              placeholder="cappuccino"
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#40916C]"
            />
          </div>

          {/* Image URL */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Image URL
            </label>
            <input
              type="text"
              name="image_url"
              value={drink.image_url}
              onChange={handleChange}
              placeholder="https://..."
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#40916C]"
            />
          </div>

          {/* Category + Price */}
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <label className="block mb-2 font-medium text-gray-700">
                Price
              </label>

              <input
                type="number"
                name="price"
                value={drink.price}
                onChange={handleChange}
                placeholder="120"
                className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#40916C]"
              />
            </div>
          </div>

          {/* Short Description */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Short Description
            </label>

            <textarea
              rows="3"
              name="short_description"
              value={drink.short_description}
              onChange={handleChange}
              placeholder="Brief description..."
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#40916C]"
            />
          </div>

          {/* Full Description */}
          <div>
            <label className="block mb-2 font-medium text-gray-700">
              Full Description
            </label>

            <textarea
              rows="6"
              name="full_description"
              value={drink.full_description}
              onChange={handleChange}
              placeholder="Detailed description..."
              className="w-full border rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-[#40916C]"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#40916C] text-white py-4 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Add Drink
          </button>
        </form>
      </div>
    </div>
  );
}
