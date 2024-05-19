import React from "react"
import { useSelector } from "react-redux"

import MovieList from "./MovieList"

function SecondaryContainer() {
    const nowplaying = useSelector((state) => state.movies?.nowPlayingMovies)
    const popular = useSelector((state) => state.movies?.popularMovies)
    const upcoming = useSelector((state) => state.movies?.upComingMovies)

    if (!nowplaying || !popular || !upcoming) {
        return <div>Loading...</div>
    }

    return (
        <div className="bg-black">
            <div className="-mt-40 relative z-20">
                <MovieList title={"Now Playing"} list={nowplaying} />
                <MovieList title={"Popular"} list={popular} />
                <MovieList title={"Upcoming Movies"} list={upcoming} />
                <MovieList title={"Trending"} list={nowplaying} />
            </div>
        </div>
    )
}

export default SecondaryContainer