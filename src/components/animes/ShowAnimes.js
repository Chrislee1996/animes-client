import React, { useState, useEffect } from 'react'
import { Redirect, Link } from 'react-router-dom'


const ShowAnimes = (props) => {
    const [anime, setAnime] = useState(null)
    
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
