import React from "react"
import { useSelector } from "react-redux"

import GPTSearch from "./GPTSearch"
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import { useNowPlaying, usePopular, useUpComing, useTopRated } from "../hooks/useData"


function Browse() {
    const gptSearch = useSelector((state) => state.gpt.gptToggle)

    useNowPlaying()
    usePopular()
    useUpComing()
    useTopRated()

    return (
        <div className="flex flex-col">
            {gptSearch ? (<GPTSearch />)
                : (
                    <>
                        <MainContainer />
                        <SecondaryContainer />
                    </>
            )}
            {/*
                - Main Container
                    - Video background
                    - Video Title
                    - Video Description
                - Secondary Container
                    - Movie List * n
                        - Movie Cards * n 
             */}
        </div>
    )
}

export default Browse