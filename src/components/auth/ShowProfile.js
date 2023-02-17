
import React from 'react'
// Import API Call
import { userProfile } from '../../api/auth'
import { useState, useEffect } from 'react'
import { Card, Container, Button } from "react-bootstrap"
import LoadingScreen from '../shared/LoadingScreen'
import { Link } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
// Import teh child component

import App from '../../App'
import { useNavigate } from 'react-router-dom'



import ListGroup from 'react-bootstrap/ListGroup'



const ShowProfile = (props) => {

 
  // Define user
  const nav = useNavigate()
  const { user } = props

  // console.log(`---------- USER PROP ---------`,props)

  // console.log(`--SHOW PAGE PROPS ---`, props)


///////////////// Show One User ///////////////
// useEffect(()=> {
//   userProfile(user._id)
//       // .then(()=> nav(`/${user._id}`))
//       // .then(()=> triggerRefresh())
// }, [update])
// console.log(`Trigger Update`, update)
  


  if(!user){
    return <p> <LoadingScreen /> </p>
  }
  
  return (
    <>
      <Card>
        User Profile
        {user._id}
        <Card.Img id='imagecover' variant="top" src={user.coverPicture} />
      
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={user.profilePicture} />
          <Card.Body>
            <Card.Title>{user.name}</Card.Title>
            <Card.Text>
              {user.description}
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Location: {user.city}</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Link to={`/update/${user._id}`} >Update Details</Link> <br />
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Card>
      
    </>
  )
}

export default ShowProfile
