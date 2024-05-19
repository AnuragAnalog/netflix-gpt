import { useSelector } from "react-redux"

import { useTrailerVideo } from "../hooks/useData"

function VideoBackground(props) {
    const { movie_id } = props
    useTrailerVideo({ movie_id })
    const trailerInfo = useSelector((store) => store.movies?.mainTrailer)

    return (
        <div className="">
            <iframe src={`https://www.youtube.com/embed/${trailerInfo?.key}?si=Soe45MIv8sy3-cgJ`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div>
    )
}

export default VideoBackground