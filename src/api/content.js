import apiUrl from '../apiConfig'
import axios from 'axios'

export const getAllContent = () => {
    return axios(`${apiUrl}/content`)
}

/* ---------------------- Show One Content ---------------------- */
export const showContent = (id) => {
    return axios(`${apiUrl}/content/${id}`)
}

/* ---------------------- Create ---------------------- */
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

/* ---------------------- Update ---------------------- */
export const editPost = (user, updatedCharacter) => {
    return axios({
        url: `${apiUrl}/characters/${updatedCharacter._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {character: updatedCharacter}
    })
}

/* ---------------------- Delete Post ---------------------- */
export const deletePost = (user, contentId) => {
    return axios({
        url: `${apiUrl}/characters/${contentId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}
