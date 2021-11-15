import React from 'react'
import "../css/movieCard.css"

/*
Poster: "https://m.media-amazon.com/images/M/MV5BM2Y5ZDg1MmMtNjJkYS00NmEzLTk0ZjAtMGUxOTIyMDVlNzM1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg"
Title: "Shiva Baby"
Type: "movie"
Year: "2020"
imdbID: "tt11317142"
*/

export default function MovieCard({ movie, showPoster }) {
    return (
        <div className="card"
        onClick={
            (e)=>{
                // console.log(movie.imdbID);
                showPoster(movie);
                
            }
        }>
            <img src={movie.Poster} alt="Image"/>
            <div className ="container-card">
                <h4><b>{movie.Title}</b></h4>
                <p>Year : {movie.Year}</p>
            </div>
        </div>
    )
}
