import React from 'react'
import './NavBar.css'

 function NavBar() {
	  const navbar    = document.getElementById('navbar');
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
 
    /* Scroll → toggle .scrolled */
    const SCROLL_THRESHOLD = 60;
 
    function onScroll() {
      if (window.scrollY > SCROLL_THRESHOLD) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
 
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
 
    /* Hamburger toggle */
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });
 
    /* Close mobile menu when a link is clicked */
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
      });
    });
  return (
	<>
	    <nav class="navbar" id="navbar">
    <a href="#" class="navbar__logo">Orbit<span>.</span></a>
 
    <ul class="navbar__links">
      <li><a href="#" class="active">Home</a></li>
      <li><a href="#">Features</a></li>
      <li><a href="#">Pricing</a></li>
      <li><a href="#">About</a></li>
      <li><a href="#">Blog</a></li>
    </ul>
 
    <a href="#" class="navbar__cta">Get started</a>
 
    <button class="navbar__hamburger" id="hamburger" aria-label="Toggle menu">
      <span></span>
      <span></span>
      <span></span>
    </button>
 
    <div class="navbar__mobile-menu" id="mobileMenu">
      <a href="#">Home</a>
      <a href="#">Features</a>
      <a href="#">Pricing</a>
      <a href="#">About</a>
      <a href="#">Blog</a>
      <a href="#" class="navbar__cta">Get started</a>
    </div>
  </nav>
	</>
  )
}

export default NavBar;