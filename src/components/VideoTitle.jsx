import React from "react"

function VideoTitle(props) {
    const { title, desc } = props

    return (
        <div className="flex flex-col w-3/12 border border-black my-40 mx-20">
            <h1 className="p-1 text-3xl"> {title} </h1>
            <p className="p-3"> {desc} </p>
            <div className="flex flex-row p-2 justify-between">
                <button className="w-1/2 m-2 py-3 bg-slate-500 hover:bg-slate-400 rounded-md cursor-pointer">
                    ▶ Play
                </button>
                <button className="w-1/2 m-2 py-3 bg-slate-500 hover:bg-slate-400 rounded-md cursor-pointer">
                    More Info
                </button>
            </div>
        </div>
    )
}

export default VideoTitle