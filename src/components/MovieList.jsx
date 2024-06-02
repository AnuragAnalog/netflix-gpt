import React from "react"

import MovieCard from "./MovieCard"

function MovieList(props) {
    const { title, list } = props

    return (
        <div className="mx-10">
            <h1 className="text-white text-md md:text-2xl font-semibold"> {title} </h1>
            <div className="flex overflow-x-scroll">
                <div className="flex py-5 gap-2">
                    {list.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default MovieList