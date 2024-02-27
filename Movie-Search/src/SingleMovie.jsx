import React, { useEffect, useState } from 'react'
import { useParams, NavLink } from 'react-router-dom';
import { ApiUrl } from './context';

const SingleMovie = () => {
    const [isLoadind, setIsLoading] = useState(false)
    const [movie, setMovie] = useState('')
    const { id } = useParams()

    const getApi = (url) => {
        setIsLoading(true)
        fetch(url).then((result) => {
            return result.json().then((resp) => {
                console.log(resp);
                if (resp.Response === 'True') {
                    setMovie(resp)
                    setIsLoading(false)
                }
            })
        })
    }

    useEffect(() => {
        let timeOut = setTimeout(() => {
            getApi(`${ApiUrl}&i=${id}`);
        }, 500)
        return () => clearTimeout(timeOut)
    }, [id])

    if (setIsLoading == true) {
        return (
            <div className='movie-section'>
                <div className='loading'>Loading...</div>
            </div>
        )
    } 
    
    return (
    
            <section className='movie-section'>
                <div className='movie-card'>
                    <figure>
                        <img key={movie.Poster} src={movie.Poster} alt="" />
                    </figure>
                    <div className="card-content">
                        <p className="title">{movie.Title}</p>
                        <p className=""></p>
                        <p className="card-text">{movie.Released}</p>
                        <p className="card-text">{movie.Genre}</p>
                        <p className="card-text">{movie.imdbRating}</p>
                        <p className="card-text">{movie.Country}</p>
                        <NavLink to="/" className="back-btn">
                            Go Back
                        </NavLink>
                    </div>
                </div>
            </section>
        
    );

}


export default SingleMovie;