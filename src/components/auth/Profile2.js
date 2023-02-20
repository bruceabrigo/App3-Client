import React from 'react'
import { useState, useEffect } from 'react'
import { userProfile } from '../../api/auth'
import { useParams } from 'react-router-dom'
import Update from './Update'
import { Button, Card } from 'react-bootstrap'
import ListGroupItem from 'react-bootstrap'
import { ListGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Modal } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { updateProfile } from '../../api/auth'
import LoadingScreen from '../shared/LoadingScreen'



<<<<<<< HEAD

=======
>>>>>>> main
const Profile2 = (props) => {

  const nav = useNavigate()
    const { triggerRefresh, update, data} = props
    const [userid, setUserid] = useState(null)
    const { userId } = useParams()
    const [ user, setUser ] = useState(props.user)
    const [updated, setUpdated] = useState(false)

    console.log(`PROFILE 2 PROPS`, props)
    

    useEffect(()=> {
        userProfile(userId)
            .then((res)=> setUserid(res.data.user._id))
            .then(()=> triggerRefresh())
    }, [user])

    // useEffect(()=> {
    //   setUser(props.user)
    // }, [updated])

    //////////// SHOW ///////////////
    const [show, setShow] = useState(false)


    /////////// HANDLE CLOSE ///////////
    const handleClose = () => setShow(false)



    ///////////////////////////////
    const onChange = (e) => {
      e.persist()

          setUser(prevData => {
          const updatedName = e.target.name
          const updatedValue = e.target.value

          let updatedUser = {
              [updatedName]: updatedValue
          }

          console.log(`----New Data----`, updatedUser)

          return{
              ...prevData, ...updatedUser
          }
      })
  }


  const onSubmit = (e) => {
      e.preventDefault()

      console.log(`--e--`,e.target.name)


          updateProfile(props.user, user)
              
              .then(() => {
                  console.log(`user Id`,user)
                  handleClose()
              })
<<<<<<< HEAD
=======
              // Create a trigger Refresh in the parent component (wher it is rendered)
              // That is the updates here are rendered in Show Profile
              // So we need to build it in the parent
>>>>>>> main
              .then(()=> setUpdated(prev=> !prev))
                  
     
  }
<<<<<<< HEAD
  const imgStyle= {
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    height: '100%',
    maxHeight: '90rem',
    minHeight: '90'
  }
=======
>>>>>>> main



  if (!user) {
    return <LoadingScreen/>
}
  return (
<<<<<<< HEAD
    <>
    <Card className="bg-dark text-white">
  <Card.Img 
    src={user.coverPicture}
    alt="Card image" 
    style={{ objectFit: 'cover', maxHeight: '90vh', minHeight:'90vh' }}
  />
  <Card.ImgOverlay>

  <div style={{ display: 'flex', flexDirection: 'row', justifyContent:'center' }}>
      <Card>
        
        <Card style={{ width: '18rem'}}>
        <Card.Body style={{textAligh: 'left'}}>
          <Card.Img variant="top" src={user.profilePicture} />
          <h1 style={{color: 'black',  textAlign:'center' }}>{user.name}</h1>
            <Card.Text>
             Profession:  {user.description}
            </Card.Text>
          
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Location: {user.city}</ListGroup.Item>
            <ListGroup.Item>Email: {user.email}</ListGroup.Item>
            <ListGroup.Item>Profession: {user.description}</ListGroup.Item>
            
            <Link to='/' style={{textAlign: 'center'}}>View All Post</Link>
            
          </ListGroup >
          </Card.Body>
          
        </Card>
        <Button style={{backgroundColor: 'red'}} onClick={()=> setShow(true)}>Update Profile</Button>
      </Card>

      
    
=======
    <div>
      <Card>
        User Profile 2
        {props.user._id}
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
        <Button onClick={()=> setShow(true)}></Button>
      </Card>

>>>>>>> main




      <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton closeVariant='white' id='edit-file-header'>
                    <Modal.Title>Edit File Details</Modal.Title>
                </Modal.Header>
                <Modal.Body id='edit-file-body'>
                    <Update
                        user={user}
                        onChange={onChange}
                        onSubmit={onSubmit}
                        heading={'anything you want'}
                    />
                </Modal.Body>
            </Modal>

    </div>
<<<<<<< HEAD
  
  </Card.ImgOverlay>
</Card>


    
    </>
  )
}

export default Profile2
=======
  )
}

export default Profile2
>>>>>>> main
