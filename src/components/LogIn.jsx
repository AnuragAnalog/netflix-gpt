import { useState, useRef } from "react"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

import Header from "./Header"
import { auth } from "../firebase"
import { BODY_IMG } from "../utils/constants"
import { checkValidData } from "../utils/validate"

function LogIn() {
    const [isLogIn, setIsLogIn] = useState(true)
    const [error, setError] = useState(null)

    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passwordRef = useRef(null)

    function toggleLogInSignUp() {
        setIsLogIn(!isLogIn)
    }

    function handleButtonClick() {
        // Validate the form data
        const name = nameRef?.current?.value
        const email = emailRef.current.value
        const password = passwordRef.current.value

        const errorMessage = checkValidData(name, email, password)

        if (errorMessage !== null) {
            setError(errorMessage)
            return
        }

        if (isLogIn) {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setError(null)
                }).catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
            });          
        } else {
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log(user)
                    setError(null)
                }).catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
            });
        }
    }

    return (
        <div className="">
            {/* <Header /> */}
            <img className="absolute" src={ BODY_IMG } alt="Netflix Logo" />
            <div className="flex flex-col absolute w-3/12 bg-opacity-75 bg-black my-36 mx-auto right-0 left-0 px-14 py-28 gap-8">
                <h1 className="text-4xl font-semibold text-white"> {isLogIn ? "Log In" : "Sign Up"} </h1>
                <form className="flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
                    {!isLogIn && (
                        <input ref={nameRef} className="border border-1 border-black rounded-lg p-2" type="text" placeholder="Full Name" />
                    )}
                    <input ref={emailRef} className="border border-1 border-black rounded-lg p-2" type="text" placeholder="Email" />
                    <input ref={passwordRef} className="border border-1 border-black rounded-lg p-2" type="password" placeholder="Password" />
                    {error && (<span className="text-red-600"> {error} </span>)}
                    <button className="bg-red-500 text-white px-4 py-2 rounded-lg" onClick={handleButtonClick}>
                        {isLogIn ? "Log In" : "Sign Up"}
                    </button>

                    <div className="">
                        <p className="text-white font-extralight">
                            {isLogIn ? "New to Netflix?" : "Already in Netflix?"} <span onClick={toggleLogInSignUp} className="text-red-600 cursor-pointer"> {isLogIn ? "Sign Up Now." : "Log In Now"} </span>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LogIn