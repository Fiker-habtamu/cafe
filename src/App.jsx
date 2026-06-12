import "./App.css";
import About from "./components/About/About";
import FoodCard from "./components/foodCard/FoodCard";
import Header from "./components/Header/Header";
import MenuSection from "./components/menuSection/MenuSection";
import NavBar from "./components/NavBar/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Header />
      <MenuSection/>
      <About/>
    </>
  );
}

export default App;
