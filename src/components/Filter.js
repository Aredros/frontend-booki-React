import React from 'react';
import FilterButton from './FilterButton';
import filterData from '../data/filters.json';

const Filter = () => {
    return(
        <div id="filters">
            <div className="filters-main-title">
                <p>Filtres</p>
            </div>
            <div className="filters-box_filters">
                {filterData.map((elementF)=>(
                    <FilterButton key={elementF.id} IndivFilter={elementF} />
                ))}
            </div>
            <div className="info">
                <div className="info-icone">
                    <i className="fas fa-info"></i>
                </div>
                <div className="info-txt">
                    <p>Plus de 500 logements sont disponibles dans cette ville.</p>
                </div>
            </div>
        </div>
    )
}

export default Filter;