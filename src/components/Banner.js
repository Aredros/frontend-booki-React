import React from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../Booki.png';


//COMPONENT SEARCHBAR THAT WILL BE USED IN THE BANNER


//Actual Banner
const Banner = () => {
  return (
    <div className="banner">
      <header className='header'>
        <Link to="/">
        <img className='header-logo' src={logo} alt="logo de Booki" />
        </Link>
        <nav className='header-nav'>
          <ul>     
            <NavLink to="/" className="active-banner">
              <li className='header-nav-links'>Hébergement</li>
            </NavLink>
            <NavLink to="/" className="active-banner">
              <li className='header-nav-links'>Activités</li>
            </NavLink>
          </ul>
        </nav>
      </header>
      <h1 className='banner-title big-title'>Trouver votre hébergement pour des vacances de rêve</h1>
		  <p className='banner-subtitle'>En plein centre ville ou en pleine nature</p>

    </div>
  );
}

export default Banner;