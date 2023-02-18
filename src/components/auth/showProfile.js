import React from 'react'
// Import API Call
import { userProfile } from '../../api/auth'
import { useState, useEffect } from 'react'
import { Card, Container, Button } from "react-bootstrap"
import LoadingScreen from '../shared/LoadingScreen'
import { Link } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
// Import teh child component
import Update from './Update'
import App from '../../App'
import { Navigate } from 'react-router-dom'


import ListGroup from 'react-bootstrap/ListGroup'
// import Update from './Update'


const ShowProfile = (props) => {

  const [update, setUpdate] = useState(false)
  // Define user
  // const nav = Navigate()
  const { user, triggerRefresh } = props

  // const [content, setContent] = useState(null)
  // console.log('Content in Show Profile: ', content)

  console.log(`---------- USER PROP ---------`,props)

  console.log(`--SHOW PAGE PROPS ---`, props)



  userProfile(user._id)
    .then(()=> Navigate(`${user._id}`))
    .then(()=> triggerRefresh())


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
            <Link onClick={() => setUpdate(true)}>Update Details</Link> <br />
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      </Card>
      {update && <div className="update-form-container"><Update user={user} triggerRefresh={() => setUpdate(false)} /></div>}
    </>
  )
}

export default ShowProfile
