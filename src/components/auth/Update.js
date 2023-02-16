

import { useState, useEffect } from "react";
import LoadingScreen from "../shared/LoadingScreen";
// import { Link } from "react-router-dom";
import { userProfile, signUp } from "../../api/auth";
import messages from '../shared/AutoDismissAlert/messages'
import { Navigate, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { updateProfile } from "../../api/auth";




const Update = (props) => {

    const nav = useNavigate()

    // const { user } = props
    const { msgAlert, user} = props;
    console.log(`UPDATE PAGE PROPS`, props)

    // Setting the initial value of data
    const [data, setData] = useState({
        name: user.name,
        email: user.email,
        password: user.password,
        passwordConfirmation: user.passwordConfirmation,
        profilePicture: user.profilePicture,
        coverPicture: user.coverPicture,
        description: user.description,
        _id: user._id

    })

    // Update Variable for trigger refresh
    const [update, setUpdate] = useState(false)

    console.log(`------- USER-------`, user)
    console.log(`----Initial Data -------`, data)
    console.log(`---- Present User _Id---`, data._id)
    console.log(`===== USER ID =====`, user._id)
    // useEffect(()=> {
        
    // })

    const onChange = (e) => {
        e.persist()

            setData(prevData => {
            const updatedName = e.target.name
            const updatedValue = e.target.value

            let updatedUser = {
                [updatedName]: updatedValue
            }

            console.log(`----New Data----`, updatedUser)

            return{
                ...prevData, ...updatedUser
            }
        })
    }


    const onSubmit = (e) => {
        e.preventDefault()

        console.log(`--e--`,e.target.name)


            updateProfile(user, data)
                .then(() => {
                    console.log(`user Id`,user)
                    nav(`/${user._id}`)
                })
       
    }

    // Use Effect for Trigger Refresh
    // useEffect(()=> {
    //    setUpdate(!update)
    // }, [update])


    

 
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
                            value={data.email}
                            placeholder='Enter email'
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            
                            name='name'
                            value={data.name}
                            placeholder='Enter name'
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='description'>
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            
                            name='description'
                            value={data.description}
                            placeholder='Enter description'
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='password'>
                        <Form.Label>* Password</Form.Label>
                        <Form.Control
                            
                            name='password'
                            value={data.password}
                            placeholder='Enter password'
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='passwordConfirmation'>
                        <Form.Label>* Password Confirmation</Form.Label>
                        <Form.Control
                            
                            name='passwordConfirmation'
                            value={data.passwordConfirmation}
                            placeholder='Enter passwordConfirmation'
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='profilePicture'>
                        <Form.Label>Profile Picture</Form.Label>
                        <Form.Control
                            
                            name='profilePicture'
                            value={data.profilePicture}
                            placeholder='Enter profilePicture'
                            onChange={onChange}
                        />
                    </Form.Group>

                    <Form.Group controlId='coverPicture'>
                        <Form.Label>Cover Picture</Form.Label>
                        <Form.Control
                            
                            name='coverPicture'
                            value={data.coverPicture}
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



