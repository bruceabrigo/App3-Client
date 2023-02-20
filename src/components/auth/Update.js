

import { useState, useEffect } from "react";
import LoadingScreen from "../shared/LoadingScreen";
// import { Link } from "react-router-dom";
import { userProfile, signUp } from "../../api/auth";
import messages from '../shared/AutoDismissAlert/messages'
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { updateProfile } from "../../api/auth";
import React from "react";
import Profile2 from "./Profile2";




const Update = (props) => {

    const nav = useNavigate()
    const { msgAlert, user, onChange, onSubmit } = props;
    console.log(`UPDATE PAGE PROPS`, props)
    console.log(`UPDATE PAGE -- props.user---`, props.user)

    return(
        <>
            UPDATE USER ID

            <div className='col-sm-10 col-md-8 mx-auto mt-5'>
                <h3>UPDATE</h3>
                <Form onSubmit={onSubmit}>

                    <Form.Group controlId='email'>
                        <Form.Label>*Email address</Form.Label>
                        <Form.Control
                            
                            name='email'
                            value={user.email}
                            placeholder='Enter email'
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            
                            name='name'
                            value={user.name}
                            placeholder='Enter name'
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='description'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            
                            name='description'
                            value={user.description}
                            placeholder='Enter description'
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>* Password</Form.Label>
                        <Form.Control
                            
                            name='password'
                            value={user.password}
                            placeholder='Enter password'
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='passwordConfirmation'>
                        <Form.Label>* Password Confirmation</Form.Label>
                        <Form.Control
                            
                            name='passwordConfirmation'
                            value={user.passwordConfirmation}
                            placeholder='Enter passwordConfirmation'
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='profilePicture'>
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control
                            
                            name='profilePicture'
                            value={user.profilePicture}
                            placeholder='Enter profilePicture'
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='coverPicture'>
                        <Form.Label>Cover Picture</Form.Label>
                        <Form.Control
                            
                            name='coverPicture'
                            value={user.coverPicture}
                            placeholder='Enter coverPicture'
                            onChange={onChange}
                        />
                    </Form.Group>

                
                    <Button variant='primary' type='submit'>
                        Submit
                    </Button>
                </Form>
            </div>


        </>
    )

}

export default Update



