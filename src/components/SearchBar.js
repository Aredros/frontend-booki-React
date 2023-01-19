import {React, useState } from "react";
//Not in USE anymore

const SearchBar = () => {
    const [selectedCity, setSelectedCity] = useState('');

    const handleSelectCity = (event) => {
        setSelectedCity(event.target.value);
    }

    const updateQueryString = (value) => {
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('option', value);
        const newRelativePathQuery = `${window.location.pathname}?${searchParams.toString()}`;
        window.history.pushState(null, '', newRelativePathQuery);
    }

    return(
        <section className='searchbar'>
            <div className="searchbar-icone">
                <i className="fas fa-map-marker-alt"></i>
            </div>
            <select className='searchbar-input' value={selectedCity} onChange={handleSelectCity} name="cities" id="cities">
                <option value="Marseille">Marseille</option>
                <option value="Paris">Paris</option>
                <option value="Toulouse">Toulouse</option>
                <option value="Montpellier">Montpellier</option>
            </select>
            <div className="searchbar-button" onClick={() => updateQueryString(selectedCity)}>
                <p>Rechercher</p>
                <i className="fas fa-search"></i>
            </div>
      </section>
    )
}

export default SearchBar;
