import React from "react"

function Footer() {
    return (
        <div className="flex flex-col justify-center items-center h-16 bg-black text-white">
            <p className="text-white">Questions? Call 1-866-579-7172</p>
            <div className="flex flex-row gap-4">
                <div className="flex flex-col gap-2">
                    <p>FAQ</p>
                    <p>Help Center</p>
                    <p>Account</p>
                    <p>Media Center</p>
                    <p>Investor Relations</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Ways to Watch</p>
                    <p>Terms of Use</p>
                    <p>Privacy</p>
                    <p>Cookie Preferences</p>
                    <p>Corporate Information</p>
                </div>
                <div className="flex flex-col gap-2">
                    <p>Speed Test</p>
                    <p>Legal Notices</p>
                    <p>Only on Netflix</p>
                    <p>Contact Us</p>
                    <p>Jobs</p>
                </div>
            </div>
            <hr className="w-1/2" />
            <p>© 2024 Netflix GPT</p>
        </div>
    )
}

export default Footer