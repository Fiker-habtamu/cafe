import React from "react";
import Header from "../../Header/Header";
import MenuSection from "../../menuSection/MenuSection";
import About from "../../About/About";
import VisitUs from "../../VisitUs/VisitUs";

export default function HomePage({onToVisitUs,visitReference,onToMenu,menuReference,onToHome,homeReference,onToAbout,aboutReference}) {
  return (
    <>
      <Header toVisitUs={onToVisitUs} toMenu={onToMenu} homeSection={homeReference}/>
      <MenuSection menuRef={menuReference}/>
      <About toMenu={onToMenu} aboutSection={aboutReference}/>
      <VisitUs visitRef={visitReference}/>
    </>
  );
}
