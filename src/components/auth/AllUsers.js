import React from 'react'
import { allUser } from '../../api/auth'
import { useState, useEffect } from 'react'
import LoadingScreen from '../shared/LoadingScreen'
import { Card, Container, Button} from "react-bootstrap"
import { followings } from '../../api/followCart'
import { followers } from '../../api/followCart'


function AllUsers(props) {

    const {user, fcart} = props
    const [users, setUsers] = useState(null)
    console.log(`F cart`, fcart)

    useEffect(()=> {
    // Making API CAll
        allUser()
            // .then(()=> setUsers())
            .then(res=> setUsers(res.data.users))

    }, [])

    console.log(`ALL USERS`, users)
   
    // Loading screen function

    if(!users) {
        return <LoadingScreen/>
    } else if(users.length === 0) {
        return <p>Create post or follow new users!</p>
    }


    const allUsersContainer = users.map(all => (
        <Card key={all._id}>
            <Card.Body>
                    <Card.Title>{all.name}</Card.Title>
                    All._id = {all._id}
                    fcart={fcart}

                    {/* {
                    fcart.followings.includes(all._id) 
                    ? 
                    (
                    <Button className='text-submit'>Following</Button>
                    ) : 
                    (
                    <Button
                        onClick={() => {
                        followings(fcart, user._id, all._id);
                        // .then(res=> console.log(`This is res`,res))
                        }}
                    >
                        Follow
                    </Button>
                    )} */}

                    
                    <Button
                        onClick={() => {
                        followings(fcart, user._id, all._id)
                        // followers(fcart, user._id, all._id)
                        // .then(res=> console.log(`This is res`,res))
                        }}
                    >
                        Follow
                    </Button>

            </Card.Body>


        </Card>
        
    ))
  return (


    <div>
        
       <Container>
            {allUsersContainer}
        </Container>
      
    </div>
  )
}





export default AllUsers

