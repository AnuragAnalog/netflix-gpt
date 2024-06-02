import React from "react"

function VideoTitle(props) {
    const { title, desc } = props
    const trunc_desc = desc.length > 100 ? desc.substring(0, 100) + "..." : desc

    return (
        <div className="flex flex-col absolute w-9/12 md:w-4/12 text-white h-screen aspect-video bg-gradient-to-r from-black px-16 pt-[35%] md:pt-[15%]">
            <h1 className="p-1 text-xl md:text-4xl"> {title} </h1>
            <p className="p-3 text-xs"> {trunc_desc} </p>
            <div className="flex flex-row p-2 justify-between">
                <button className="w-2/5 md:w-1/2 m-2 py-3 bg-white text-sm md:font-semibold text-black hover:bg-opacity-80 rounded-md cursor-pointer">
                    ▶ Play
                </button>
                <button className="w-2/5 md:w-1/2 m-2 py-3 text-sm md:font-semibold bg-slate-500 hover:bg-slate-400 rounded-md cursor-pointer">
                    ⓘ More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle