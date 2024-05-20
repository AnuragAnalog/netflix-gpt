import React from "react"
import { useSelector } from "react-redux"

import lang from "../utils/langConstants"

function GPTSearchBar() {
    const language = useSelector((store) => store.misc.selectedLang)

    return (
        <div className="w-1/2 m-auto pt-[7.5%]">
            <form className="grid grid-cols-12 gap-2" onClick={(e) => e.preventDefault()}>
                <input type="text" className="p-4 rounded-lg border border-black col-span-9" placeholder={lang[language].gptSearchPlaceholder} />
                <button className="text-white bg-red-500 font-extrabold p-2 rounded-lg col-span-3 cursor-pointer">
                    {lang[language].search}
                </button>
            </form>
        </div>
    )
}

export default GPTSearchBar