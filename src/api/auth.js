import apiUrl from '../apiConfig'
import axios from 'axios'

// Making calls to Backend - API Calls

//--------------------- SIGN UP --------------------
export const signUp = (credentials) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/sign-up',
		data: {
			credentials: {
				email: credentials.email,
				password: credentials.password,
				password_confirmation: credentials.passwordConfirmation,
				name: credentials.name,
				profilePicture: credentials.profilePicture,
				coverPicture: credentials.coverPicture,
				description: credentials.description,
				active: credentials.active

			},
		},
	})
}

//--------------------- SIGN IN --------------------
export const signIn = (credentials) => {
	return axios({
		url: apiUrl + '/sign-in',
		method: 'POST',
		data: {
			credentials: {
				email: credentials.email,
				password: credentials.password,
			},
		},
	})
}

//--------------------- SIGN OUT --------------------
export const signOut = (user) => {
	return axios({
		url: apiUrl + '/sign-out',
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

//--------------------- SHOW ONE USER PROFILE --------------------

export const userProfile = (id) => {
	return axios(`${apiUrl}/user/${id}`)
}

//--------------------- INDEX USERS  --------------------

export const allUser = () => {
    return axios(`${apiUrl}/users`)
}
//--------------------- UPDATE PROFILE --------------------


export const updateProfile = (user, updatedUser) => {
	console.log(`---updatedProfile API --- userId`,updatedUser._id)
	return axios({
	  url: `${apiUrl}/update/${updatedUser._id}`, // Include userId in the URL
	  method: 'PATCH',
	  headers: {
		Authorization: `Token token=${user.token}`,
	  },
	  data: { credentials: updatedUser } // Use the correct key for the updated user object
	})
  }
  

//--------------------- CHANGE PASSWORD --------------------
export const changePassword = (passwords, user) => {
	return axios({
		url: apiUrl + '/change-password',
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
		data: {
			passwords: {
				old: passwords.oldPassword,
				new: passwords.newPassword,
				
			},
		},
	})
}
