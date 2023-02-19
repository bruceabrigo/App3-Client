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
  
// let peopleCards = fcart.followings.map((people) => (
//     <Card key={people._id}>
//       <Card.Body>
//         {people}
//       </Card.Body>
//     </Card>
//   ));

// let peopleCards = fcart.followings.map((people) => (
//     <Card key={people._id}>
//       <Card.Body>
//         {people.name}
//       </Card.Body>
//     </Card>
//   ));
  
let peopleCards = fcart.followings.map((people) => (
    <Card key={people._id}>
      <Card.Body>
        {people.name} {/*or {people.email}, or any other property of the people object*/}
      </Card.Body>
    </Card>
  ));
  

  
  return (
    <div>
      <Card className='m-2'>
        <Card.Header></Card.Header>
        <Card.Body>
            <small>FOLLOW CART of the user</small> 
            No. of People you follow - {fcart.followings.length} <br />
            Owner Name: {fcart.owner} <br/>
            People names whome you are following - {peopleCards}
            
        </Card.Body>

      </Card>
    </div>
  )
}


export default ShowCart

