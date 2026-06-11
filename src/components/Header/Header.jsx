import React from "react";
import NavBar from "../NavBar/NavBar";
import "./Header.css";

export default function Header() {
  return (
    <>
      <div className="header_container">
        {/* the background video is here */}
        <video className="video" autoPlay muted loop playsInline>
          <source
            src="https://ifs8je3oh2cjo9o5.public.blob.vercel-storage.com/My%20First%20try%20of%20%EF%BC%82Drink%20B%20roll%EF%BC%82%20ad%20%EF%BD%9C%20Unpaided%20%20%EF%BD%9C%20%20sudanese%20tornado%20dri...%20%5B6910214089428012289%5D.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* hero text */}
        <div className="hero_text text-center">
          <h1 className="text-7xl font-bold uppercase max-sm:text-5xl!"> Fuel your Daily <br /><span>Hustle.</span> </h1>
          <p className="mt-10 text-3xl font-light max-sm:text-2xl!">Experience premium coffee, carefully crafted dishes, and <br /> a space designed for relaxation, work, and <br /> connection.</p>
          {/* hero buttons  */}
          <div className="hero_btns mt-20 text-3xl font-normal max-sm:p-2! max-sm:w-80! max-sm:text-2xl! max-sm:mt-10!">
            <button color="" className="max-sm:w-36!">Order Now</button>
            <button className="max-sm:w-36!">Contact Us</button>
          </div>
        </div>
      </div>
    </>
  );
}
