
import React from 'react'
// Import API Call
import { userProfile } from '../../api/auth'
import { useState, useEffect } from 'react'
import { Card, Container, Button } from "react-bootstrap"
import LoadingScreen from '../shared/LoadingScreen'
import { Link } from 'react-router-dom'
import messages from '../shared/AutoDismissAlert/messages'
// Render FollowCart Here
import ShowCart from '../FollowCart.js/ShowCart'
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


  

  if(!user){
    return <p> <LoadingScreen /> </p>
  }
  
  return (
    <>
      <Link to={`/update/${user._id}`}>Update Profile</Link><br/>
      <Link to={`/user/${user._id}`}>view Profile</Link><br/>
      <Link to={`/follow/${user._id}`}>Followers</Link>

      
      
    </>
  )
}

export default ShowProfile
