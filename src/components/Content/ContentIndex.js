import {useState, useEffect} from 'react'
import { Card, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import LoadingScreen from '../shared/LoadingScreen'

import { getAllContent } from '../../api/content'

import messages from '../shared/AutoDismissAlert/messages'

const styleCards = {
    display: 'flex',
    flexFlow: 'row wrap',
    justifyContent: 'center'
}

const ContentIndex = (props) => {
    const [content, setContent] = useState(null) // while no content: state = null | after response: setState = content data from axios call
    const [error, setError] = useState(false) //errors will default as false

    console.log('CONTENT in GET: ', content) // DEBUGGING DELETE BEFORE PRESENTATION
    const {msgAlert} = props

    useEffect(() => {
        getAllContent()
            .then(res => setContent(res.data.contents))
            .catch(err => {
                msgAlert({
                    heading: 'Error with content',
                    message: 'Trouble receiving content data',
                    variant: 'danger'
                })
                setError(true)
            })
    }, [])

    if (error) {
        return <p>Error!</p>
    }

    if(!content) {
        return <LoadingScreen/>
    } else if(content.length === 0) {
        return <p>Create post or follow new users!</p>
    }

    const contentContainer = content.map(content => (
        <Card key={content._id} className='mb-4'>
            <Card.Body>
                    {/* Username will go here */}
                <Card.Title>Username</Card.Title>
                <Card.Subtitle className='mb-2 text-muted'>{content.createdAt}</Card.Subtitle>
                <Card.Text className='border-bottom'>
                    <p>{content.material}</p>
                </Card.Text>
                <Card.Text className='border-bottom'>
                    <div className='d-flex justify-content-around'>
                        <div className='p-2'>Like</div>
                        <div className='p-2'>Comment</div>
                    </div>
                </Card.Text>
            </Card.Body>
        </Card>
    ))

    return (
        <div className='container-md'>
            <Container>
                {contentContainer}
            </Container>
        </div>
    )
}

export default ContentIndex