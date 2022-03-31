import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllAnimes = () => {
    return axios(`${apiUrl}/animes`)
}

//show function
export const showCurrentAnime = (animeId) => {
    console.log('this is the anime Id',animeId )
    return axios(`${apiUrl}/animes/${animeId}`)
}