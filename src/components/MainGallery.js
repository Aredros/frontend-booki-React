import React from "react";
import HousesCard from "./HousesCard";


function MainGallery ({MainCards}){
    return(
        <div className="main-hebergements">
            <h2 className="hebergements-title big-title">Hébergements à Marseille</h2>
            <section className="main-houses">
               {//we write an interrogation sign after the name of the variable to check if it exists (for timing issues)
               MainCards?.map((houseElement) =>(
                    <HousesCard key={houseElement.id} houseElement={houseElement} />
               ))
               }
            </section>
        </div>
    )
}

export default MainGallery;