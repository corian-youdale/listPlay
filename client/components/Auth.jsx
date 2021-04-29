import React, { useState, useEffect } from 'react'

const Auth = () => {
    return (
        <>
            <nav>
                <ul>
                    <li><a href="/auth/logout">Logout</a></li>
                    <li><a href="/auth/login">Login</a></li>
                    <li><a href="/">Homepage</a></li>

                </ul>
            </nav>
            <header>
                <h1> Login Using Google</h1>
            </header>
            <a herf="/auth/google">Google+</a>
        </>
        
    )
}

export default Auth