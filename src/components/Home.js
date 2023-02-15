import { Card, Container} from "react-bootstrap"
import { Link } from "react-router-dom"
import ContentIndex from "./Content/ContentIndex"
const Home = (props) => {
	const { msgAlert, user } = props
	console.log('props in home', props)

	if(!user) {
		console.log('logged out')
	} else {
		console.log('logged in:', user)
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

	const createCard = (
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
			{createCard}
		</Container>
		{/* Content Cards */}
		<Container className="mt-5">
			<ContentIndex msgAlert={props.msgAlert}/>
		</Container>
		</>
	)
}

export default Home
