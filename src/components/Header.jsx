import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { signOut } from "firebase/auth"

import { auth } from "../firebase"
import { LOGO_IMG, PROFILE_IMG, LANG_MAP } from "../utils/constants"
import { updateGPTToggle } from "../utils/gptSlice"
import { updateSelectedLang } from "../utils/miscSlice"

function Header() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.user)
    const gptToggle = useSelector((store) => store.gpt.gptToggle)

    function handleSignOut() {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.error(error)
            navigate("/error")
        })
    }

    function clickLogo() {
        navigate("/browse")
    }

    function handleGptSearchClick() {
        dispatch(updateGPTToggle())
    }

    function changeLanguage(event) {
        dispatch(updateSelectedLang(event.target.value))
    }

    return (
        <div className="flex flex-row items-center justify-between z-10 w-screen absolute px-8 py-2 bg-gradient-to-b from-black">
            <img className="w-38 h-20" src={ LOGO_IMG } alt="Netflix Logo" onClick={clickLogo} />
            {user && (<div className="flex flex-row items-center gap-4">
                {gptToggle && <select defaultValue="en" className="bg-black text-white font-bold text-sm cursor-pointer mx-4 my-2" onChange={changeLanguage}>
                    {LANG_MAP.map((lang) => {
                        return <option key={lang.identifier} value={lang.identifier}> {lang.name} </option>
                    })}
                </select>}

                <button className="text-black font-bold text-sm p-2 rounded-lg cursor-pointer bg-purple-100 mx-4 my-2" onClick={handleGptSearchClick}>
                    {gptToggle ? "Homepage" : "GPT Search"}
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