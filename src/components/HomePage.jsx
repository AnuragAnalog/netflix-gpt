import React from "react"

import LogIn from "./LogIn"
import { BODY_IMG } from "../utils/constants"

function HomePage() {
    return (
        <div className="">
            <LogIn />
            <img className="z-10" src={BODY_IMG} alt="" />
        </div>
    )
}

export default HomePage