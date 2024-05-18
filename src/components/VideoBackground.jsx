import { useEffect } from "react"

import { API_OPTIONS } from "../utils/constants"

function VideoBackground(props) {
    const { movie_id } = props

    async function getMovieVideos() {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, API_OPTIONS)
        const videos = await data.json()
        console.log("Videos: ", videos)

        const trailers = videos.results.filter((video) => video.type === "Trailer")
        console.log("Trailers: ", trailers)
    }

    useEffect(() => {
        getMovieVideos()
    }, [])


    return (
        <div className="">
            <h1> Video Background </h1>
        </div>
    )
}

export default VideoBackground