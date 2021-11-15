import { React, useState } from 'react'
import "../css/movieContainer.css";
import MovieCard from './MovieCard';
import gif from "../loading.gif"

/*
Poster: "https://m.media-amazon.com/images/M/MV5BM2Y5ZDg1MmMtNjJkYS00NmEzLTk0ZjAtMGUxOTIyMDVlNzM1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg"
Title: "Shiva Baby"
Type: "movie"
Year: "2020"
imdbID: "tt11317142"
*/

export default function MovieContainer({ movieList, loading, nextPage, showPoster }) {

    return (

        <div className="movieContainer"
            onScroll={
                (e) => {
                    if (e.target.scrollHeight <= Math.ceil(e.target.scrollTop + e.target.offsetHeight)) {
                        nextPage();
                    };
                }
            }>
            {loading ?
                <img className="loading" src={gif} alt="" />
                :
                (
                    movieList == undefined ? <h1 className="noMovie">No Such movies Found !!</h1> :
                        movieList.length == 0 ? <h1 className="noMovie">Nothing to Show...</h1> : movieList.map((movie, index) =>
                            (<MovieCard movie={movie} showPoster={showPoster} key={index} />)
                        )



                )
            }


        </div >


    )
}
