

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

    // const { user } = props
    const { msgAlert, user, onChange, onSubmit } = props;
    console.log(`UPDATE PAGE PROPS`, props)

    // Setting the initial value of user
    // const [user, setuser] = useState({
    //     name: user.name,
    //     email: user.email,
    //     password: user.password,
    //     passwordConfirmation: user.passwordConfirmation,
    //     profilePicture: user.profilePicture,
    //     coverPicture: user.coverPicture,
    //     description: user.description,
    //     _id: user._id

    // })

    // Update Variable for trigger refresh
    

    // console.log(`------- USER-------`, user)
    // console.log(`----Initial user -------`, user)
    // console.log(`---- Present User _Id---`, user._id)
    // console.log(`===== UPDATE PROPS =====`, PROPS)
    // useEffect(()=> {
        
    // })

    // const onChange = (e) => {
    //     e.persist()

    //         setuser(prevuser => {
    //         const updatedName = e.target.name
    //         const updatedValue = e.target.value

    //         let updatedUser = {
    //             [updatedName]: updatedValue
    //         }

    //         console.log(`----New user----`, updatedUser)

    //         return{
    //             ...prevuser, ...updatedUser
    //         }
    //     })
    // }


    // const onSubmit = (e) => {
    //     e.preventDefault()

    //     console.log(`--e--`,e.target.name)


    //         updateProfile(user, user)
                
    //             .then(() => {
    //                 console.log(`user Id`,user)
    //                 nav(`/user/${user._id}`)
    //             })
    //             // Create a trigger Refresh in the parent component (wher it is rendered)
    //             // That is the updates here are rendered in Show Profile
    //             // So we need to build it in the parent
    //             // .then(()=> triggerRefresh())
                    
       
    // }



 
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


