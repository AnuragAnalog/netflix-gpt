import { useState, useRef } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth"

import { auth } from "../firebase"
import { BODY_IMG } from "../utils/constants"
import { checkValidData } from "../utils/validate"
import { addUser } from "../utils/userSlice"

function LogIn() {
    const [isLogIn, setIsLogIn] = useState(true)
    const [error, setError] = useState(null)
    const navigate = useNavigate()
    const dispatch = useDispatch()

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
            // Sign In with credentials and navigate to browse page if not error else show error
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setError(null)
                    navigate("/browse")
                }).catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
            });          
        } else {
            // Sign Up with credentials and navigate to browse page if not error else show error
            createUserWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    setError(null)

                    // Update the user profile with the name and dispatch the user to the store
                    updateProfile(user, { displayName: name }).then(() => {
                        dispatch(addUser({ uid: user.uid, email: user.email, displayName: name }))
                        navigate("/browse")
                    }).catch((error) => {
                        const errorMessage = error.message;
                        setError(errorMessage)
                    })
                }).catch((error) => {
                    const errorMessage = error.message;
                    setError(errorMessage)
            });
        }
    }

    return (
        <div className="">
            <img className="fixed h-screen object-cover md:w-screen" src={ BODY_IMG } alt="Netflix Body" />
            <div className="flex flex-col absolute w-full md:w-3/12 bg-opacity-75 bg-black my-36 mx-auto right-0 left-0 px-14 py-28 gap-8">
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