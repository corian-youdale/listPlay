import React, { useState, useEffect } from 'react'
import { consoleMe, getPlaylist, initClient, setAuth2 } from '../actions/youtube'

const SongSubmit = () => {
    const [ state, setState ] = useState({
        name: '',
        url: ''
    })

    useEffect (() => {
        console.log(window.gapi)
        setAuth2()
    },[])

    const handleChange = (e) => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }

    return (
            <form>
            <input value={state.name} name="name" onChange={handleChange}/>
            <input value={state.url} name="url" onChange={handleChange} />
        </form>
    )
}

export default SongSubmit