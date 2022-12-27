import React from 'react';
import { Link, NavLink } from "react-router-dom";

import Filter from './Filter';



const Banner = () => {
  return (
    <div className="banner">
      <header className='header'>
        <Link to="/">
        <img className='header-logo' src="/assets/images/Booki.png" alt="logo de Booki" />
        </Link>
        <nav className='header-nav'>
          <ul>     
            <NavLink to="/" activeClassName="active-banner">
              <li className='header-nav-links'>Hébergement</li>
            </NavLink>
            <NavLink to="/" activeClassName="active-banner">
              <li className='header-nav-links'>Activités</li>
            </NavLink>
          </ul>
        </nav>
      </header>
      <h1 className='banner-title big-title'>Trouver votre hébergement pour des vacances de rêve</h1>
		  <p className='banner-subtitle'>En plein centre ville ou en pleine nature</p>
      <section className='searchbar'>
        <div className="searchbar-icone">
          <i className="fas fa-map-marker-alt"></i>
        </div>
        <div className="searchbar-input">
				  <input type="text" placeholder="Marseille, France" id="Ville"/>
			  </div>
        <Link to="/">
          <div className="searchbar-button">
            <p>Rechercher</p>
            <i className="fas fa-search"></i>
          </div>
        </Link>
      </section>
      <Filter />
    </div>
  );
}

export default Banner;