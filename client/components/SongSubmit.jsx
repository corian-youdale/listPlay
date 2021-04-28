import React, { useState, useEffect } from 'react'
import { consoleMe } from '../actions/youtube'

const SongSubmit = () => {
    const [ state, setState ] = useState({
        name: '',
        url: ''
    })

    useEffect (() => {
        console.log(window.gapi)
        // consoleMe()
       
            window.gapi.auth2({
                client_id: process.env.CLIENT_ID
            }).then(() => {
                window.gapi.signin2.render('my-signIn', {
                  'scope': 'profile email',
                  'width': 250,
                  'height': 50,
                  'longtitle': false,
                  'theme': 'dark',
                  'onsuccess': this.onSuccess,
                  'onfailure': this.onFailure
                })
              }) 
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