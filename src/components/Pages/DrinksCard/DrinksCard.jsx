import React, { useEffect, useState } from "react";
import "./DrinksCard.css";
import { Link } from "react-router-dom";

export default function DrinksCard() {
  const [drinks, setDrinks] = useState([]);
  useEffect(() => {
    fetch("./drinks.json")
      .then((response) => response.json())
      .then((data) => {
        setDrinks(data.drinks);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <div className="w-full px-5 drinks_lists_container pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12  lg:gap-y-6 lg:gap-x-6 md:gap-x-6 justify-items-center">
        {drinks.map((each_drink) => {
          // Destructure directly from each_drink item
          const { drink_id, drink_name, drink_url, drink_brief_description, drink_price,drink_image_url,drink_description } = each_drink;
          return (
        <div key={drink_id} className="each_drink w-full ">
          <div className="drinks_img_div h-[40% ]">
            <img
              src={drink_image_url}
              alt=""
            />
          </div>
          <div className="drink_contents mt-5 h-fit">
            <h2 className="text-2xl font-bold uppercase">{drink_name}</h2>
            <p className="text-[#4d4747] h-24">{drink_brief_description}</p>
            <p className="text-[20px] mb-5 font-semibold">ETB: {drink_price}Br</p>
            <Link
              to={`/drinks/${drink_url}`}
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
