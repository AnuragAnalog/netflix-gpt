import React from "react"

import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer"
import { useNowPlaying } from "../hooks/useData"


function Browse() {
    useNowPlaying()

    return (
        <div className="flex flex-col gap-1">
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