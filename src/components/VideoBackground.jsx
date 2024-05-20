import { useSelector } from "react-redux"

import { useTrailerVideo } from "../hooks/useData"
import { useEffect } from "react"

function VideoBackground(props) {
    const { movie_id } = props
    useEffect(() => {
        // useTrailerVideo({ movie_id })
    }, [movie_id])
    useTrailerVideo({ movie_id })
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