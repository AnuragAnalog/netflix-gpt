import { useState } from "react"
import Header from "./Header"

import { BODY_IMG } from "../utils/constants"

function LogIn() {
    const [isLogIn, setIsLogIn] = useState(true)

    function toggleLogIn() {
        setIsLogIn(!isLogIn)
    }

    function toggleSignUp() {
        setIsLogIn(!isLogIn)
    }

    return (
        <div className="">
            <Header />
            <img className="absolute" src={ BODY_IMG } alt="Netflix Logo" />
            <div className="flex flex-col absolute w-4/12 bg-opacity-75 bg-black my-36 mx-auto right-0 left-0 px-14 py-28 gap-8">
                <h1 className="text-4xl font-semibold text-white"> {isLogIn ? "Log In" : "Sign Up"} </h1>
                <form className="flex flex-col gap-5">
                    {!isLogIn && (
                        <>
                            <input className="border border-1 border-black rounded-lg p-2" type="text" placeholder="First Name" />
                            <input className="border border-1 border-black rounded-lg p-2" type="text" placeholder="Last Name" />
                        </>
                    )}
                    <input className="border border-1 border-black rounded-lg p-2" type="text" placeholder="Email" />
                    <input className="border border-1 border-black rounded-lg p-2" type="password" placeholder="Password" />
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
                        {isLogIn ? "Log In" : "Sign Up"}
                    </button>

                    <div className="">
                        <p className="text-white">
                            {isLogIn ? "New to Netflix?" : "Already in Netflix?"} <span onClick={toggleLogIn} className="text-red-600"> {isLogIn ? "Sign Up Now." : "Log In Now"} </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogIn