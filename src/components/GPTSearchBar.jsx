import React from "react"

function GPTSearchBar() {
    return (
        <div className="w-1/2 m-auto">
            <form className="flex flex-col gap-5" onClick={(e) => e.preventDefault()}>
                <input type="text" className="p-4 rounded-lg border border-black" placeholder="What do you want to watch?" />
                <button className="text-white bg-red-200 font-extrabold p-2 rounded-lg cursor-pointer">
                    Search
                </button>
            </form>
        </div>
    )
}

export default GPTSearchBar