import React from "react"

import logo from "../assets/netflix-logo.png"

function Header() {
    return (
        <div className="flex flex-row items-center justify-between z-10 w-full absolute px-8 py-2 bg-gradient-to-b from-black">
            <img className="w-38 h-20" src={logo} alt="Netflix Logo" />
            {/* <button className="bg-red-500 text-white px-4 py-2 rounded-md">Sign In</button> */}
        </div>
    )
}

export default Header