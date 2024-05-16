import React from "react"

function LogIn() {
    return (
        <div className="flex flex-col w-3/12 bg-opacity-50 bg-black rounded-lg m-auto border-2 px-14 py-28 border-black gap-8">
            <h1 className="text-4xl font-semibold text-white"> Log In </h1>
            <form className="flex flex-col gap-5">
                <input className="border border-1 border-black rounded-lg p-2" type="text" placeholder="Email" />
                <input className="border border-1 border-black rounded-lg p-2" type="password" placeholder="Password" />
                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Log In</button>
            </form>
        </div>
    )
}

export default LogIn