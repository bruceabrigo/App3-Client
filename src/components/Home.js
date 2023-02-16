import { Card, Container, Button} from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import ContentIndex from "./Content/ContentIndex"
import NewPost from "./Content/CreatePost"
const Home = (props) => {
	const { msgAlert, user } = props
	const { id } = useParams()
	console.log('User:', )
	if(!user) {
		console.log('logged out')
	} else {
		console.log('logged in:', user._id)
	}
	
	const homeCard = (
		<Card className="mt-4">
			<Card.Header>
				<h2>Welcome Back</h2>
			</Card.Header>
			<Card.Body>
				<Link to={'/sign-in'} className={'btn btn-primary m-2'}> Sign In </Link>
				<Link to={'/sign-up'} className={'btn btn-primary m-2'}> Create an Account </Link>
			</Card.Body>
		</Card>
	)

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

export default Home
