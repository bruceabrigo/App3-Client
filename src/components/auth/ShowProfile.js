import React from 'react'
// Import API Call
import { userProfile } from '../../api/auth'
import { useState, useEffect } from 'react'
import { Card, Container, Button } from "react-bootstrap"
import LoadingScreen from '../shared/LoadingScreen'
import ListGroup from 'react-bootstrap/ListGroup'


const ShowProfile = (props) => {
    // Define user

    const { user } = props
    console.log(`---------- USER PROP ---------`,props)
    // // console.log(`User Name`, user.name)
    if(!user){
        return <p> <LoadingScreen /> </p>
    }
    
  
  
    return (
    <div>
      Show Profile
      Hello <br/>
    {user.description}
    {user.name}

    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.profilePicture} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
      
    </div>
  )
}

export default ShowProfile
