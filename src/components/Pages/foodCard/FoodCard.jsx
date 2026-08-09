import React from "react";
import "../foodCard/FoodCard.css";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function FoodCard() {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    fetch("./drinks.json")
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data.foods);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="w-full px-5 drinks_lists_container pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12  lg:gap-y-6 lg:gap-x-6 md:gap-x-6 justify-items-center">
        {drinks.map((each_food) => {
          // Destructure directly from each_drink item
          const { food_id, food_name, food_url, food_brief_description, food_price,food_image_url,food_description } = each_food;
          return (
        <div key={food_id} className="each_drink w-full ">
          <div className="drinks_img_div h-[40% ]">
            <img
              src={food_image_url}
              alt=""
            />
          </div>
          <div className="drink_contents mt-5 h-fit">
            <h2 className="text-2xl font-bold uppercase">{food_name}</h2>
            <p className="text-[#4d4747] h-24">{food_brief_description}</p>
            <p className="text-[20px] mb-5 font-semibold">ETB: {food_price}Br</p>
            <Link
              to={`/foods/${food_url}`}
              className="w-fit h-fit p-2 font-semibold text-[20px] "
            >
              See Detail
            </Link>
          </div>
        </div>
          )
        })}

      </div>
    </>
  );
}
