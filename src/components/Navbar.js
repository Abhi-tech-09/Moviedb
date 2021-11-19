import { React } from 'react'
import "../css/navbar.css"
import { Link } from "react-router-dom";

export default function Navbar({ setMovie }) {


    return (
        <div className="navbar">
            <h1 className="title">Movie-db</h1>

            <input type="text" placeholder="Enter movie name"
                onChange={
                    (e) => {
                        setMovie(e.target.value);
                    }
                }
                onKeyPress={(e) => {
                    if (e.code === "Enter") {
                        e.preventDefault();
                        window.location.assign(`/${e.target.value}`);
                        // window.history.pushState("", "Movie-db", `/${e.target.value}`);
                    }
                }} />



        </div>
    )
}
