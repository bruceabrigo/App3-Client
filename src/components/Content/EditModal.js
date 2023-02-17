import { useState } from "react";
import { Modal } from "react-bootstrap";
import ContentForm from "../shared/NewPostForm";
import messages from "../shared/AutoDismissAlert/messages";
import LoadingScreen from "../shared/LoadingScreen";

import { editPost } from "../../api/content";

const EditModal = (props) => {
    const {user, show, handleClose, editPost, msgAlert, triggerRefresh} = props
    console.log('props in edit: ', props)

    const [content, setContent] = useState(props.content)
    console.log('content in edit: ', content)

    const onChange = (e) => {
        e.persist()

        setContent(prevPost => {
            const editedPost = e.target.name
            let updatedValue = e.target.value

            const editedMaterial = {
                [editedPost] : updatedValue
            }

            return {
                ...prevPost, ...editedMaterial
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        editPost(user, content)
            .then(() => triggerRefresh())
            .then(() => {
                msgAlert({
                    heading: 'Post saved!',
                    message: messages.editPostSuccess,
                    variant: 'success'
                })
            })
            .then(() => setContent(prev => !prev))
            .catch(() => {
                msgAlert({
                    heading: 'Error with edit',
                    message: messages.editPostFailure,
                    variant: 'danger'
                })
            })
    }
    
    if(!content) {
        return <LoadingScreen />
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton/>
                <Modal.Body>
                    <ContentForm
                        content={content}
                        handleChange={onChange}
                        handleSubmit={onSubmit}
                        heading='Edit Post'
                    />
                </Modal.Body>
        </Modal>
    )

}
export default EditModal