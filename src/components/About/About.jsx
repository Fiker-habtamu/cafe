import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export default function About({aboutSection,toMenu}) {
  return (
    <>
      <div className="About_container h-fit" ref={aboutSection}>
        {/* About us text */}
        <div className="AboutUs_title mb-15">
          <h2 className="block text-5xl text-center mb-5">
            About <span className="color_span">Us</span>
          </h2>
          <div>
            <p className="text-center text-[20px] font-light">
              That is why we built this space. Every drink we brew and every
              meal we prep is designed to give you clean, sustained energy
              without the crash.
            </p>
          </div>
        </div>
        {/* The 2 divs that contain history and Achievements */}
        <div className="history_And_Achieve sm:flex justify-between">
          {/* plan and history */}
          <div className="plan_history sm:w-[48%]">
            <div className="plan">
              <h2 className="text-2xl font-semibold text-center mb-10">
                We serve the finest coffee in Addis Ababa, crafted with passion
                and care in every cup.
              </h2>
              <p className="text-[18px] text-center">
                we create an experience that blends quality, comfort, and
                community. Whether you're starting your day or taking a
                well-deserved break, we're here to make every visit special.
              </p>
            </div>
            <div className="history text-[17px]">
              <p className="mb-5 text-center">
                What started as a simple love for great coffee has grown into a
                vibrant café where people gather to work, unwind, and share
                meaningful moments.
              </p>
              <p className="text-center">
                Today, we proudly serve premium coffee, refreshing drinks, and
                freshly prepared food while creating a welcoming space for
                everyone. Our mission remains the same: to bring people together
                through quality, comfort, and unforgettable flavors.
              </p>
            </div>
          </div>
          {/* Achievements */}
          <div className="Achieve sm:w-[48%]">
            <h1 className="w-full text-center text-4xl mb-8 font-bold">
              Our <span className="text-[#40916c] ">Achievements</span>{" "}
            </h1>
            <p className="text-2xl font-light text-[#cfc2c2] text-center mb-5">
              Numbers that speak for our commitment to excellence
            </p>
            <div className="h-fit flex flex-col gap-5">
              <div className="achieve_boxs">
                <div className="">
                  <h1>3+</h1>
                  <p className="first_about_text">Years of Excellence</p>
                  <p className="second_about_text">Serving the community</p>
                </div>
                <div className="">
                  <h1>10+</h1>
                  <p className="first_about_text">Coffee Varieties</p>
                  <p className="second_about_text">Unique blends available</p>
                </div>
              </div>
              <div className="achieve_boxs ">
                <div className="">
                  <h1>1000+</h1>
                  <p className="first_about_text">Happy Customers</p>
                  <p className="second_about_text">Satisfied coffee lovers</p>
                </div>
                <div className="">
                  <h1>24/7</h1>
                  <p className="first_about_text mb-4">Coffee Passion</p>
                  <p className="second_about_text">Always brewing</p>
                </div>
              </div>
              <Link onClick={toMenu} className="about_btn w-fit text-black p-4 rounded-2xl font-semibold">Explore Our Menu</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
