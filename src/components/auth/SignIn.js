import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { signIn } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './SignIn.scss'

const SignIn = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const navigate = useNavigate()

	const onSignIn = (event) => {
		event.preventDefault()
        console.log('the props', props)
		const { msgAlert, setUser, user } = props
        console.log(`++PROPS SIGN IN++`, props)

        const credentials = {email, password}

		signIn(credentials)
			.then((res) => setUser(res.data.user))
			.then(() =>
				msgAlert({
					heading: 'Sign In Success',
					message: messages.signInSuccess,
					variant: 'success',
				})
			)
<<<<<<< HEAD
			// .then(() => navigate('/:userId'))
            .then(()=> navigate(`/profile`))
            // .then(()=> navigate('/update'))
=======
			.then(() => navigate('/view-profile'))
>>>>>>> main
			.catch((error) => {
                setEmail('')
                setPassword('')
				msgAlert({
					heading: 'Sign In Failed with error: ' + error.message,
					message: messages.signInFailure,
					variant: 'danger',
				})
			})
	}

    return (
        <div className='login'>
            <div className='login-card'>
                <div className='left'>
                    <h1>Welcome Back!</h1>
                    <p>I hope you enjoyed your time away! But we think you should come back to the web!</p>
                </div>
                    <div className='right'>
                        <h1>Sign In</h1>
                        <Form onSubmit={onSignIn}>
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
                            <Button className='mt-2' variant='primary' type='submit'>
                                Submit
                            </Button>
                        </Form>
                    </div>
            </div>
        </div>
    )
}

export default SignIn
