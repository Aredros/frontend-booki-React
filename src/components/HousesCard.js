import React from "react";

const HousesCard = ({houseElement, index}) => {

    return(
        <article className="house-card">
            <div className="house-card_photo">
                    <img src={houseElement.picture} alt="Auberge La Cannebière" />
            </div>
            <div className="house-card_info">
                <h3 className="house-card_title">{houseElement.name}</h3>
                <p className="house-card_description">Nuit à partir de <strong>{houseElement.price}€</strong></p>
                <div className="house-card_info_star-area">
                    <RankingCounter key={`card-counter-${index}`} ranking={houseElement.ranking} />
                </div>
            </div>
        </article>


    )
}

function RankingCounter({ranking, index}){
    const rank = ranking;
    const stars = [];
    for(let i = 1; i <= 5; i++){
        stars.push(            
        <div key={`${index}-${i}`} className={i <= rank ? "star_100" : "star_0" }>
            <i className="fas fa-star"></i>
        </div>
        )
    };

    return(
        <div id="RankingCounter">
            {stars}
        </div>
    )
}

export default HousesCard;