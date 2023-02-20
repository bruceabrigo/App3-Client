import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

import { changePassword } from '../../api/auth'
import messages from '../shared/AutoDismissAlert/messages'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './ChangePassword.scss'

const ChangePassword = (props) => {
  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [name, setName] = useState('')

  const navigate = useNavigate()

  const onChangePassword = (event) => {
    event.preventDefault()

    const { msgAlert, user } = props
    console.log('the user', user)

    const passwords = { oldPassword, newPassword, name }

    changePassword(passwords, user)
      .then(() =>
        msgAlert({
          heading: 'Change Password Success',
          message: messages.changePasswordSuccess,
          variant: 'success',
        })
      )
      .then(() => navigate('/'))
      .catch((error) => {
        setOldPassword('')
        setNewPassword('')
        msgAlert({
          heading: 'Change Password Failed with error: ' + error.message,
          message: messages.changePasswordFailure,
          variant: 'danger',
        })
      })
  }

  return (
    <>
        <div className='change-password'>
            <div className='password-card'>
                <div className='left'>
                    <h1>Yeah, we're judging...</h1>
                    <p>Looks like you made a terrible password... Don't worry, you can change it! Fill out the form to change your password, and you'll be on your way. </p>
                </div>
                <div className='right'>
                    <h3>Change Password</h3>
                    <Form onSubmit={onChangePassword}>
                    <Form.Group controlId='oldPassword'>
                        <Form.Label>Old password</Form.Label>
                        <Form.Control
                        required
                        name='oldPassword'
                        value={oldPassword}
                        type='password'
                        placeholder='Old Password'
                        onChange={(e) => setOldPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='newPassword'>
                        <Form.Label>New Password</Form.Label>
                        <Form.Control
                        required
                        name='newPassword'
                        value={newPassword}
                        type='password'
                        placeholder='New Password'
                        onChange={(e) => setNewPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                        required
                        name='name'
                        value={name}
                        type='text'
                        placeholder='Name'
                        onChange={(e) => setName(e.target.value)}
                        />
                    </Form.Group>
                    <Button className='mt-3' variant='primary' type='submit'>
                        Submit
                    </Button>
                    </Form>
                </div>
            </div>
        </div>
    </>
  )
}

export default ChangePassword
