import React from "react"

import { MOVIE_CARD_IMG_URL } from "../utils/constants"

function MovieCard(props) {
    const { movie } = props

    return (
        <div className="flex flex-col justify-between w-60 h-52">
            <h1 className=" text-white font-medium"> {movie.original_title} </h1>
            <img className="w-60 h-40" src={MOVIE_CARD_IMG_URL+movie.poster_path} alt={movie.original_title} />
        </div>
    )
}

export default MovieCard