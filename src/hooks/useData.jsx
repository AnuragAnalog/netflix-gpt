import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { addNowPlayingMovies, addMainTrailer, addPopularMovies, addUpComingMovies, addTopRatedMovies } from "../utils/movieSlice"
import { API_OPTIONS, NOW_PLAYING_URL, POPULAR_URL, UPCOMING_URL, TOP_RATED_URL } from "../utils/constants"

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

function usePopular() {
    const dispatch = useDispatch()

    async function getPopular() {
        const data = await fetch(POPULAR_URL, API_OPTIONS)
        const movies = await data.json()

        dispatch(addPopularMovies(movies.results))
    }

    useEffect(() => {
        getPopular()
    }, [])
}

function useUpComing() {
    const dispatch = useDispatch()

    async function getUpComing() {
        const data = await fetch(UPCOMING_URL, API_OPTIONS)
        const movies = await data.json()

        dispatch(addUpComingMovies(movies.results))
    }

    useEffect(() => {
        getUpComing()
    }, [])
}

function useTopRated() {
    const dispatch = useDispatch()

    async function getTopRated() {
        const data = await fetch(TOP_RATED_URL, API_OPTIONS)
        const movies = await data.json()

        dispatch(addTopRatedMovies(movies.results))
    }

    useEffect(() => {
        getTopRated()
    }, [])
}

function useTrailerVideo(props) {
    const { movie_id } = props
    const dispatch = useDispatch()

    async function getMovieVideos() {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, API_OPTIONS)
        const videos = await data.json()

        const trailers = videos.results.filter((video) => video.type === "Trailer")
        const trailer = trailers.length ? trailers[0] : videos.results[0]

        dispatch(addMainTrailer(trailer))
    }

    useEffect(() => {
        getMovieVideos()
    }, [])
}

export { useNowPlaying, useTrailerVideo, usePopular, useUpComing, useTopRated }