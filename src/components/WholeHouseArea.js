import React from 'react';
import MainGallery from './MainGallery';
import SideGallery from './SideGallery';
import housesData from '../data/hebergements.json';

function WholeHouseArea({index}) {
  const popularHouses = housesData.filter((house) => house.popular === true);
  const unpopularHouses = housesData.filter((house) => house.popular === false);

  return (
    <div className='housing-area'>
        <MainGallery MainCards={unpopularHouses} />
        <SideGallery  SideCards={popularHouses} />
    </div>
  );
}

export default WholeHouseArea;