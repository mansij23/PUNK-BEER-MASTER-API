import React from 'react';
import { useSelector } from 'react-redux';
import BeerCard from '../../components/BeerCard.js/BeerCard';
import './Favourites.css';

const Favourites = () => {

    const favData = useSelector(state => state.favState.favData);

    return (
        <div id='fav'>

            <div className="myFavs">My Favourites</div>

            {favData.length ?
                <div className='beerContainer' >
                    {favData.map((items) =>
                        <BeerCard items={items} key={items.id} />
                    )}
                </div> :
                <h2 className="empty">Your list is empty! Why don't you add some?</h2>
            }
        </div>

    );
}

export default Favourites;