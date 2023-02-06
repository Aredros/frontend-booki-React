import React, { useEffect, useState } from 'react';
import logo from '../Booki.png';


const ChargingBanner = () => {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        setTimeout(() => 
          setIsVisible(false), 10000);
      }, []);



      return isVisible ? (
        <div className="charging-banner">
          <div className="charging-banner__box">
            <div className="lds-ring">
              <div></div>
              <div></div>
              <div></div>
              <div></div>
            </div>
            <img src={logo} alt="logo de Booki" />
          </div>
        </div>
      ) : null;
    };

export default ChargingBanner;