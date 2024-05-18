import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { addNowPlayingMovies } from "../utils/movieSlice"
import { API_OPTIONS, NOW_PLAYING_URL } from "../utils/constants"

function useNowPlaying() {
    const dispatch = useDispatch()

    async function getNowPlaying() {
        const data = await fetch(NOW_PLAYING_URL, API_OPTIONS)
        const movies = await data.json()

        dispatch(addNowPlayingMovies(movies.results))
    }

    useEffect(() => {
        getNowPlaying()
    }, [])
}

export { useNowPlaying }