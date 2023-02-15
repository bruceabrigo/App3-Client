import apiUrl from '../apiConfig'
import axios from 'axios'

export const signUp = (credentials) => {
	return axios({
		method: 'POST',
		url: apiUrl + '/sign-up',
		data: {
			credentials: {
				email: credentials.email,
				password: credentials.password,
				password_confirmation: credentials.passwordConfirmation,
			},
		},
	})
}

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

export const signOut = (user) => {
	return axios({
		url: apiUrl + '/sign-out',
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

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

export const getComments = async () => {
	return [
		{
			id: "1",
			userId: "1",
			postId: "1",
			body: "some comment",
			createdAt: "2020-10-10T00:00:00.000Z",
		}
	]
}

export const createComment = async (text, parentId = null) => {
	return {
	  id: Math.random().toString(36).substr(2, 9),
	  body: text,
	  parentId,
	  userId: "1",
	  username: "John",
	  createdAt: new Date().toISOString(),
	}
}	

export const updateComment = async (text, id) => {
	return { text }
}	


export const deleteComment = async (id) => {
	return {}
}