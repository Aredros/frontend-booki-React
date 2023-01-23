import React, { useEffect } from 'react';
import { Link, NavLink } from "react-router-dom";
import logo from '../Booki.png';
import eyeImg from '../eye6.png';


//Actual Banner
const Banner = () => {
  useEffect(() => {
    const handleMouseMove = (e) => {
      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const anchor = document.querySelector('#anchor');
      if (!anchor) return;

      const eyes = document.querySelectorAll('.eye');

      eyes.forEach(eye => {
        const eyeRect = eye.getBoundingClientRect();
        const eyeX = eyeRect.left + eyeRect.width / 2;
        const eyeY = eyeRect.top + eyeRect.height / 2;

        const angleDeg = angle(eyeX, eyeY, mouseX, mouseY);
        eye.style.transform = `rotate(${angleDeg}deg)`;
      });
    }

    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const angle = (x1, y1, x2, y2) => {
    const dx = x2 - x1;
    const dy = y2 - y1;
    const rad = Math.atan2(dy, dx);
    return rad * 180 / Math.PI;
  }



  return (
    <div className="banner">
      <header className='header'>
        <Link className='main-logo-area' to="/">
        <img className='header-logo' src={logo} alt="logo de Booki" />
        <div className='eyes'>
          <img className='eye eye-1' src={eyeImg} alt="eye book"/>
          <img className='eye eye-2' src={eyeImg} alt="eye book"/>
        </div>
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