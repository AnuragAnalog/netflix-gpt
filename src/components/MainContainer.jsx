import React from "react"
import { useSelector } from "react-redux"

import VideoTitle from "./VideoTitle"
import VideoBackground from "./VideoBackground"

function MainContainer() {
    const movies = useSelector((state) => state.movies?.nowPlayingMovies)
    const trailerIndex = useSelector((state) => state.movies?.trailerIndex)

    if (!movies) {
        return <div>Loading...</div>
    }

    const mainMovie = movies[!trailerIndex ? 0 : trailerIndex]
    const { original_title, overview, id } = mainMovie

    return (
        <div className="">
            <VideoTitle title={original_title} desc={overview} />
            <VideoBackground movie_id={id} />
        </div>
    )
}

export default MainContainer