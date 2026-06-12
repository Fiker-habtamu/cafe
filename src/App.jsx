import "./App.css";
import About from "./components/About/About";
import FoodCard from "./components/foodCard/FoodCard";
import Header from "./components/Header/Header";
import MenuSection from "./components/menuSection/MenuSection";
import NavBar from "./components/NavBar/NavBar";
import VisitUs from "./components/VisitUs/VisitUs";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <MenuSection/>
      <About/>
      <VisitUs/>
    </>
  );
}

export default App;
