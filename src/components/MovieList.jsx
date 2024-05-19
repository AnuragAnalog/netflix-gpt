import React from "react"

import MovieCard from "./MovieCard"

function MovieList(props) {
    const { title, list } = props
    console.log("Movie List: ", list[0])

    return (
        <div className="">
            <h1>
                {title}
            </h1>
            <div className="flex flex-row">
                <MovieCard movie={list[0]} />
                {/* {list.map((movie) => (
                    <MovieCard key={movie.id} movie={movie} />
                ))} */}
            </div>
        </div>
    )
}

export default MovieList