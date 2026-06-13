import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../NavBar/NavBar";

function SharedComponent({onToVisitUs,visitReference,onToHome,homeReference,onToMenu,menuReference,onToAbout,aboutReference}) {
  return (
    <>
      <NavBar goToHome={onToHome} goToMenu={onToMenu} goToVisitUs={onToVisitUs} goToAbout={onToAbout}/>
      <Outlet />
    </>
  );
}

export default SharedComponent;
