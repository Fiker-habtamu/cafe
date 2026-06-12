import React from "react";
import "./MenuSection.css";
import { Link } from "react-router-dom";

function MenuSection() {
  return (
    <>
      <div className="menu_container pt-7">
        <div className="menu_content">
          <div className="flex justify-center items-center">
            <h2 className="text-3xl font-bold md:text-4xl text-[#40916c]">
              HERE IS A MENU
            </h2>
          </div>
          <div className="flex flex-col gap-12 md:flex-row md:h-fit">
            {/* food  */}
            <div className="each_card h-72 flex justify-between md:h-fit">
              <div className="menu_img flex justify-center items-center md:h-80!">
                <img
                  className="w-full h-full"
                  src="https://images.unsplash.com/photo-1484723091739-30a097e8f929?q=80&w=449&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="the image is not available"
                  srcset=""
                />
              </div>
              <div className="menu_texts p-3 ">
                <h3 className="w-full font-semibold text-[20px] mb-10 md:mb-25 text-center md:text-2xl">
                  FOOD MENU
                </h3>
                <p className="text-center md:mb-15 mb-10 md:text-[20px]">
                  Hot, crispy, juices-dripping burgers delivered straight to
                  your door
                </p>
                <div className="w-full flex justify-center items-center">
                  <Link to="/foods" className="md:text-[20px] md:font-semibold">
                    Look Food
                  </Link>
                </div>
              </div>
            </div>
            {/* drinks 1 */}
            <div className="each_card h-72 flex justify-between md:h-fit">
              <div className="menu_img flex justify-center items-center md:h-80!">
                <img
                  className="w-full h-full"
                  src="https://images.unsplash.com/photo-1738212784974-b852a8c77277?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="the image is not available"
                  srcset=""
                />
              </div>
              <div className="menu_texts p-3 ">
                <h3 className="w-full font-semibold text-[20px] mb-10 md:mb-25 text-center md:text-2xl">
                  DRINK MENU
                </h3>
                <p className="text-center md:mb-15 mb-10 md:text-[20px]">
                  Refreshing, handcrafted drinks bursting with flavor in every
                  sip
                </p>
                <div className="w-full flex justify-center items-center">
                  <Link to="/foods" className="md:text-[20px] md:font-semibold">
                      Look Drink
                  </Link>
                </div>
              </div>
            </div>
            {/* drink menu */}

          </div>
        </div>
      </div>
    </>
  );
}

export default MenuSection;
