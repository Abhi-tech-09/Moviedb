import { React, useState } from 'react'
import "../css/container.css";
import { Navbar, MovieContainer, Poster } from "./index"
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
const URL = "https://www.omdbapi.com/";
// api key : 688eff80
//Start : https://www.omdbapi.com/?s=Shiva&apikey=688eff80

export default function Container() {
    const [movie, setMovie] = useState("");
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false)
    const [movielist, setlist] = useState([]);
    const [poster, setPoster] = useState("null");
    const [scroll, setScroll] = useState(0);
    // console.log(movie);
    // console.log(movielist);

    const searchMovie = async (movie) => {
        setPage(0);
        setLoading(true);
        // alert("came inside")
        const fetchURL = URL + `?s=${movie}&` + "&apikey=688eff80";
        // console.log(fetchURL);
        const res = await fetch(fetchURL);
        res.json().then(data => {
            setlist(data.Search);
            setLoading(false);

        })

    }

    const nextPage = async (movie,ref) => {
        console.log(ref.current);
        setLoading(true);
        setPage(page + 1);
        // setScroll(scrollPos);
        const fetchURL = URL + `?s=${movie}&page=${page}` + "&apikey=688eff80";
        const res = await fetch(fetchURL);
        res.json().then(data => {
            setLoading(false);
            if (data.Search == undefined) { return; }
            let newlist = movielist.concat(data.Search);
            // console.log(data.Search);
            setlist(newlist);
            setScroll(ref.current.scrollHeight - ref.current.offsetHeight - 200)

        })


    }
    const showPoster = async (id) => {
        setPoster("loading");
        const fetchURL = URL + `?i=${id}` + "&apikey=688eff80";
        const res = await fetch(fetchURL);
        res.json().then(data => {
            setPoster(data);
        })
    }




    return (
        <Router>
            <div className="container">
                <Navbar setMovie={setMovie} />
                <Routes>
                    <Route exact path="/"
                        element={<MovieContainer movielist={movielist} loading={loading} nextPage={nextPage} showPoster={showPoster} search={searchMovie} scroll={scroll}  setScroll={setScroll} />} />

                    <Route exact path="/:movie"
                        element={<MovieContainer movielist={movielist} loading={loading} nextPage={nextPage} showPoster={showPoster} search={searchMovie} scroll={scroll} setScroll={setScroll} />} />

                    <Route exact path="/:movie/:id"
                        element={
                            <>
                                <MovieContainer movielist={movielist} loading={loading} nextPage={nextPage} showPoster={showPoster} search={searchMovie} scroll={scroll} setScroll={setScroll}/>
                                <Poster poster={poster} showPoster={showPoster} setPoster={setPoster} />
                            </>} />
                </Routes>
            </div>
        </Router>
    )
}
