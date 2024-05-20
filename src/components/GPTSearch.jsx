import React from "react"

import { BODY_IMG } from "../utils/constants"
import GPTSearchBar from "./GPTSearchBar"
import GPTMovieSuggestions from "./GPTMovieSuggestions"

function GPTSearch() {
    return (
        <div className="">
            <div className="absolute -z-10">
                <img className="" src={ BODY_IMG } alt="Netflix Body" />
            </div>

            <GPTSearchBar />
            <GPTMovieSuggestions />
        </div>
    )
}

export default GPTSearch