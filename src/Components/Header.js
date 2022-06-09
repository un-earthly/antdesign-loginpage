import React from 'react'

export default function Header() {
    return (
        <nav>
            <div className="logo">
                ATools
                <span className="text__red">.</span>
            </div>

            <div className="btn__container">
                <button className="btn btn__main">Start Free Trial</button>
                <button className="btn btn__login">Login</button>
            </div>
        </nav>
    )
}
