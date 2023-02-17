import apiUrl from '../apiConfig'
import axios from 'axios'

// Making calls to Backend - API Calls

//=============================== SHOW ONE FOLLOW Cart ===================================


export const userFollowCart = (id, fcart) => {
    return axios({
        method:'GET',
        url: `${apiUrl}/follow/owner/${id}`,
        data: { fcart: fcart}
    })
} 

//================ ADDING PEOPLE AS MY FOLLOWERS ===================================
export const followMe = (fcart, user, anUserId) => {
    return axios({
      url: `${apiUrl}/follow/${user}/${anUserId}`,
      method: 'GET',
      data: { fcart: fcart}
    });
  };

//====================== FOLLOW OTHERS =============

  export const followOthers = (fcart, user, anUserId) => {
    return axios({
        url: `${apiUrl}/${user}/${anUserId}`,
        method: 'GET',
        data: { fcart: fcart}
    })
  }

