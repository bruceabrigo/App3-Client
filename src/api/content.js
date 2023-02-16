import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllContent = () => {
    return axios(`${apiUrl}/content`)
}

export const newPost = (user, createContent) => {
    console.log('this is the user in axios call: ', user)
    console.log('this is the newPet', createContent)
    return axios({
        url: `${apiUrl}/content/${user._id}`,
        method: 'POST',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: { content: createContent }
    })
}