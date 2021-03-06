import React, { useState, useEffect } from 'react'
import {showCurrentAnime, updateAnime, removeAnime} from '../../api/animes'
import {useParams, useNavigate} from 'react-router-dom'
import { Spinner,Container,Card, Button} from 'react-bootstrap'
import EditAnimesModel from './EditAnimesModel'



const ShowAnime = (props) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [updated, setUpdated] = useState(false)
    const [anime, setAnime] = useState(null)
    const {id} = useParams()
    const navigate = useNavigate()
    const {user,msgAlert} = props


    useEffect(() => {
        showCurrentAnime(id)
            .then(anime => {
                setAnime(anime.data.anime)
            })
            .catch(console.error)
    },[updated])


    const deleteAnime = () => {
        removeAnime(user, anime.id)
        .then(() => {
            msgAlert({
                heading: 'Anime Removed!',
                message: 'Anime Successfully deleted',
                variant: 'success',
            })
        })
            .then(()=> {navigate('/')})
            .catch(() => {
                msgAlert({
                    heading: 'Something Went Wrong',
                    message: 'Unable to delete',
                    variant: 'danger',
                })
            })
    }

    if(!anime) {
        return (
            <Container>
                <Spinner animation="border" role='status'>
                <span className="visually-hidden">Loading...</span>
                </Spinner>
            </Container>

        )
    }
    // style={{position:"absolute",top:50 , right:0}}
    return (
        <>
        <Container className='fluid'> 
            <Card className='text-info bg-dark'>
                <Card.Header className="display-4">{anime.title}</Card.Header>
                <h6 style={{position:"absolute",top:100, right:0}}>Genre: {anime.genre}</h6><br/>
                <h6 style={{position:"absolute",top:150, right:0}}>Status:{anime.onGoing ? 'Still Airing' : 'Finished Airing'}</h6>
                <h6 style={{position:"absolute",top:200 , right:0}}>Year of Release: {anime.yearOfRelease}</h6><br/>
                <Card.Header><img src={`${anime.imageOfAnime}`} width='250' height='300'/></Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Card.Header>Synopsis: {anime.description}</Card.Header><br/>
                    </Card.Text>
                        <Button onClick={() => setModalOpen(true)} className="m-2" variant="warning">
                            Edit Anime
                        </Button>
                        {/* delete button */}
                        <Button onClick={() => deleteAnime()} className="m-2" variant="danger">
                            Delete Anime
                        </Button>
                </Card.Body>
            </Card>
        </Container>
        <EditAnimesModel 
                anime={anime}
                show={modalOpen}
                user={user}
                triggerRefresh={() => setUpdated(prev => !prev)}
                updateAnime={updateAnime}
                handleClose={() => setModalOpen(false)}
            />
        </>
        
    )
}


export default ShowAnime
