import React from "react";
import Banner from "../components/Banner";
import WholeHouseArea from "../components/WholeHouseArea";
import ActivityGallery from "../components/ActivityGallery";
import ChargingBanner from "../components/ChargingBanner";

// import data from "../data/hebergements.json";

const Home = () => {
  //  const firstObject = data.shift();

  return (
    <div className="App" id="anchor">
    <ChargingBanner />
    <Banner />
    <WholeHouseArea />
    <ActivityGallery />

    <header className="App-header">
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
        Learn React
    </header>
  </div>
  );
};

export default Home;
