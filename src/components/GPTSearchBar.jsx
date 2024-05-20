import { useRef } from "react"
import { useSelector, useDispatch } from "react-redux"

import lang from "../utils/langConstants"
import openai from "../utils/openai"
import { updateGPTResults } from "../utils/gptSlice"
import { API_OPTIONS } from "../utils/constants"

function GPTSearchBar() {
    const searchTextRef = useRef(null)
    const dispatch = useDispatch()
    const language = useSelector((store) => store.misc.selectedLang)

    async function getMovie(movieName) {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movieName}&include_adult=false&page=1`, API_OPTIONS)
        const data = await response.json()

        return data.results
    }

    async function handleGPTSearch() {
        const searchText = searchTextRef.current.value
        // console.log("GPT Search: ", searchText)

        // const gptQuery = "Act as a Movie Recommendation system and suggest some ovies for the query"
        //                 + searchText +
        //                 "only give me 5 movie names, comma seperated like the example given ahead. Example Result: Family Star, Guntur Karam, Laapata Ladies, Koi Mil Gaya, The Last Hour."

        // const gptResults = await openai.chat.completions.create({
        //     messages: [{ role: 'user', content: gptQuery }],
        //     model: 'gpt-3.5-turbo',
        // });
        // const gptMovies = gptResults.choices?[0]?.message?.content

        // console.log("GPT Results: ", gptResults.choices)
        const choices = "Guntur Karam,Family Star,Anand,Eega,Andaz Apna Apna".split(",")
        const promiseArr = choices.map((movieName) => {
            return getMovie(movieName)
        })
        const tmdbMovies = await Promise.all(promiseArr)
        dispatch(updateGPTResults({ searchResult: choices, movieResult: tmdbMovies }))
    }

    return (
        <div className="w-1/2 m-auto pt-[7.5%]">
            <form className="grid grid-cols-12 gap-2" onClick={(e) => e.preventDefault()}>
                <input ref={searchTextRef} type="text" className="p-4 rounded-lg border border-black col-span-9" placeholder={lang[language].gptSearchPlaceholder} />
                <button className="text-white bg-red-500 font-extrabold p-2 rounded-lg col-span-3 cursor-pointer" onClick={handleGPTSearch}>
                    {lang[language].search}
                </button>
            </form>
        </div>
    )
}

export default GPTSearchBar