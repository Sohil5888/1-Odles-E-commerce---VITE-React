import React from 'react'
import { globalContext } from './context';
import { NavLink } from 'react-router-dom';

const Movies = () => {
    const { movie, isLoading } = globalContext()
    if (isLoading) {
        return (
          <section className="movie-section ">
            <div className="loading">Loading....</div>;
          </section>
        );
      }
    
    return (
        <>
            <section className='movie-page'>
                <div className="container xl:px-24 ">
                    <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                        {
                            movie && movie.map((items) => {
                                const {imdbID, Title, Poster} = items;
                                const movieName = Title.substring(0, 15)
                                return(
                                    <>
                                        <NavLink key={imdbID} to={`movie/${imdbID}`}>
                                            <div className="card">
                                                <div className="card-info">
                                                    <h2 key={movieName}>{movieName.length >= 15 ? `${movieName}...` : movieName}</h2>
                                                    <img key={Poster} src={Poster} alt="" />
                                                </div>
                                            </div>
                                        </NavLink>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
}

export default Movies;