import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchBear, setBeer } from '../../redux';
import './Search.css';

const Search = () => {
    const beer = useSelector(state => state.beerState.beer);
    const dispatch = useDispatch();

    const beerClick = (e) => {
        e.preventDefault();
        dispatch(searchBear(beer));
    }

    return (
        <form id="mainSearch" className='beerSearch' onSubmit={beerClick}>

            <input className="beerInput" type="text" placeholder="Search for beer"
                value={beer}
                onChange={(e) => dispatch(setBeer(e.target.value))}
            />

            <button type="submit" id="beerSearchBtn">
                <i className="fa fa-search"></i><span>Search</span>
            </button>
        </form>
    );
}

export default Search;