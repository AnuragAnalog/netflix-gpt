import React from "react"

import logo from "../assets/netflix-logo.png"

function Header() {
    return (
        <div className="flex flex-row items-center overflow-auto m-2 justify-between">
            <img className="w-38 h-20" src={logo} alt="Netflix Logo" />
            <button className="bg-red-500 text-white px-4 py-2 rounded-md">Sign In</button>
        </div>
    )
}

export default Header