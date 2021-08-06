import {useState, useEffect} from 'react';
import ResultCard from './ResultCard'

let searchCompleted = false;
let finalQuery = '';

function Search() {
    
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [tvShows, setTvShows] = useState([]);
    
    let shows = [];

    async function searchTvShows(e) {
        e.preventDefault();
        searchCompleted = true;
        finalQuery = query;

        const url = `https://api.themoviedb.org/3/search/tv?api_key=5c653e1ac74813c897317106c5f8f2ae&language=en-US&query=${encodeURI(query)}&include_adult=false`;
        
        try {
            const res = await fetch(url);
            const data = await res.json();
            const validResults = data.results.filter(result => result.poster_path);
            setSearchResults(validResults);
        } catch (err) {
            console.error(err);
        }
    }
    
    useEffect(() => {
        setTvShows([]);
        searchResults.forEach(searchResult => getDetails(searchResult.id))
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [searchResults])

    async function getDetails(tvShowId) {
        const url = `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=5c653e1ac74813c897317106c5f8f2ae&language=en-US&append_to_response=credits,external_ids`;
        const res = await fetch(url);
        const data = await res.json();
        shows = [...shows, data];
        setTvShows(shows);
    }

    return (
        <>
        <form className='search-form' onSubmit={searchTvShows}>
            <input
                className='search-bar'
                type='text'
                name='query'
                placeholder='Search TV Show'
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className='search-button' type='submit'>Search</button>
        </form>

        {(searchCompleted && !tvShows.length) ? 
            <p>{`No results available for '${finalQuery}'`}</p> :
            <div className='results-list'>
                {tvShows.map((tvShow) => <ResultCard key={tvShow.id} tvShow={tvShow}/>)}
            </div> 
        }
        </>
    )
}

export default Search;