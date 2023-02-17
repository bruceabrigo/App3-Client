import { useState } from "react";
import { Modal } from "react-bootstrap";
import ContentForm from "../shared/NewPostForm";
import messages from "../shared/AutoDismissAlert/messages";
import LoadingScreen from "../shared/LoadingScreen";


const EditModal = (props) => {
    const {user, show, handleClose, editPost, msgAlert, triggerRefresh} = props
    console.log('props in edit: ', props)

    const [content, setContent] = useState(props.content)
    console.log('content in edit: ', content)

    const onChange = (e) => {
        e.persist()

        setContent(prevContent => {
            const editedPost = e.target.name
            let updatedValue = e.target.value

            const editedMaterial = {
                [editedPost] : updatedValue
            }

            console.log('updated in content: ', editedMaterial)

            return {
                ...prevContent, ...editedMaterial
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        editPost(user, content)
            .then(() => handleClose())
            .then(() => {
                msgAlert({
                    heading: 'Post saved!',
                    message: messages.editPostSuccess,
                    variant: 'success'
                })
            })
            .then(() => triggerRefresh())
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
                    />
                </Modal.Body>
        </Modal>
    )

}
export default EditModal