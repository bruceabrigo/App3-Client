
import React from 'react'
// Import API Call
import { userProfile } from '../../api/auth'
import { useState, useEffect } from 'react'
import { Card, Container, Button } from "react-bootstrap"
import LoadingScreen from '../shared/LoadingScreen'
import { Link } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
import Update from './Update'
import { useNavigate } from 'react-router-dom'
// Render FollowCart Here
import ShowCart from '../FollowCart.js/ShowCart'

// Import teh child component


import App from '../../App'


import ListGroup from 'react-bootstrap/ListGroup'

const ShowProfile = (props) => {

 
  // Define user
  const nav = useNavigate()
  const { user, fcart } = props


  // console.log(`---------- USER PROP ---------`,props)

  console.log(`--SHOW PAGE PROPS ---`, props)


  const imgStyle= {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    maxHeight: '80rem',
  }

  

  if(!user){
    return <p> <LoadingScreen /> </p>
  }
  
  
  return (
    <>

<Card className="bg-dark text-white">
  <Card.Img 
    src='https://media.istockphoto.com/id/95340984/vector/colorful-background-rainbow-illustration.jpg?s=612x612&w=0&k=20&c=WJOGdCcwz6-zWVyIK2mmH4PtVHX1S02NYHlCtJPm3LA='
    alt="Card image" 
    style={{ objectFit: 'cover', maxHeight: '90vh', minHeight:'90vh' }}
  />
  <Card.ImgOverlay>
  <h3 style={{ color: 'black', fontSize: '50px', textAlign: 'center' }}>Welcome Back {user.name}</h3>

    
    <div className="d-grid gap-2">
  <Button style={{backgroundColor: '#8A9A5B'}} size="lg" onClick={()=> nav(`/user/${user._id}`)}>My Profile</Button>
  
  <Button style={{backgroundColor: '#8A9A5B'}} size="lg" onClick={()=> nav(`/followers/${user._id}`)}>Followers</Button>

  <Button style={{backgroundColor: '#8A9A5B'}} size="lg" onClick={()=> nav(`/users`)}>Other Profiles</Button>
  </div>
  </Card.ImgOverlay>
</Card>


      
    </>
  )
}

export default ShowProfile