import React, { Fragment } from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { Link } from 'react-router-dom'
const linkStyle = {
	display: 'flex',
    color: 'white',
    textDecoration: 'none'
}

const navbarStyle = {
	display: 'flex',
	backgroundColor: '#8A9A5B',
	paddingLeft: '50px'
}
const authenticatedOptions = (
	<>
		<Nav.Item className='m-2'>
			<Link to={'/:userId'} style={linkStyle}>
				View Profile
			</Link>
		</Nav.Item >
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
                BRE-Crypt Media
            </Link>
        </Navbar.Brand>
		<Navbar.Toggle aria-controls='basic-navbar-nav' />
		<Navbar.Collapse id='basic-navbar-nav'>
			<Nav className='ml-auto'>
				{user && (
					<span className='navbar-text mr-2'>Profile {user.email}</span>
				)}
				{alwaysOptions}
				{user ? authenticatedOptions : unauthenticatedOptions}
			</Nav>
		</Navbar.Collapse>
	</Navbar>
)

export default Header
