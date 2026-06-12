import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleDrink() {
  let { id } = useParams();
  useEffect(() => {

  }, []);
  return (
    <>
      <div className="food_card_container flex justify-center items-center">
		<div>
        <h1 className="text-4xl text-center">{id} page</h1>
		<p>this page is under development</p>
		</div>

      </div>
    </>
  );
}

export default SingleDrink;
