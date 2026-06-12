import React from "react";
import Header from "../../Header/Header";
import MenuSection from "../../menuSection/MenuSection";
import About from "../../About/About";
import VisitUs from "../../VisitUs/VisitUs";

export default function HomePage() {
  return (
    <>
      <Header />
      <MenuSection />
      <About />
      <VisitUs />
    </>
  );
}
