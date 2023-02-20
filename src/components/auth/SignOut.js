import { useNavigate } from 'react-router-dom'

import {Button, ButtonGroup} from 'react-bootstrap'

import { signOut } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'
import './SignOut.scss'
const SignOut = (props) => {
	const { msgAlert, clearUser, user } = props
    console.log(props)

    const navigate = useNavigate()

    const onSignOut = () => {
		signOut(user)
			.finally(() =>
				msgAlert({
					heading: 'Signed Out Successfully',
					message: messages.signOutSuccess,
					variant: 'success',
				})
			)
			.finally(() => navigate('/'))
			.finally(() => clearUser())
    }

    const onCancel = () => {
        navigate('/')
    }

	return (
		<>
            <div className='logout'>
                <div className='logout-card'>
                    <div className='left'>
                        <h1>We hate to see you go!</h1>
                        <p>Are you sure you want to leave paradise?</p>
                    </div>
                    <div className='right'>
                        <h2>Are you sure you want to sign out?</h2>
                        <small>We hate to see you go...</small><br/>
                        <ButtonGroup>
                            <Button className='m-1' variant='dark' onClick={onSignOut}>
                                Sign Out
                            </Button>
                            <Button className='m-1' variant='success' onClick={onCancel}>
                                Cancel
                            </Button>
                        </ButtonGroup>
                    </div>
                </div>
            </div>
		</>
	)
}

export default SignOut
