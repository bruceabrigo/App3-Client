import apiUrl from '../apiConfig'
import axios from 'axios'

// Making calls to Backend - API Calls

//=============================== SHOW ONE FOLLOW Cart ===================================


// export const userFollowCart = (id, fcart) => {
//     return axios({
//         method:'GET',
//         url: `${apiUrl}/follow/owner/${id}`,
//         data: { fcart: fcart}
//     })
// } 

export const userFollowCart = (fcart, id)=> {
    return axios({
        method: 'GET',
        url: `${apiUrl}/follow/owner/${id}`,
        data: {fcart: fcart}
    })
}



//====================== FOLLOW OTHERS =============

  export const followings = (fcart, user, anUserId) => {
    return axios({
        url: `${apiUrl}/follow/${user}/${anUserId}`,
        method: 'GET',
        data: { fcart: fcart}
    })
  }

