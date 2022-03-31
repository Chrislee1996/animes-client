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

//POST -> create function
export const createAnime = (user, newAnime) => {
    return axios({
        url:`${apiUrl}/animes`,
        method:'POST',
        headers:{
            Authorization: `Token token=${user.token}`
        },
        data:{anime: newAnime}
    })
}


//PATCH -> update function
export const updateAnime = (user, updatedAnime) => {
    return axios({
        url:`${apiUrl}/animes/${updatedAnime.id}`,
        method:'PATCH',
        headers:{
            Authorization: `Token token=${user.token}`
        },
        data:{anime: updatedAnime}
    })
}

//DELETE -> Delete function
export const removeAnime = (user, animeId) => {
    return axios({
        url:`${apiUrl}/animes/${animeId}`,
        method:'DELETE',
        headers:{
            Authorization: `Token token=${user.token}`
        }
    })
}