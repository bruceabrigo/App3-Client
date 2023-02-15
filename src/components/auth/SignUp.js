// import React, { Component } from 'react'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signUp, signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

const SignUp = (props) => {
	// SETTING UP USE STATE FOR EACH ITEM  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [profilePicture, setProfilePicture] = useState('')
    const [coverPicture, setCoverPicture] = useState('')
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [city, setCity] = useState('')
    const [active, setactive] =  useState('')




    const navigate = useNavigate()

	const onSignUp = (event) => {
		event.preventDefault()

		const { msgAlert, setUser } = props

        const credentials = {email, password, passwordConfirmation, name, description, profilePicture,
            coverPicture, city
        }

		signUp(credentials)
			.then(() => signIn(credentials))
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign Up Success',
					message: messages.signUpSuccess,
					variant: 'success',
				})
			)
            // Then Navigate to a path
			.then(() => navigate('/sign-in'))
			.catch((error) => {
                setEmail('')
                setPassword('')
                setPasswordConfirmation('')
				msgAlert({
					heading: 'Sign Up Failed with error: ' + error.message,
					message: messages.signUpFailure,
					variant: 'danger',
				})
			})
	}


    return (
        <div className='row'>
            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3>Sign Up</h3>
                <Form onSubmit={onSignUp}>

                <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            required
                            type='name'
                            name='name'
                            value={name}
                            placeholder='Enter name'
                            onChange={e => setName(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId='description'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            required
                            type='description'
                            name='description'
                            value={description}
                            placeholder='Description yourself'
                            onChange={e => setDescription(e.target.value)}
                        />
                    </Form.Group>


                    <Form.Group controlId='email'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required
                            type='email'
                            name='email'
                            value={email}
                            placeholder='Enter email'
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            required
                            name='password'
                            value={password}
                            type='password'
                            placeholder='Password'
                            onChange={e => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='passwordConfirmation'>
                        <Form.Label>Password Confirmation</Form.Label>
                        <Form.Control
                            required
                            name='passwordConfirmation'
                            value={passwordConfirmation}
                            type='password'
                            placeholder='Confirm Password'
                            onChange={e => setPasswordConfirmation(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId='profilePicture'>
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control
                            type='profilePicture'
                            name='profilePicture'
                            value={profilePicture}
                            placeholder='Add your photo'
                            onChange={e => setProfilePicture(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId='coverPicture'>
                        <Form.Label>Cover Picture</Form.Label>
                        <Form.Control
                            type='coverPicture'
                            name='coverPicture'
                            value={coverPicture}
                            placeholder='Add your photo'
                            onChange={e => setCoverPicture(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId='city'>
                        <Form.Label>City</Form.Label>
                        <Form.Control
                            type='city'
                            name='city'
                            value={city}
                            placeholder='Enter your city'
                            onChange={e => setCity(e.target.value)}
                        />
                    </Form.Group>

                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>
        </div>
    )

}

export default SignUp