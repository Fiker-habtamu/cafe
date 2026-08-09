import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../SingleFood/SingleFood.css";

function SingleFood() {
  const [singleFood, setSingleFood] = useState(null);
  let { id } = useParams();
  console.log(id)
  useEffect(() => {
	fetch("/drinks.json")
	.then((response)=>response.json()
	.then((data)=>{
	  setSingleFood(data.foods.find((each)=> each.food_url == id))
	})
  )
  }, []);


  if (!singleFood) {
	return <div className="text-white text-center mt-10">Loading drink...</div>;
  } else {
	const {food_id,food_name,food_url,food_brief_description,food_price,food_image_url,food_description} = singleFood
	return (
	  <>
		<div className="food_card_container flex justify-center items-center h-fit! ">
		  <div className="singleDrinks_content w-96 p-10 lg:w-10/12! lg:flex lg:justify-between">
			<div className="single_img lg:w-2/5!">
			  <img
				src={food_image_url}
				alt=""
				className="lg:h-500px! lg:w-600px!"
			  />
			</div>
			<div className="text_contents mt-5 h-fit lg:w-2/5!">
			  <h2 className="text-2xl font-bold uppercase h-15 mb-2">{food_name}</h2>
			  <p className="text-[#4d4747] h-15 text-[20px ]  mb-2">{food_brief_description}</p>
			  <p className="text-[20px] mb-5 font-semibold ">ETB: {food_price}Br</p>
			  <div>
				<div className="flex justify-center items-center">
				  <h3 className="text-3xl font-semibold text-black text-shadow-none border-b-2 pb-3">
					Detail
				  </h3>
				</div>
				<p className="text-2xl font-medium text-center">
				 {food_description}
				</p>
			  </div>
			</div>
		  </div>
		</div>
	  </>
	);
  }
}

export default SingleFood;
