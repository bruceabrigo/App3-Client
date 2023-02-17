import React from 'react'
import { useState, useEffect } from 'react'
import { userProfile } from '../../api/auth'
import { useParams } from 'react-router-dom'
import Update from './Update'
import { Card } from 'react-bootstrap'
import ListGroupItem from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const Profile2 = (props) => {

    const {user, triggerRefresh, updated} = props
    const [userid, setUserid] = useState(null)
    const { userId } = useParams()

    console.log(`PROFILE 2 PROPS`, props)
    

    useEffect(()=> {
        userProfile(userId)
            .then((res)=> setUserid(res.data.user._id))
            .then(()=> triggerRefresh())



    }, [updated])


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
            <Link to={`/update/${user._id}`} >Update Details</Link> <br />
            <Link to={`/profile`}>view Profile</Link>
          </Card.Body>
        </Card>
      </Card>

    </div>
  )
}

export default Profile2
