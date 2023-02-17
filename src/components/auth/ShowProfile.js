import React from 'react'
// Import API Call
import { userProfile } from '../../api/auth'
import { useState, useEffect } from 'react'
import { Card, Container, Button } from "react-bootstrap"
import LoadingScreen from '../shared/LoadingScreen'
import { Link } from 'react-router-dom'
import Update from './Update'

import ListGroup from 'react-bootstrap/ListGroup'
// import Update from './Update'


const ShowProfile = (props) => {
    // Define user

    const { user } = props
    console.log(`---------- USER PROP ---------`,props)
    // // console.log(`User Name`, user.name)
    if(!user){
        return <p> <LoadingScreen /> </p>
    }
    
    // const [update, setUpdate] = useState(false)
// 
  
  
    return (
    <div>
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

      <Link to={`/update/${user._id}`}>Update Details</Link> <br />
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>

      
     
    </Card>
    </Card>
      
    </div>
  )
}

export default ShowProfile
