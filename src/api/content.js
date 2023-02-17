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
    console.log('Content to be Posted', createContent)
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
export const editPost = (user, updatedContent) => {
    return axios({
        url: `${apiUrl}/content/${updatedContent._id}`,
        method: 'PATCH',
        headers: {
            Authorization: `Token token=${user.token}`
        },
        data: {content: updatedContent}
    })
}

/* ---------------------- Delete Post ---------------------- */
export const deletePost = (user, contentId) => {
    return axios({
        url: `${apiUrl}/content/${contentId}`,
        method: 'DELETE',
        headers: {
            Authorization: `Token token=${user.token}`
        }
    })
}