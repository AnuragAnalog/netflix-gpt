import React from "react"

import { BODY_IMG } from "../utils/constants"
import GPTSearchBar from "./GPTSearchBar"
import GPTMovieSuggestions from "./GPTMovieSuggestions"

function GPTSearch() {
    return (
        <div className="">
            <div className="fixed -z-10">
                <img className="h-screen object-cover md:w-screen" src={ BODY_IMG } alt="Netflix Body" />
            </div>

            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
    )
}

export default GPTSearch