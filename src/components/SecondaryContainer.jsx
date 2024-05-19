import React from "react"
import { useSelector } from "react-redux"

import MovieList from "./MovieList"

function SecondaryContainer() {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies)

    return (
        <div className="">
            <h1>
                <MovieList title={"Now Playing"} list={movies} />
            </h1>
        </div>
    )
}

export default SecondaryContainer