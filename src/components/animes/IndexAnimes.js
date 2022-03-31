import React, {useState, useEffect } from 'react'
import { getAllAnimes } from '../../api/animes'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'

const cardContainerLayout = {
    display: 'flex',
    justifyContent: 'center',
    flexFlow: 'row wrap'
}

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

    let animeCards

    if (animes.length > 0) {
        animeCards = animes.map(anime => (
            <Card key={anime.id} style={{ width: '30%', border:"solid 1px"}} className="m-2 bg-dark text-info"  >
                <Card.Header>{anime.fullTitle}</Card.Header>
                <Card.Body>
                    <Card.Text>
                        <Link to ={`/animes/${anime.id}`}> <h4> {anime.titleAndYear} </h4></Link>
                        <Link to ={`/animes/${anime.id}`}><img src={`${anime.imageOfAnime}`} width='250' height='300'/></Link>
                        <p>{anime.genre}</p>
                    </Card.Text>
                </Card.Body>
            </Card>
        ))
    }

    return (
        <div className='bg-dark'>
            <h3 class='text-center'>Animes</h3>
            <div style={cardContainerLayout}>
                {animeCards}
            </div>
        </div>
    )
}


export default IndexAnimes    