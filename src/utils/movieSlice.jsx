import { createSlice } from "@reduxjs/toolkit";
import { update } from "firebase/database";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        trailerIndex: null,
        nowPlayingMovies: null,
        popularMovies: null,
        upComingMovies: null,
        topRatedMovies: null,
        mainTrailer: null
    },
    reducers: {
        updateTrailerIndex: (state, action) => {
            state.trailerIndex = action.payload
        },
        addNowPlayingMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addUpComingMovies: (state, action) => {
            state.upComingMovies = action.payload
        },
        addTopRatedMovies: (state, action) => {
            state.topRatedMovies = action.payload
        },
        addMainTrailer: (state, action) => {
            state.mainTrailer = action.payload
        }
    }
})

export const { addNowPlayingMovies, addMainTrailer, addPopularMovies, addUpComingMovies, addTopRatedMovies, updateTrailerIndex } = movieSlice.actions

export default movieSlice.reducer