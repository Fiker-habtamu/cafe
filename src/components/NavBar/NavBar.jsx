import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./NavBar.css";
import { Link } from "react-router-dom";

const scrollHeight = 70;
const resizeWidth = 700;

function NavBar() {
  const [scroll, setScroll] = useState(false);
  const [shrink, setSize] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // ✅ replaces broken isClicked const

  useEffect(() => {
    let handleScroll = () => setScroll(() => window.scrollY > scrollHeight);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setSize(true);
    }else{
      setSize(false)
    }
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSize(true);
        setMenuOpen(false); // ✅ also close menu on resize to desktop
      } else {
        setSize(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <nav className={`nav_bar h-16 ${scroll ? "scroll" : ""} `}>
        <Link to={"/"} className="header_logo text-3xl font-bold max-sm:text-2xl">
          Dina's Cafe
        </Link>
        <div
          className={`section_lists flex w-[300px ] justify-between ${shrink ? "hidden!" : ""}`}
        >
          <Link to={"/"} className="flex font-semibold justify-between">
            Home
          </Link>
          <Link to={"/menu"} className="flex font-semibold justify-between">
            Menu
          </Link>
          <Link to={"/About"} className="flex font-semibold justify-between">
            About
          </Link>
          <Link to={"Contact"} className="flex font-semibold justify-between">
            Contact
          </Link>
        </div>

        {/* hamburger menu */}
        <div
          className={`hamburger ${shrink ? "" : "hidden!"}`}
          onClick={() =>
            menuOpen ? setMenuOpen(() => false) : setMenuOpen(() => true)
          } // ✅ toggles menuOpen state
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>

      {/* mobile dropdown */}
      <div
        className={`mb_section_lists w-[300px ]  ${menuOpen ? "" : "hidden"} ${menuOpen ? "open" : ""}`}
      >
        {" "}
        {/* ✅ uses menuOpen state */}
        <Link to={"/"} className="flex font-semibold justify-between">
          Home
        </Link>
        <Link to={"/menu"} className="flex font-semibold justify-between">
          Menu
        </Link>
        <Link to={"/About"} className="flex font-semibold justify-between">
          About
        </Link>
        <Link to={"Contact"} className="flex font-semibold justify-between">
          Contact
        </Link>
      </div>
    </>
  );
}

export default NavBar;
