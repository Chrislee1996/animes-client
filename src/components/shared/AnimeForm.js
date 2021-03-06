import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'


const AnimeForm = (props) => {
    const {anime, handleChange, handleSubmit, heading} = props

    return (
        <Container className="justify-content-center">
            <h3>{heading}</h3>

            <Form onSubmit={handleSubmit}>
                <Form.Label>Name of Anime</Form.Label>
                <Form.Control
                    placeholder="Anime name"
                    value={anime.title}
                    name='title'
                    onChange={handleChange}
            />
                <Form.Label>Description of Anime</Form.Label>
                <Form.Control as='textarea'
                    placeholder="Description of Anime"
                    value={anime.description}
                    name='description'
                    onChange={handleChange}
            />
                <Form.Label>Genre</Form.Label>
                <Form.Control
                    placeholder="Genre"
                    value={anime.genre}
                    name='genre'
                    onChange={handleChange}
            />
                <Form.Label>Year Of Release</Form.Label>
                <Form.Control
                    type='number'
                    placeholder="Year of Release"
                    value={anime.yearOfRelease}
                    name='yearOfRelease'
                    onChange={handleChange}
            />
                <Form.Check
                    label='Is the Anime still on Air?'
                    name='onGoing'
                    defaultChecked={anime.onGoing}
                    onChange={handleChange}
            />
                <Form.Label>Enter Url of Anime</Form.Label>
                <Form.Control
                    type='url'
                    placeholder="Image"
                    value={anime.imageOfAnime}
                    name='imageOfAnime'
                    onChange={handleChange}
            />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default AnimeForm