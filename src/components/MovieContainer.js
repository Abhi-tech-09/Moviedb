import { React, useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
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

export default function MovieContainer({ movielist, loading, nextPage, showPoster, search, scroll, setScroll }) {

    const { movie } = useParams();
    // console.log(movie);
    const ref = useRef();


    useEffect(() => {
        search(movie);
        // ref.current.scrollTop = scroll ; 
        console.log(scroll);
        
        // console.log(ref.current.scrollTop,scroll);

    }, []);
    useEffect(() => {


        ref.current.scrollTop = scroll;
        // setScroll(ref.current.scrollHeight - ref.current.offsetHeight - 100)


    });




    return (
        <div className="movieContainer" ref={ref}
            onScroll={
                (e) => {
                    if (e.target.scrollHeight <= Math.ceil(e.target.scrollTop + e.target.offsetHeight)) {
                        nextPage(movie,ref);
                    };
                }
            }>
            {loading ?
                <img className="loading" src={gif} alt="" />
                :
                (
                    movielist == undefined ? <h1 className="noMovie">No Such movies Found !!</h1> :
                        movielist.length == 0 || movie == undefined ? <h1 className="noMovie">Nothing to Show...</h1> : movielist.map((movieEle, index) =>
                            (<MovieCard movieName={movie} movie={movieEle} showPoster={showPoster} key={index} />)
                        )



                )
            }


        </div >
    )
}
