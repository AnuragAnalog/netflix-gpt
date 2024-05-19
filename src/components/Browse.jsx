import React from "react"

import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import { useNowPlaying, usePopular, useUpComing, useTopRated } from "../hooks/useData"


function Browse() {
    useNowPlaying()
    usePopular()
    useUpComing()
    useTopRated()

    return (
        <div className="flex flex-col">
            <MainContainer />
            <SecondaryContainer />
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