import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import GPTSearch from "./GPTSearch"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import { useNowPlaying, usePopular, useUpComing, useTopRated } from "../hooks/useData"
import { addNowPlayingMovies, addMainTrailer, addPopularMovies, addUpComingMovies, addTopRatedMovies } from "../utils/movieSlice"
import { API_OPTIONS, NOW_PLAYING_URL, POPULAR_URL, UPCOMING_URL, TOP_RATED_URL } from "../utils/constants"

function Browse() {
    const dispatch = useDispatch()
    const gptSearch = useSelector((state) => state.gpt.gptToggle)

    // useNowPlaying()
    // usePopular()
    // useUpComing()
    // useTopRated()


    useEffect(() => {
        async function getNowPlaying() {
            const data = await fetch(NOW_PLAYING_URL, API_OPTIONS)
            const movies = await data.json()
            dispatch(addNowPlayingMovies(movies.results))
        }
        getNowPlaying()
    }, [])

    useEffect(() => {
        async function getPopular() {
            const data = await fetch(POPULAR_URL, API_OPTIONS)
            const movies = await data.json()
            dispatch(addPopularMovies(movies.results))
        }
        getPopular()
    }, [])

    useEffect(() => {
        async function getUpComing() {
            const data = await fetch(UPCOMING_URL, API_OPTIONS)
            const movies = await data.json()
            dispatch(addUpComingMovies(movies.results))
        }
        getUpComing()
    }, [])

    useEffect(() => {
        async function getTopRated() {
            const data = await fetch(TOP_RATED_URL, API_OPTIONS)
            const movies = await data.json()
            dispatch(addTopRatedMovies(movies.results))
        }
        getTopRated()
    }, [])

    return (
        <div className="flex flex-col">
            {gptSearch ? (<GPTSearch />)
                : (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
            )}
        </div>
    )
}

export default Browse