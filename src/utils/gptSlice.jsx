import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptToggle: false,
        gptMovies: null,
        gptResult: null
    },
    reducers: {
        updateGPTToggle: (state) => {
            state.gptToggle = !state.gptToggle
        },
        updateGPTResults: (state, action) => {
            const { searchResult, movieResult } = action.payload
            state.gptResult = searchResult
            state.gptMovies = movieResult
        },
    }
})

export const { updateGPTToggle, updateGPTResults } = gptSlice.actions

export default gptSlice.reducer