import { React } from 'react'
import "../css/navbar.css"

export default function Navbar({ setMovie, search }) {


    return (
        <div className="navbar">
            <h1 className="title">Movie-db</h1>

            <input type="text" placeholder="Enter movie name"
                onChange={
                    (e) => {
                        setMovie(e.target.value);
                    }
                }
                onKeyPress={search} />

        </div>
    )
}
