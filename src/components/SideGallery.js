import React from "react";
import HousesCard from "./HousesCard";

function SideGallery ({SideCards}){
    const justSixSide = SideCards.slice(0,3);

    return(
        <div className="side-hebergements">
            <div className="side-hebergements-heading">
                <h2 className="side-hebergements-heading big-title">Les plus populaires</h2>
                <i></i>
            </div>
            <section className="side-houses">
               {//we write an interrogation sign after the name of the variable to check if it exists (for timing issues)
               justSixSide?.map((houseElement) =>(
                    <HousesCard key={houseElement.id} houseElement={houseElement} />
               ))
               }
            </section>
        </div>
    )
}

export default SideGallery;