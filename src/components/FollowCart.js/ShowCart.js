import React from 'react'
import {Card, Button} from 'react-bootstrap'

import { useParams } from 'react-router-dom'
import {  userFollowCart,followers, followings } from '../../api/followCart'
import { useState, useEffect } from 'react'
import LoadingScreen from '../shared/LoadingScreen'


function ShowCart(props) {

    const { user} = props
    console.log(`Show Cart Props`, props)
    const { userId } = useParams()
    const [fcart, setFCart] = useState({
        owner: null,
        followers: [{}],
        followings: []
  })

  
  // Use Effect + Finding the user Cart
  useEffect(()=> {
    // AXIOS -> to get user Cart
    userFollowCart(fcart, userId)
        .then((res)=> setFCart(res.data.fcart))

  }, [])

  // LOADING SCREEN
  if(!fcart){
    <LoadingScreen />
  } 

  console.log(`People you follow`, fcart.followings.length)
    
  // Showing each person the user is following

const cardStyle = {
    display: 'inline-block',
    justifyContent: 'center',
    flexFlow: 'row wrap',
    width: '18rem'
}
  //================== PEOPLE I FOLLOW ===================
let peopleIFollowCards = fcart.followings.map((people) => (
    <Card key={people._id} style={cardStyle}>
      <Card.Img variant="top" src={people.profilePicture} />
      <Card.Body>
      <Card.Title>Name: {people.name}
      </Card.Title>
        <Card.Text>
        Profession: {people.description}
        </Card.Text>
      </Card.Body>
    </Card>

    
  ));
  
  //===================== PEOPLE WHO ARE FOLLOWING ME ==========
  let myfollowersCards = fcart.followers.map((people) => (
    <Card key={people._id} style={cardStyle}>
      <Card.Img variant="top" src={people.profilePicture} />
      <Card.Body>
      <Card.Title>Name: {people.name}
      </Card.Title>
        <Card.Text>
        Profession: {people.description}
        </Card.Text>
      </Card.Body>
    </Card>
  ));

  const textStyle = {
    textAlign: 'center'
}

  
  return (
    <div>
        
      <Card className='m-2'>

        
        <h1 style={textStyle}>FOLLOWERS - {fcart.followers.length}</h1>
        <Card.Header></Card.Header>
        {myfollowersCards}
            

        <h1 style={textStyle}>PEOPLE I FOLLOW - {fcart.followings.length}</h1>
        <Card.Header></Card.Header>
        <Card.Body>
            {peopleIFollowCards}
            
        </Card.Body>

      </Card>

      
    </div>
  )
}


export default ShowCart

