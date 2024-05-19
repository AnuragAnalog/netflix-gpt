import React from "react"

function MovieCard(props) {
    const { movie } = props

    return (
        <div className="">
            <h1> {movie.original_title} </h1>
        </div>
    )
}

export default MovieCard