import React from 'react';
import './Header.css';
import { NavLink } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { searchBear, setBeer } from '../../redux';

const Header = (props) => {

    const beer = useSelector(state => state.beerState.beer);
    const dispatch = useDispatch();

    const beerClick = (e) => {
        e.preventDefault();
        dispatch(searchBear(beer));
    }

    let location = props.location.pathname;

    return (
        <header className='header'>

            <div className='headerLeft'>
                <NavLink exact to="/" className='title ' >Beens Love Beer</NavLink>
            </div>

            {location === '/' ? <form id="headSearch" className='beerSearch' onSubmit={beerClick}>
                <i className="fa fa-search" aria-hidden="true"></i>
                <input className="beerInputHead" type="text" placeholder="Search for beer"
                    value={beer}
                    onChange={(e) => dispatch(setBeer(e.target.value))}
                />
            </form> :
                null
            }

            <div className='headerRight'>
                <NavLink exact to="/" className='headerLink h'>Home</NavLink>
                <NavLink to="/Favourites" className='headerLink'>Favourites</NavLink>
            </div>

        </header>
    );
}

export default withRouter(Header);