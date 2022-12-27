import React from "react";
import activityData from '../data/activites.json';
import ActivityCard from "./ActivityCard";

const ActivityGallery = () => {
    return(
        <div className="Activity-gallery">
        <h2 className="activites-title big-title">Activités à Marseille</h2>
        <section className="Activity-gallery_area">
           {//we write an interrogation sign after the name of the variable to check if it exists (for timing issues)
           activityData?.map((activityElement) =>(
                <ActivityCard key={activityElement.id} activityElement={activityElement} />
           ))
           }
        </section>
    </div>
    )
}

export default ActivityGallery;