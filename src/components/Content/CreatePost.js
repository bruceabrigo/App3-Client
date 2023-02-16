import { useState } from 'react'
import { newPost } from '../../api/content'
import { newPostSuccess, newPostFailure } from '../shared/AutoDismissAlert/messages'
import ContentForm from '../shared/NewPostForm'
import { Card, Container, } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useNavigate } from 'react-router-dom'

const NewPost = (props) => {
    const {user, msgAlert} = props
    console.log('User in Create: ', user)

    const nav = useNavigate()

    const [content, setContent] = useState({material: ''})

    const onChange = (e) => {
        e.persist()

        setContent(prevContent => {
            const newMaterial = e.target.name //input field = key value pair to manipulate
            let newValue = e.target.value

            console.log('input: ', e.target.type)

            const updatedContent = {
                [newMaterial] : newValue
            }

            return {
                ...prevContent, ...updatedContent
            }
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()

        newPost(user, content)
            .then(res => {nav(`/`)})
            .then(() => {
                msgAlert({
                    heading: 'Success with new Content',
                    message: newPostSuccess,
                    variant: 'success'
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Error posting content...',
                    message: newPostFailure,
                    variant: 'danger'
                })
            })
    }

    const createCard = (
		<Card className="mt-4">
			<Card.Header>
				<h2>Welcome Back</h2>
			</Card.Header>
			<Card.Body>
            <ContentForm
                content={content}
                handleChange={onChange}
                handleSubmit={onSubmit}
            />
			</Card.Body>
		</Card>
	)
    return (
        <>
            <Container>
                {createCard}
            </Container>
        </>
    )
}

export default NewPost