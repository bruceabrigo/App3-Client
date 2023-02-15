import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllContent = () => {
    return axios(`${apiUrl}/content/`)
}