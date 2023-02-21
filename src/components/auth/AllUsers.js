
import React from 'react'
import { allUser } from '../../api/auth'
import { useState, useEffect } from 'react'
import LoadingScreen from '../shared/LoadingScreen'
import { Card, Container, Button, Col } from "react-bootstrap"
import { followings } from '../../api/followCart'
import { followers } from '../../api/followCart'
import Row from 'react-bootstrap/Row'
import { useNavigate } from 'react-router-dom'



function AllUsers(props) {

    const {user, fcart} = props
    const [users, setUsers] = useState(null)
    console.log(`F cart`, fcart)
    const nav = useNavigate()

    useEffect(()=> {
    // Making API CAll
        allUser()
            .then(res=> setUsers(res.data.users))

    }, [])

    console.log(`ALL USERS`, users)
   
    // Loading screen function

    if(!users) {
        return <LoadingScreen/>
    } else if(users.length === 0) {
        return <p>Create post or follow new users!</p>
    }

    const cardStyle = {
          display: 'inline-block',
          justifyContent: 'center',
          flexFlow: 'row wrap',
          width: '18rem',
          transitionDuration: '0.4s'
    }

    const textStyle = {
        textAlign: 'center',
        
        // color: 'black',
        // border: 'none',
        // padding: '10px 20px',
        // borderRadius: '5px',
        // fontSize: '16px',
        // transitionDuration: '0.4s'
  
    }
    const allUsersContainer = users.map(all => (
      <Col key={all._id} >
        <Card style={cardStyle} className='mb-4'>
          <Card.Img variant="top" src={all.profilePicture} />
          <Card.Body className='me-3'>
            <Card.Title>Name: {all.name}</Card.Title>
            <Card.Text>
              Profession: {all.description}
            </Card.Text>

            <Card.Footer>
            <small className="text-muted">Last seen {new Date().toLocaleDateString('en-GB', {year: 'numeric', month: '2-digit', day: '2-digit'})}</small>

            </Card.Footer>

                { fcart && fcart.followings.includes(all._id) ? (
                <Button>Following</Button>
                ) : (
                <div className="text-center">
                    <Button style={textStyle} onClick={() => followings(fcart, user._id, all._id)}>
                    Follow
                    </Button>
                </div>
                )}
          </Card.Body>
        </Card>
      </Col>
    ))

    return (
      <div>
        <h1 style={textStyle}>ALL USERS</h1>
        <Container>
          <Row>{allUsersContainer}</Row>
        </Container>
      </div>
    )
}


export default AllUsers
