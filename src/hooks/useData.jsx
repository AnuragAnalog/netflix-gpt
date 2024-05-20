import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { addNowPlayingMovies, addMainTrailer, addPopularMovies, addUpComingMovies, addTopRatedMovies } from "../utils/movieSlice"
import { API_OPTIONS, NOW_PLAYING_URL, POPULAR_URL, UPCOMING_URL, TOP_RATED_URL } from "../utils/constants"

function useNowPlaying() {
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector((store) => store.movie?.nowPlayingMovies)

    async function getNowPlaying() {
        const data = await fetch(NOW_PLAYING_URL, API_OPTIONS)
        const movies = await data.json()

        dispatch(addNowPlayingMovies(movies.results))
    }

    useEffect(() => {
        if (nowPlayingMovies === null) {
            getNowPlaying()
        }
    }, [])
}

function usePopular() {
    const dispatch = useDispatch()
    const popularMovies = useSelector((store) => store.movie?.popularMovies)

    async function getPopular() {
        const data = await fetch(POPULAR_URL, API_OPTIONS)
        const movies = await data.json()

        dispatch(addPopularMovies(movies.results))
    }

    useEffect(() => {
        if (popularMovies === null) {
            getPopular()
        }
    }, [])
}

function useUpComing() {
    const dispatch = useDispatch()
    const upComingMovies = useSelector((store) => store.movie?.upComingMovies)

    async function getUpComing() {
        const data = await fetch(UPCOMING_URL, API_OPTIONS)
        const movies = await data.json()

        dispatch(addUpComingMovies(movies.results))
    }

    useEffect(() => {
        if (upComingMovies === null) {
            getUpComing()
        }
    }, [])
}

function useTopRated() {
    const dispatch = useDispatch()
    const topRatedMovies = useSelector((store) => store.movie?.topRatedMovies)

    async function getTopRated() {
        const data = await fetch(TOP_RATED_URL, API_OPTIONS)
        const movies = await data.json()

        dispatch(addTopRatedMovies(movies.results))
    }

    useEffect(() => {
        if (topRatedMovies === null) {
            getTopRated()
        }
    }, [])
}

function useTrailerVideo(props) {
    const { movie_id } = props
    const dispatch = useDispatch()
    const mainTrailer = useSelector((store) => store.movie?.mainTrailer)

    async function getMovieVideos() {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/videos`, API_OPTIONS)
        const videos = await data.json()

        const trailers = videos.results.filter((video) => video.type === "Trailer")
        const trailer = trailers.length ? trailers[0] : videos.results[0]

        dispatch(addMainTrailer(trailer))
    }

    useEffect(() => {
        if (mainTrailer === null) {
            getMovieVideos()
        }
    }, [])
}

export { useNowPlaying, useTrailerVideo, usePopular, useUpComing, useTopRated }