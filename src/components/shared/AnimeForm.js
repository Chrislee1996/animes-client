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
                <Form.Control
                    placeholder="Anime name"
                    value={anime.description}
                    name='description'
                    onChange={handleChange}
            />
                <Form.Label>Genre</Form.Label>
                <Form.Control
                    placeholder="Anime name"
                    value={anime.genre}
                    name='genre'
                    onChange={handleChange}
            />
                <Form.Check
                    label='Is the anime on going?'
                    name='onGoing'
                    onChange={handleChange}
            />
                <Form.Label>Year Of Release</Form.Label>
                <Form.Control
                    placeholder="Year of Release"
                    value={anime.yearOfRelease}
                    name='yearOfRelease'
                    onChange={handleChange}
            />
                <Form.Label>Image of Anime</Form.Label>
                <Form.Control
                    placeholder="Image"
                    value={anime.image}
                    name='imageOfAnime'
                    onChange={handleChange}
            />
                <Button type='submit'>Submit</Button>
            </Form>
        </Container>
    )
}

export default AnimeForm