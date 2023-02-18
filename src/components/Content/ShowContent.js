import { useState, useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import {Container, Card, Button} from 'react-bootstrap'
import { showContent, editPost, deletePost } from "../../api/content"
import { Link } from "react-router-dom"
import messages from "../shared/AutoDismissAlert/messages"
import EditModal from "./EditModal"
import LoadingScreen from "../shared/LoadingScreen"



const ShowContent = (props) => {
    const [content, setContent] = useState(null) // while no content: state = null | after response: setState = content data from axios call
    const [editModalShow, setEditModalShow] = useState(false)

    const [edited, setEdited] = useState(false)
    console.log('content in show: ', content)
    
    const {id} = useParams()
    const navigate = useNavigate()
    console.log('this is content id: ', id)

    const {user, msgAlert} = props
    console.log('user in show: ', user)

    
    useEffect(() => {
        showContent(id)
        .then(res => setContent(res.data.content))
        .catch(err => {
            msgAlert({
                heading: 'Error editing post',
                message: messages.editPostFailure,
                variant: 'danger'
            })
        })
    }, [edited])

    if (!content) {
        return <LoadingScreen />
    }


    const deleteAPost = () => {
        deletePost(user, content._id)
            .then(() => {
                msgAlert({
                    heading: 'Post Removed!',
                    message: messages.editPostSuccess,
                    variant: 'success'
                })
            })
            .then(() => {navigate('/')})
            .catch(() => {
                msgAlert({
                    heading: 'Post failed to delete...',
                    message: messages.editPostFailure,
                    variant: 'danger'
                })
            })
    }
    
    return (
        <>
            <Container className="mt-5 ">
                <Card className="d-flex justify-content-around">
                    <Card.Header>Content</Card.Header>
                        <Card.Body>
                            <Card.Text className="pb-2 border-bottom">
                                    {content.material}
                                    {/* {content?.material} */}
                            </Card.Text>
                            <Card.Text className="d-flex justify-content-around">
                                <Button 
                                        className="m-2" variant="warning"
                                        onClick={() => setEditModalShow(true)}
                                    >
                                        Edit 
                                </Button>
                                <Button 
                                        className="m-2" variant="danger"
                                        onClick={() => deleteAPost()}
                                    >
                                        Delete post 
                                </Button>
                            </Card.Text>

                        </Card.Body>
                </Card>
            </Container>
        <div className='container-md'>
            <Container>
            </Container>
            <EditModal
                user={user}
                content={content}
                show={editModalShow}
                editPost={editPost}
                handleClose={() => setEditModalShow(false)}
                msgAlert={msgAlert}
                triggerRefresh={() => setEdited(prev => !prev)}
            />
        </div>
        </>
        
    )
}

export default ShowContent