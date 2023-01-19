import React from "react";

const ActivityCard = ({activityElement}) => {
    return(
        <article className={`activity-card activity-${activityElement.id}`}>
        <div className="activity-card_photo">
                <img src={activityElement.picture} alt={activityElement.picture} />
        </div>
        <div className="activity-card_info">
            <h3 className="activity-card_title">{activityElement.name}</h3>
        </div>
    </article>
    )
}

export default ActivityCard;