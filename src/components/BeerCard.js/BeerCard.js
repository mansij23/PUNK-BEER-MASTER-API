import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFav } from '../../redux';
import './BeerCard.css';

const BeerCard = (props) => {

    const favData = useSelector(state => state.favState.favData);
    const dispatch = useDispatch();
    const { image_url: img, name, description, id } = props.items;

    const toggleFavorite = (item) => {
        dispatch(addToFav(item));
    }

    return (
        <div className='beerCardOuter'>
            <div className='beerCardIneer'>
                <label>
                    <input
                        type="checkbox"
                        label="favorite"
                        onClick={() => toggleFavorite(props.items)}
                    />
                    {favData.some(item => item.id === id) ?
                        <i className="fa fa-star  fa-lg" aria-hidden="true"></i> :
                        <i className="fa fa-star-o  fa-lg" aria-hidden="true"></i>
                    }
                </label>

                <div className='beerDataContainer'>

                    <div className='beerImgArea'>
                        <img src={img} alt="Beer Img" />
                    </div>
                    <div className='beerData'>
                        <span className='beerName'>{name}</span>
                        <br />
                        <span className='beerDesc'>{description}</span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default BeerCard;