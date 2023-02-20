import { Card, Container, Button} from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import ContentIndex from "./Content/ContentIndex"
import NewPost from "./Content/CreatePost"
import ContentForm from "./shared/NewPostForm"
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import messages from "./shared/AutoDismissAlert/messages"
import { newPost } from "../api/content"
const Home = (props) => {
	const { msgAlert, user } = props
	const { id } = useParams()
	console.log('User:', user)
	if(!user) {
		console.log('logged out')
	} else {
		console.log('logged in:', user.id)
	}
	/* ------------------- Create Card Functions for Home page ------------------- */

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
                    message: messages.newPostSuccess,
                    variant: 'success'
                })
            })
            .catch(() => {
                msgAlert({
                    heading: 'Error posting content...',
                    message: messages.newPostFailure,
                    variant: 'danger'
                })
            })
    }

    const createCard = (
		<Card className="mt-4">
			<Card.Body>
            <ContentForm
                content={content}
                handleChange={onChange}
                handleSubmit={onSubmit}
                user={user}
            />
			</Card.Body>
		</Card>
	)
	
	/* ------------------- Welcome Card if Signed Out ------------------- */
	const homeCard = (
		<Card className="mt-4">
			<Card.Header>
				<h2>Welcome Back</h2>
			</Card.Header>
			<Card.Body>
				<Link to={'/sign-in'} className={'btn btn-primary m-2'}> Sign In </Link>
				<Link to={'/sign-up'} className={'btn btn-dark m-2'}> Create an Account </Link>
			</Card.Body>
		</Card>
	)
	if(!user) {
		return (
			<>
			<Container>
				{homeCard}
			</Container>
			{/* Content Cards */}
			<Container className="mt-5">
				<ContentIndex user={user} msgAlert={props.msgAlert}/>
			</Container>
			</>
		)
	}
	/* ------------------- If Signed In - display Create Post Card ------------------- */
	return (
		<>
		<Container>
			{createCard}
		</Container>
		{/* Content Cards */}
		<Container className="mt-5">
			<ContentIndex user={user} msgAlert={props.msgAlert}/>
		</Container>
		</>
	)
}

export default Home