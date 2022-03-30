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
                {anime.title}
            </li>
        ))
    }

    return (
        <>
            <h3>Animes</h3>
            <ul>
                {animesJsx}
            </ul>
        </>
    )
}


export default IndexAnimes    