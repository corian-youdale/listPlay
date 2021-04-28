import React, { useState } from 'react'

const SongSubmit = () => {
    const [ state, setState ] = useState({
        name: '',
        url: ''
    })

    object = {
        name:'',
        age: '',
    }

    const handleChange = (e) => {
        const { name, value } = e.target
        setState(prevState => ({
            ...prevState,
            [name]: value
        }))
    }


    return (
        <form>
            <h1>{state.name}</h1>
            <h1>{state.url}</h1>
            <input value={state.name} name="name" onChange={handleChange}/>
            <input value={state.url} name="url" onChange={handleChange} />
        </form>
    )
}

export default SongSubmit