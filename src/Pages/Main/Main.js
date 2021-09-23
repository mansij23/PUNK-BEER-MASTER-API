import React, { useEffect, useState } from 'react';
import InfiniteScroll from "react-infinite-scroll-component";
import Search from '../../components/Search/Search';
import { useDispatch, useSelector } from 'react-redux';
import { fetchData, searchBear } from '../../redux';
import './Main.css';
import BeerCard from '../../components/BeerCard.js/BeerCard';


const Main = () => {
    const beerData = useSelector(state => state.beerState.beerData);
    const isFetching = useSelector(state => state.beerState.isFetching);
    const fetchError = useSelector(state => state.beerState.fetchError);
    const searchError = useSelector(state => state.beerState.searchError);
    const beer = useSelector(state => state.beerState.beer);

    const dispatch = useDispatch();
    const [pageCount, setPageCount] = useState(2);

    useEffect(() => {
        if (!isFetching && !beerData.length && !beer) {
            dispatch(fetchData(1));
        }
    }, [isFetching, beerData, beer, dispatch]);


    useEffect(() => {
        const mayBeHandlor = (event) => {
            if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
                document.getElementById("mainSearch").style.display = "none";
                document.getElementById("headSearch").style.display = "flex";
            } else {
                document.getElementById("headSearch").style.display = "none";
                document.getElementById("mainSearch").style.display = "flex";
            }
        }

        document.addEventListener('scroll', mayBeHandlor)
        return () => document.removeEventListener('scroll', mayBeHandlor);
    });

    const scroll = () => {
        if (!isFetching && !fetchError) {
            dispatch(fetchData(pageCount));
            setPageCount(pageCount + 1);
        }
    }
   console.log(pageCount) 
    const retry = () => {
        if (searchError && beer) {
            dispatch(searchBear(beer));
        }
        else {
            dispatch(fetchData(pageCount - 1));
        }
    }

    return (

        <div id='main'>
            <Search />

            <InfiniteScroll dataLength={beerData.length} next={scroll} hasMore={true}>
                {beerData.length ?
                    <div className='beerContainer' >
                        {beerData.map((items) =>
                            <BeerCard items={items} key={items.id} />
                        )}
                    </div> :
                    null
                }
            </InfiniteScroll>

            <div>
                {isFetching ?
                    <h1 className='loading'>Loading...</h1> :

                    fetchError ?
                        <>
                            <h1 className="error">Something went wrong :(</h1>
                            <h3 className="errorDesc">It seems to be: "{fetchError}"</h3>
                            <button onClick={retry}>Retry</button>
                        </> :

                        !beerData.length ?
                            <h1 className="noResult">Sorry, No result found :(</h1> :
                            null

                }
            </div>
        </div>
    );
}

export default Main;