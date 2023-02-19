import { useState } from "react";
import { Modal } from "react-bootstrap";
import ContentForm from "../shared/NewPostForm";
import messages from "../shared/AutoDismissAlert/messages";
import LoadingScreen from "../shared/LoadingScreen";

const CommentModal = (props) => {
    const {show, handleClose} = props
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton/>
                <Modal.Body>
                    <h2>Comments Modal</h2>
                </Modal.Body>
        </Modal>
    )
}
export default CommentModal