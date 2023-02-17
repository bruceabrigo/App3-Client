import React from 'react'
import {Card, Button} from 'react-bootstrap'

import { useParams } from 'react-router-dom'
import { userFollowCart, followMe } from '../../api/followCart'
import { useState } from 'react'


function ShowCart(props) {

    const { user} = props
    console.log(`Show Cart Props`, props)
    const { userId, anUserId } = useParams()
    const [fcart, setFCart] = useState({
        owner: '',
        followers: [],
        followings: []
  })


    // Make axios call
    followMe(userId, anUserId)
        .then((res)=> console.log(`This is res in folloeCart`,res))
        



  return (
    <div>
      <Card className='m-2'>
        <Card.Header></Card.Header>
        <Card.Body>
            <small>FOLLOW CART</small>
        </Card.Body>

      </Card>
    </div>
  )
}


export default ShowCart

