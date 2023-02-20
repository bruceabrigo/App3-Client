<<<<<<< HEAD

=======
>>>>>>> main
import React from 'react'
import { allUser } from '../../api/auth'
import { useState, useEffect } from 'react'
import LoadingScreen from '../shared/LoadingScreen'
<<<<<<< HEAD
import { Card, Container, Button, Col } from "react-bootstrap"
import { followings } from '../../api/followCart'
import { followers } from '../../api/followCart'
import Row from 'react-bootstrap/Row'
import { useNavigate } from 'react-router-dom'

=======
import { Card, Container, Button} from "react-bootstrap"
import { followings } from '../../api/followCart'
import { followers } from '../../api/followCart'
>>>>>>> main


function AllUsers(props) {

    const {user, fcart} = props
    const [users, setUsers] = useState(null)
    console.log(`F cart`, fcart)
<<<<<<< HEAD
    const nav = useNavigate()
=======
>>>>>>> main

    useEffect(()=> {
    // Making API CAll
        allUser()
<<<<<<< HEAD
=======
            // .then(()=> setUsers())
>>>>>>> main
            .then(res=> setUsers(res.data.users))

    }, [])

    console.log(`ALL USERS`, users)
   
    // Loading screen function

    if(!users) {
        return <LoadingScreen/>
    } else if(users.length === 0) {
        return <p>Create post or follow new users!</p>
    }

<<<<<<< HEAD
    const cardStyle = {
          display: 'inline-block',
          justifyContent: 'center',
          flexFlow: 'row wrap',
          width: '18rem',
          transitionDuration: '0.4s'
    }

    const textStyle = {
        textAlign: 'center',
        
        // color: 'black',
        // border: 'none',
        // padding: '10px 20px',
        // borderRadius: '5px',
        // fontSize: '16px',
        // transitionDuration: '0.4s'
  
    }
    const allUsersContainer = users.map(all => (
      <Col key={all._id} >
        <Card style={cardStyle} className='mb-4'>
          <Card.Img variant="top" src={all.profilePicture} />
          <Card.Body className='me-3'>
            <Card.Title>Name: {all.name}</Card.Title>
            <Card.Text>
              Profession: {all.description}
            </Card.Text>

            <Card.Footer>
            <small className="text-muted">Last seen {new Date().toLocaleDateString('en-GB', {year: 'numeric', month: '2-digit', day: '2-digit'})}</small>

            </Card.Footer>

                { fcart && fcart.followings.includes(all._id) ? (
                <Button>Following</Button>
                ) : (
                <div className="text-center">
                    <Button style={textStyle} onClick={() => followings(fcart, user._id, all._id)}>
                    Follow
                    </Button>
                </div>
                )}
          </Card.Body>
        </Card>
      </Col>
    ))

    return (
      <div>
        <h1 style={textStyle}>ALL USERS</h1>
        <Container>
          <Row>{allUsersContainer}</Row>
        </Container>
      </div>
    )
=======

    const allUsersContainer = users.map(all => (
        <Card key={all._id}>
            <Card.Body>
                    <Card.Title>{all.name}</Card.Title>
                    All._id = {all._id}
                    fcart={fcart}

                    {/* {
                    fcart.followings.includes(all._id) 
                    ? 
                    (
                    <Button className='text-submit'>Following</Button>
                    ) : 
                    (
                    <Button
                        onClick={() => {
                        followings(fcart, user._id, all._id);
                        // .then(res=> console.log(`This is res`,res))
                        }}
                    >
                        Follow
                    </Button>
                    )} */}

                    
                    <Button
                        onClick={() => {
                        followings(fcart, user._id, all._id)
                        // followers(fcart, user._id, all._id)
                        // .then(res=> console.log(`This is res`,res))
                        }}
                    >
                        Follow
                    </Button>

            </Card.Body>


        </Card>
        
    ))
  return (


    <div>
        
       <Container>
            {allUsersContainer}
        </Container>
      
    </div>
  )
>>>>>>> main
}

export default AllUsers
