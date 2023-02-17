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
    const [editModalShow, setEditMOdalShow] = useState(false)

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
        <LoadingScreen />
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
            .then(() => {navigate('view-content')})
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
            <Container className="mt-5">
                <Card>
                    <Card.Header>Content</Card.Header>
                        <Card.Body>
                            {content.material}
                        </Card.Body>
                </Card>
            </Container>
        </>
        
        // <div className='container-md'>
        //     <Container>
        //         {contentContainer}
        //     </Container>
        //     <EditModal
        //         user={user}
        //         show={editModalShow}
        //         editPost={editPost}
        //         handleClose={() => setEditMOdalShow(false)}
        //         msgAlert={msgAlert}
        //     />
        // </div>
    )
}

export default ShowContent