import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
const linkStyle = {
	display: 'flex',
    color: 'white',
    textDecoration: 'none'
}

const navbarStyle = {
	display: 'flex',
    justifyContent: 'center',
	backgroundColor: '#8A9A5B',
	paddingLeft: '50px',
	fontSize: 'bold'
}
const authenticatedOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to='create-post' style={linkStyle}>
				Make Post
			</Link>
		</Nav.Item >
		<Nav.Item className='m-2'>
			<Link to='change-password' style={linkStyle}>
				Change Password
			</Link>
		</Nav.Item>
		<Nav.Item className='m-2'>
			<Link to='sign-out' style={linkStyle}>
				Sign Out
			</Link>
		</Nav.Item>
	</>
)

const unauthenticatedOptions = (
	<>
        <Nav.Item className='m-2'>
		    <Link to='sign-up' style={linkStyle}>Sign Up</Link>
        </Nav.Item>
        <Nav.Item className='m-2'>
		    <Link to='sign-in' style={linkStyle}>Sign In</Link>
        </Nav.Item>
	</>
)

const alwaysOptions = (
	<>
		<Nav.Link>
			<Link to='/' style={linkStyle}>
				Home
			</Link>
		</Nav.Link>
	</>
)

const Header = ({ user }) => (
	<Navbar  variant='light' expand='md' style={navbarStyle}>
		<Navbar.Brand>
            <Link to='/' style={linkStyle}>
				<img src='https://cdn-icons-png.flaticon.com/128/5056/5056614.png' style={{height:'30px'}}></img>
                Socialolite
            </Link>


        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav' >

			
			<Navbar.Brand>
            <Link to='/profile' style={linkStyle}>
			{user && (
					<span className='navbar-text mr-2'>Hello {user.name}</span>
				)}
				{/* {alwaysOptions} */}
				{user ? authenticatedOptions : unauthenticatedOptions}
                
            </Link>


        </Navbar.Brand>

		</Navbar.Collapse>
	</Navbar>
)

export default Header