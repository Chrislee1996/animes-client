import React, {useState, useEffect } from 'react'
import { getAllAnimes } from '../../api/animes'
import { Link } from 'react-router-dom'



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
            <div key={anime._id}>
                <div class="card, text-info bg-dark" style={{width:"30em", border:"solid 1px"}}>
                    <div class ='card-header'> 
                        <Link to = {`/animes/${anime.id}`}> <h4 class="card-title"> {anime.titleAndYear}</h4> </Link>
                        <div class='card-body'>
                            <div class='card-title'>
                                <Link to = {`/animes/${anime.id}`}> <img src={`${anime.imageOfAnime}`}  width='250' height='300' /></Link>
                                <h5 class='card-text'>{anime.status} </h5> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ))
    }

    return (
        <>
            <h3 class='text-center'>Animes</h3>
            <div class ="card-group">
                {animesJsx}
            </div>
        </>
    )
}


export default IndexAnimes    