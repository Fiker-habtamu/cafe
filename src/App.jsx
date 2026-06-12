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

function App() {
  return (
    <>
      <Routes>
        <Route element={<SharedComponent />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/foods" element={<FoodCard />} />
          <Route path="/drinks" element={<DrinksCard />} />
          <Route path="*" element={<Four04 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
