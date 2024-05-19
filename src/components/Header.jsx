import React from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"

import { auth } from "../firebase"
import { LOGO_IMG, PROFILE_IMG } from "../utils/constants"

function Header() {
    const navigate = useNavigate()
    const user = useSelector((state) => state.user)

    function handleSignOut() {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.error(error)
            navigate("/error")
        })
    }

    return (
        <div className="flex flex-row items-center justify-between z-10 w-screen absolute px-8 py-2 bg-gradient-to-b from-black">
            <img className="w-38 h-20" src={LOGO_IMG} alt="Netflix Logo" />
            {user && (<div className="flex flex-row items-center gap-4">
                <img className="w-10 h-10" src={PROFILE_IMG} alt="Netflix Avatar" />
                <button className="bg-red-400 text-white w-20 h-8 text-xs font-bold items-center rounded-md cursor-pointer" onClick={handleSignOut}> (Sign Out) </button>
            </div>)}
        </div>
    )
}

export default Header