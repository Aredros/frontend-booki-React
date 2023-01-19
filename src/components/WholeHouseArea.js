import {React, useState } from 'react';

import MainGallery from './MainGallery';
import SideGallery from './SideGallery';

import Filter from './Filter';

import housesData from '../data/hebergements.json';

function WholeHouseArea() {
  
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedValue, setSelectedValue] = useState(''); 

//This function will be called when the user select a city in the select and will change the selectedValue variable
function handleValueChange(event) {
  setSelectedValue(event.target.value);
}

  //This function will be called when the user click on the search button, it will get the value selected and stored in the state to select a city 
  const handleSelectCity = (event) => {
    const select = selectedValue;
    if (!select) return;
    setSelectedCity(select);
}


  //Popular houses that will not constantly change
  const popularHouses = housesData.filter((house) => house.popular === true);
  //Unpopular houses that will constantly change with filtering when the user select a city
  const unpopularHouses = selectedCity === '' ? housesData.filter((house) => house.popular === false) : housesData.filter((house) => house.popular === false && house.city === selectedCity);
  const unpopularToShow = unpopularHouses.slice(0,6);


  return (
    <div className='housing-area'>
        <div className='bar-n-filter'>
        <section className='searchbar'>
          <div className="searchbar-icone">
              <i className="fas fa-map-marker-alt"></i>
          </div>
          <select className='searchbar-input' value={selectedValue} onChange={handleValueChange} name="cities" id="cities">
              <option value="Marseille">Marseille</option>
              <option value="Paris">Paris</option>
              <option value="Toulouse">Toulouse</option>
              <option value="Montpellier">Montpellier</option>
          </select>
          <div className="searchbar-button" onClick={handleSelectCity}>
              <p>GO</p>
              <i className="fas fa-search"></i>
          </div>
        </section>
        <Filter />
        </div>
        <MainGallery MainCards={unpopularToShow} />
        <SideGallery  SideCards={popularHouses} />
    </div>
  );
}

export default WholeHouseArea;