import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'
import { createAnime } from '../../api/animes'
import AnimeForm from '../shared/AnimeForm'
import { useNavigate } from 'react-router-dom'




const CreateAnime = (props) => {
    const navigate = useNavigate()
    const[anime, setAnime] = useState({title:'', description:'', genre:'', onGoing:false, yearOfRelease:'',imageOfAnime:'' })
    const {user} = props

const handleChange = (e) => {
    e.persist()

    setAnime(prevAnime => {
        const name = e.target.name
        let value = e.target.value

        if (name === 'On-Going' && !e.target.checked){
            value = false
        }

        if (e.target.type === 'number') {
            value = parseInt(e.target.value)
        }
        const updatedValue = { [name]: value }

        return {...prevAnime, ...updatedValue}
    })
}


const handleSubmit = (e) => {
    e.preventDefault()

    createAnime(user,anime)
        .then(res=> 
            {navigate(`/animes/${res.data.anime.id}`)})
        .catch(console.error)
}

return (
    <AnimeForm
        anime={anime}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        heading='Add a new Anime'
    />
    )

}

export default CreateAnime