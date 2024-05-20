import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: "gpt",
    initialState: {
        gptToggle: false
    },
    reducers: {
        updateGPTToggle: (state, action) => {
            state.gptToggle = !state.gptToggle
        }
    }
})

export const { updateGPTToggle } = gptSlice.actions

export default gptSlice.reducer