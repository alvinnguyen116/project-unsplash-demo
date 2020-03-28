import React from 'react';
import searchSrc from '../../assets/search.svg';
import './search.scss';

function Search({handleKeyUp, firstSearch}) {
    let style = {
        'width': '80%'
    };
    if (firstSearch) {
        style = {
            'width': '50%'
        }
    }
    return (
        <div className="search-container" style={style}>
            <img src={searchSrc} alt="search icon"/>
            <input type="text" className="search" onKeyUp={handleKeyUp}/>
        </div>
    );
}

export default Search;
