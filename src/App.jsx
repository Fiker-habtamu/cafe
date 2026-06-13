import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import MenuSection from "./components/menuSection/MenuSection";
import NavBar from "./components/NavBar/NavBar";
import HomePage from "./components/Pages/HomePage/HomePage";
import VisitUs from "./components/VisitUs/VisitUs";
import SharedComponent from "./components/Shared/SharedComponent";
import Four04 from "./components/Pages/Four04/Four04";
import FoodCard from "./components/Pages/foodCard/FoodCard";
import DrinksCard from "./components/Pages/DrinksCard/DrinksCard";
import SingleDrink from "./components/Pages/SingleDrink/SingleDrink";
import { useRef } from "react";

function App() {
  let visitUs = useRef(null);
  let homeSection = useRef(null);
  let aboutSection = useRef(null);
  let menuSection = useRef(null);
  function goToVisitUs() {
    visitUs.current?.scrollIntoView({ behavior: "smooth" });
    console.log("it is going to about section ");
  }
  function goToHome() {
    homeSection.current?.scrollIntoView({ behavior: "smooth" });
  }
  function goToAbout() {
    aboutSection.current?.scrollIntoView({ behavior: "smooth" });
  }
  function goToMenu() {
    menuSection.current?.scrollIntoView({ behavior: "smooth" });
    console.log("go to menu section clicked");
  }
  return (
    <>
      <Routes>
        <Route
          element={
            <SharedComponent
              onToVisitUs={goToVisitUs}
              visitReference={visitUs}
              onToHome={goToHome}
              homeReference={homeSection}
              onToMenu={goToMenu}
              menuReference={menuSection}
              onToAbout={goToAbout}
              aboutReference={aboutSection}
            />
          }
          x
        >
          <Route
            path="/"
            element={
              <HomePage
                onToVisitUs={goToVisitUs}
                visitReference={visitUs}
                onToMenu={goToMenu}
                menuReference={menuSection}
                onToAbout={goToAbout}
                aboutReference={aboutSection}
                onToHome={goToHome}
                homeReference={homeSection}
              />
            }
          />
          <Route path="/foods" element={<FoodCard />} />
          <Route path="/drinks" element={<DrinksCard />} />
          <Route path="/drinks/:id" element={<SingleDrink />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
