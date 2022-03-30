import apiUrl from '../apiConfig'
import axios from 'axios'

// index function
export const getAllAnimes = () => {
    return axios(`${apiUrl}/animes`)
}
