import React, { useState, useEffect } from 'react'
import {showCurrentAnime} from '../../api/animes'
import {useParams} from 'react-router-dom'


const ShowAnimes = (props) => {
    const [anime, setAnime] = useState(null)
    const {animeId} = useParams()

    useEffect(() => {
        console.log('anime id:', animeId)
        showCurrentAnime(animeId)
            .then(anime => {
                setAnime(anime.data.anime)
            })
            .catch(console.error)
    },[])

    if (!anime) {
        return <p>loading...</p>
    } 

    return(
        <div>
            <h1>testing</h1>
        <h3>{anime.title}</h3>
        </div>

    )
}


export default ShowAnimes
