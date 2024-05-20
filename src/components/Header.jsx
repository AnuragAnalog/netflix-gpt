import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"

import { auth } from "../firebase"
import { LOGO_IMG, PROFILE_IMG } from "../utils/constants"
import { updateGPTToggle } from "../utils/gptSlice"
import { updateSelectedLang } from "../utils/miscSlice"

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)

    function handleSignOut() {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.error(error)
            navigate("/error")
        })
    }

    function handleGptSearchClick() {
        dispatch(updateGPTToggle())
    }

    function changeLanguage(event) {
        console.log(event.target.value)
        dispatch(updateSelectedLang(event.target.value))
    }

    return (
        <div className="flex flex-row items-center justify-between z-10 w-screen absolute px-8 py-2 bg-gradient-to-b from-black">
            <img className="w-38 h-20" src={LOGO_IMG} alt="Netflix Logo" />
            {user && (<div className="flex flex-row items-center gap-4">
                <select defaultValue="en" className="bg-black text-white font-bold text-sm cursor-pointer mx-4 my-2" onChange={changeLanguage}>
                    <option value="en"> English </option>
                    <option value="es"> Spanish </option>
                    <option value="hi"> Hindi </option>
                    <option value="te"> Telugu </option>
                    <option value="ml"> Malayalam </option>
                </select>

                <button className="text-black font-bold text-sm cursor-pointer bg-purple-200 mx-4 my-2" onClick={handleGptSearchClick}>
                    GPT Search
                </button>
                
                <img className="w-10 h-10" src={PROFILE_IMG} alt="Netflix Avatar" />
                
                <button className="bg-red-400 text-white w-20 h-8 text-xs font-bold items-center rounded-md cursor-pointer" onClick={handleSignOut}>
                    (Sign Out)
                </button>
            </div>)}
        </div>
    )
}

export default Header