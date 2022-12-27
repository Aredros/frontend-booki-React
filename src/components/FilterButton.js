import React from 'react';

const FilterButton = ({IndivFilter}) => {
    return (
        <div className="filter-element">
            <div className="filter-element-icone">
                <i className={`fas ${IndivFilter.icon}`}></i>
            </div>
            <div className="filter-element-title">	
                <p>{IndivFilter.title}</p>
            </div>
        </div>
    );
}

export default FilterButton;