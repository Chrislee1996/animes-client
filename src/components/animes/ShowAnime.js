import React, { useState, useEffect } from 'react'
import {showCurrentAnime} from '../../api/animes'
import {useParams} from 'react-router-dom'
import { Spinner,Container,Card} from 'react-bootstrap'



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

    return (
        <Container className='fluid'> 
            <Card className='text-info bg-dark'>
                <Card.Header>{anime.title}</Card.Header>
                <Card.Header><img src={`${anime.imageOfAnime}`} width='250' height='300'/></Card.Header>
                <Card.Header style={{position:"absolute",top:0, right:0}} >Synopsis: {anime.description}</Card.Header><br/>
                <Card.Body>
                    <Card.Text>
                        <small>Year of Release: {anime.yearOfRelease}</small><br/>
                        <small>Genre: {anime.genre}</small><br/>
                        <small>
                            Status:{anime.onGoing ? "On-Going" : 'Finished Airing'}
                        </small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>

    )
}


export default ShowAnime
