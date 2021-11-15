import { React, useState } from 'react'
import "../css/container.css";
import { Navbar, MovieContainer, Poster } from "./index"
const URL = "https://www.omdbapi.com/";
// api key : 688eff80
//Start : https://www.omdbapi.com/?s=Shiva&apikey=688eff80

export default function Container() {
    const [movie, setMovie] = useState();
    const [list, setlist] = useState([])
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [poster, setPoster] = useState("null");
    // console.log("Page:", page);

    const searchMovie = async (e) => {
        setPage(0);
        if (e.code === "Enter") {
            setLoading(true);
            const fetchURL = URL + `?s=${movie}` + "&apikey=688eff80";
            const res = await fetch(fetchURL);
            res.json().then(data => {
                setLoading(false);
                setlist(data.Search);

            })
        }
    }
    const nextPage = async () => {
        // setLoading(true);
        setPage(page + 1);
        const fetchURL = URL + `?s=${movie}&page=${page}` + "&apikey=688eff80";
        const res = await fetch(fetchURL);
        res.json().then(data => {
            // setLoading(false);
            if (data.Search == undefined) { return; }
            let newlist = list.concat(data.Search);
            // console.log(data.Search);
            setlist(newlist);

        })


    }
    const showPoster = async (movie) => {
        setPoster("loading");
        const fetchURL = URL + `?i=${movie.imdbID}` + "&apikey=688eff80";
        const res = await fetch(fetchURL);
        res.json().then(data => {
            setPoster(data);
        })
    }


    return (
        <div className="container">
            <Navbar setMovie={setMovie} search={searchMovie} />
            <MovieContainer movieList={list} loading={loading} nextPage={nextPage} showPoster={showPoster} />
            {poster != "null" ? <Poster poster={poster} setPoster={setPoster} /> : ""}
        </div>
    )
}
