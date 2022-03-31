import React, { useState, useEffect } from 'react'
import {showCurrentAnime} from '../../api/animes'
import {useParams} from 'react-router-dom'
import { Spinner,Container} from 'react-bootstrap'



const ShowAnime = (props) => {

    const [anime, setAnime] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        showCurrentAnime(id)
            .then(anime => {
                setAnime(anime.data.anime)
            })
            .catch(console.error)
    },[id])


    if(!anime) {
        return (
            <Container>
                <Spinner animation="border" role='status'>
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>

        )
    }

    return(
        <div>
        <h3>{anime.title}</h3>
        </div>

    )
}


export default ShowAnime
