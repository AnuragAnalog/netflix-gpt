import { useDispatch, useSelector } from "react-redux"

import { useTrailerVideo } from "../hooks/useData"
import { useEffect } from "react"
import { API_OPTIONS } from "../utils/constants"
import { addMainTrailer } from "../utils/movieSlice"

function VideoBackground(props) {
    const { movie_id } = props
    const dispatch = useDispatch()

    useEffect(() => {
        async function getMovieVideos() {
            const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, API_OPTIONS)
            const videos = await data.json()
    
            const trailers = videos.results.filter((video) => video.type === "Trailer")
            const trailer = trailers.length ? trailers[0] : videos.results[0]
    
            dispatch(addMainTrailer(trailer))
        }
        getMovieVideos()
    }, [])

    // useTrailerVideo({ movie_id })
    const trailerInfo = useSelector((store) => store.movies?.mainTrailer)

    return (
        <div className="w-screen">
            <iframe 
                className="w-screen h-screen aspect-video"
                src={`https://www.youtube.com/embed/${trailerInfo?.key}?&autoplay=1&mute=1&controls=0&rel=0&showinfo=0`}
                title="YouTube video player"
                allow="autoplay; encrypted-media; picture-in-picture; gyroscope"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen />
        </div>
    )
}

export default VideoBackground