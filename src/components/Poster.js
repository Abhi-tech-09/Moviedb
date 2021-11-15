import React from 'react'
import "../css/poster.css";
import gif from "../loading.gif"

// {"Title":"Shiva Baby","Year":"2020","Rated":"Not Rated","Released":"02 Apr 2021","Runtime":"77 min","Genre":"Comedy, Drama","Director":"Emma Seligman","Writer":"Emma Seligman","Actors":"Rachel Sennott, Danny Deferrari, Fred Melamed","Plot":"At a Jewish funeral service with her parents, a college student runs into her sugar daddy.","Language":"English","Country":"United States, Canada","Awards":"5 wins & 20 nominations","Poster":"https://m.media-amazon.com/images/M/MV5BM2Y5ZDg1MmMtNjJkYS00NmEzLTk0ZjAtMGUxOTIyMDVlNzM1XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_SX300.jpg","Ratings":[{"Source":"Internet Movie Database","Value":"7.1/10"},{"Source":"Rotten Tomatoes","Value":"97%"},{"Source":"Metacritic","Value":"79/100"}],"Metascore":"79","imdbRating":"7.1","imdbVotes":"12,401","imdbID":"tt11317142","Type":"movie","DVD":"02 Apr 2021","BoxOffice":"$156,552","Production":"N/A","Website":"N/A","Response":"True"}

export default function Poster({poster, setPoster }) {

    if(poster === "loading"){
        return (
            <div className="poster">
                 <img className="load" src={gif} alt="" />
            </div>
        )
    }
    
    return (
        <div className="poster">
            

            <div className="row">
                <img src={poster.Poster} alt="Image" />
                <div className="info">
                    <h4>Title : {poster.Title}</h4>
                    <h4>Year : {poster.Year} </h4>
                    <h4>Released: {poster.Released} </h4>  <h4>Runtime : {poster.Runtime}</h4>
                    <h4>Actors: {poster.Actors}</h4>
                    <h4>Country: {poster.Country}</h4>
                    
                    <span className="close" onClick={
                        (e)=>{
                            setPoster("null")
                        }
                    }>Close</span>
                </div>
            </div>
            <div className="description">
                <h4>Genre : {poster.Genre}</h4>
                <h4>Awards : {poster.Awards}</h4>
                <h4>Director: {poster.Director}</h4>
                <h4>Language: {poster.Language}</h4>
                <h4>imdbrating : {poster.imdbRating}</h4>
                <p>Plot: {poster.Plot}</p>

            </div>


        </div>
    )
}
