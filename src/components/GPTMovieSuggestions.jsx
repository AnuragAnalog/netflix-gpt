import { useSelector } from "react-redux"

import MovieList from "./MovieList"

function GPTMovieSuggestions() {
    const { gptResult, gptMovies } = useSelector((store) => store.gpt)

    if (!gptMovies) {
        return <div></div>
    }

    return (
        <div className="bg-black bg-opacity-75 rounded-lg m-5">
             {gptMovies.map((movie, index) => {
                return <MovieList key={index} title={"Movies with "+gptResult[index]} list={gptMovies[index]} />
            })}
        </div>
    )
}

export default GPTMovieSuggestions