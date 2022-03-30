import React, {useState, useEffect } from 'react'
import { getAllAnimes } from '../../api/animes'

const IndexAnimes = (props) => {
    const [animes, setAnimes] = useState(null)

    useEffect(() => {
        getAllAnimes()
            .then(res=> {
                setAnimes(res.data.animes)
            })
            .catch(console.error)
    },[])


    if (!animes) {
        return <p>loading...</p>
    } else if (animes.length === 0) {
        return <p>No animes to display. Go Create some</p>
    }

    let animesJsx

    if (animes.length > 0) {
        animesJsx = animes.map(anime => (
            <li key={anime.id}>
                <h4> {anime.titleAndYear} </h4>
                <img src={`${anime.imageOfAnime}`} width='200'/>
                <h6>{anime.status} </h6> 
            </li>
        ))
    }

    return (
        <>
            <h3 class='text-center'>Animes</h3>
            <ol>
                {animesJsx}
            </ol>
        </>
    )
}


export default IndexAnimes    