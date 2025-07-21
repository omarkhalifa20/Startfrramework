import React, { useEffect } from 'react'
import { Link, NavLink } from 'react-router'



export default function Navbar() {

  useEffect(()=>{
    let navbar = document.querySelector ("nav")
    window.addEventListener("scroll", () => {
      if (window.scrollY > 10) {
        navbar.classList.add("scrolled")
      }else {
        navbar.classList.remove("scrolled")
      }
    });
  },[]) 
  return (
    <>
    <nav className="navbar py-4 fixed-top navbar-expand-lg ">
  <div className="container">
    <Link  className="navbar-brand fs-2 fw-bold"  to="">START FRAMEWORK</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        
        <li className="nav-item px-3">
          <NavLink className="nav-link fs-6 fw-bold "  to="About">ABOUT</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink className="nav-link fs-6 fw-bold "  to="Portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="nav-item px-3">
          <NavLink className="nav-link fs-6 fw-bold " to="Contact">CONTACT</NavLink>
        </li>
        
      </ul>
      
    </div>
  </div>
</nav>


    </>
  )
}
