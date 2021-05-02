import React, { useState, useEffect } from 'react'

const Auth = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="/auth/logout">Logout</a></li>
                    <li><a href="/auth/login">Login</a></li>
                    <li><a href="/">Homepage</a></li>
                    <li><a href="/profile">Profile</a></li>

                </ul>
            </nav>
            <header>
                <h1> Login Using Google</h1>
            </header>
            <a className="google-btn" href="/auth/google">Google+</a>
        </>
        
    )
}

export default Auth