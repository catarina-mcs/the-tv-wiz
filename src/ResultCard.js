import {useEffect} from 'react';

function ResultCard({tvShow}) {
      
    const creators = tvShow.created_by.map(creator => creator.name);
    const cast = tvShow.credits.cast.map(actor => actor.name);
    const genres = tvShow.genres.map(genre => genre.name);
    let year, day, month, status;

    if (tvShow.first_air_date) {
        year = tvShow.first_air_date.slice(0,4);
        day = tvShow.first_air_date.slice(8);
        month = tvShow.first_air_date.slice(5,7);
    }

    switch (month) {
        case '01':
            month = 'January';
            break;
        case '02':
            month = 'February';
            break;
        case '03':
            month = 'March';
            break;
        case '04':
            month = 'April';
            break;
        case '05':
            month = 'May';
            break;
        case '06':
            month = 'June';
            break;
        case '07':
            month = 'July';
            break;
        case '08':
            month = 'August';
            break;
        case '09':
            month = 'September';
            break;
        case '10':
            month = 'October';
            break;
        case '11':
            month = 'November';
            break;
        case '12':
            month = 'December';
            break;
        default: 
            month = 'month';
    }

    switch (tvShow.status) {
        case 'Ended':
            status = 'status-tag-ended';
            break;
        case 'Returning Series':
        case 'In Production':
            status = 'status-tag-ongoing';
            break;
        case 'Canceled':
        case 'Pilot':
            status = 'status-tag-canceled';
            break;
        default:
            status = 'status-tag-default';
    } 

    useEffect(() => {
        const infoFields = Array.from(document.getElementsByClassName('card-info'));
        infoFields.forEach (field => {
            field.innerHTML === 'Not available' && field.classList.add('card-info-not-available');
        })
    })
    
    return (
        <div className='card'>
            <img className='card-poster' src={`https://image.tmdb.org/t/p/w185/${tvShow.poster_path}`} alt={`${tvShow.name} Poster`}/>
            <div className='card-header'>
                <h3 className='card-title'>{tvShow.name}</h3>
                <span className={`status-tag ${status}`}>{tvShow.status}</span>
            </div>
            <p className='card-category'>First aired</p>
            <p className='card-info'>{tvShow.first_air_date ? `${month} ${day}, ${year}` : 'Not available'}</p>
            <p className='card-category'>Country</p>
            <p className='card-info'>{tvShow.origin_country.length ? tvShow.origin_country.join(', ') : 'Not available'}</p>
            <p className='card-category'>Rating</p>
            <p className='card-info'>{tvShow.vote_average ? `${tvShow.vote_average}/10 (${tvShow.vote_count} votes)` : 'Not available'}</p>
            <p className='card-category'>Seasons</p>
            <p className='card-info'>{tvShow.number_of_seasons ? `${tvShow.number_of_seasons} (${tvShow.number_of_episodes} episodes)` : 'Not available'}</p>
            <p className='card-category'>Genres</p>
            <p className='card-info'>{tvShow.genres.length ? genres.join(', ') : 'Not available'}</p>
            <p className='card-category'>Created by</p>
            <p className='card-info'>{tvShow.created_by.length ? creators.join(', ') : 'Not available'}</p>
            <p className='card-category card-category-full card-category-margin-top'>Cast</p>
            <p className='card-info card-info-full'>{tvShow.credits.cast.length ? cast.join(', ') : 'Not available'}</p>
            <p className='card-category card-category-full'>Overview</p>
            <p className='card-info card-info-full'>{tvShow.overview ? tvShow.overview : 'Not available'}</p>
            <a
                className='card-link'
                href={`https://www.imdb.com/title/${tvShow.external_ids.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
            >
                {tvShow.external_ids.imdb_id && `Visit IMDb page`}
            </a>

        </div>
    )
}

export default ResultCard;