import {React } from "react";
import HousesCard from "./HousesCard";

//TO WORK : I want to do this using the State so it will change without reloading the page

function MainGallery ({MainCards}){
    const showCards = MainCards.slice(0,6);
   

    return(
        <div className="main-hebergements">
            <h2 className="hebergements-title big-title">Hébergements disponibles</h2>
            <section className="main-houses">
               {//we write an interrogation sign after the name of the variable to check if it exists (for timing issues)
               showCards?.map((houseElement, index) =>(
                    <HousesCard key={index} houseElement={houseElement} />
               ))
               }
            </section>
        </div>
    )
}

export default MainGallery;