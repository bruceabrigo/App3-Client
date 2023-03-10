// import React, { Component, Fragment } from 'react'
import React, { useState, useEffect, Fragment } from 'react'
import { Route, Routes } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

// import AuthenticatedRoute from './components/shared/AuthenticatedRoute'
import AutoDismissAlert from './components/shared/AutoDismissAlert/AutoDismissAlert'
import Header from './components/shared/Header'
import RequireAuth from './components/shared/RequireAuth'
import Home from './components/Home'
/* -------------- User Routes -------------- */ 
import SignUp from './components/auth/SignUp'
import SignIn from './components/auth/SignIn'
import SignOut from './components/auth/SignOut'
import Update from './components/auth/Update'
import ChangePassword from './components/auth/ChangePassword'
import ShowProfile from './components/auth/showProfile'
import AllUsers from './components/auth/AllUsers'
import Profile2 from './components/auth/Profile2'
import ShowCart from './components/FollowCart.js/ShowCart'
/* -------------- Content Routes -------------- */ 
import NewPost from './components/Content/CreatePost'
import ShowContent from './components/Content/ShowContent'







const App = () => {

  document.body.style = 'background: #f5f5f5;';

  const [user, setUser] = useState(null)
  const [msgAlerts, setMsgAlerts] = useState([])
  const [update, setUpdate] = useState(false)
  const [fcart, setFCart] = useState({
    owner: user,
    followers: [],
    followings: []
})

  console.log('user in app', user)
  console.log('message alerts', msgAlerts)
  const clearUser = () => {
    console.log('clear user ran')
    setUser(null)
  }

	const deleteAlert = (id) => {
		setMsgAlerts((prevState) => {
			return (prevState.filter((msg) => msg.id !== id) )
		})
	}

	const msgAlert = ({ heading, message, variant }) => {
		const id = uuid()
		setMsgAlerts(() => {
			return (
				[{ heading, message, variant, id }]
      )
		})
	}
		return (
			<Fragment>
				<Header user={user} />
					<Routes>
						<Route path='/' element={<Home msgAlert={msgAlert} user={user} />} />
						<Route
							path='/sign-up'
							element={<SignUp msgAlert={msgAlert} setUser={setUser} />}
						/>
						<Route
							path='/sign-in'
							element={<SignIn msgAlert={msgAlert} setUser={setUser} user={user} />}
						/>

						<Route
							path='/sign-out'
							element={
							<RequireAuth user={user}>
								<SignOut msgAlert={msgAlert} clearUser={clearUser} user={user} />
							</RequireAuth>
							}
						/>
{/* ----------------- User Routes */}
						<Route
							path='/update/:userId'
							element={
							<RequireAuth user={user}>
								<Update 
								msgAlert={msgAlert} 
								user={user}
								triggerRefresh={() => setUpdate(prev => !prev)}
								
								 />
							</RequireAuth>
							}
						/>


						<Route
							path='/user/:userId'
							element={
							<RequireAuth user={user}>
								<Profile2 
								msgAlert={msgAlert} 
								user={user}
								triggerRefresh={() => setUpdate(prev => !prev)}
								update={update}
							
								 />
							</RequireAuth>
							}
						/>
						<Route
							path='/followers/:userId'
							element={
							
								<ShowCart 
								msgAlert={msgAlert} 
								fcart={fcart}
								user={user}
								triggerRefresh={() => setUpdate(prev => !prev)}
								 />
							
							}
						/>


						<Route
							path='/change-password'
							element={
							<RequireAuth user={user}>
								<ChangePassword msgAlert={msgAlert} user={user} />
							</RequireAuth>}
						/>
            <Route
							path='/users'
							element={
							<RequireAuth user={user}>
								<AllUsers 
								user={user}
								setUser={setUser}
								// triggerRefresh={() => setUpdate(prev => !prev)}
								 />
							</RequireAuth>
						}
						/>


						<Route
							path='/profile'
							element={
							<RequireAuth user={user}>
								<ShowProfile 
								user={user}
								// triggerRefresh={() => setUpdate(prev => !prev)}
								 />
							</RequireAuth>
						}
						/>

						<Route
							path='/update/:userId'
							element={
							<RequireAuth user={user}>
								<Update 
								msgAlert={msgAlert} 
								user={user}
								triggerRefresh={() => setUpdate(prev => !prev)}
								
								 />
							</RequireAuth>
							}
						/>
						<Route
							path='/view-profile'
							element={
							<RequireAuth user={user}>
								<Profile2 
								msgAlert={msgAlert} 
								user={user}
								triggerRefresh={() => setUpdate(prev => !prev)}
								update={update}
							
								 />
							</RequireAuth>
							}
						/>
						<Route
							path='/followers/:userId'
							element={
							
								<ShowCart 
								msgAlert={msgAlert} 
								fcart={fcart}
								user={user}
								triggerRefresh={() => setUpdate(prev => !prev)}
								 />
							
							}
						/>

{/* ------------------ Content Routes */}
					
					<Route
						path='/edit-post/:id'
						element={
						<RequireAuth user={user}>
							<ShowContent msgAlert={msgAlert} user={user} />
						</RequireAuth>}
            />
					<Route
						path='/create-post'
						element={
						<RequireAuth user={user}>
							<NewPost msgAlert={msgAlert} user={user} />
						</RequireAuth>}
					/>
				</Routes>
				{msgAlerts.map((msgAlert) => (
					<AutoDismissAlert
						key={msgAlert.id}
						heading={msgAlert.heading}
						variant={msgAlert.variant}
						message={msgAlert.message}
						id={msgAlert.id}
						deleteAlert={deleteAlert}
					/>
				))}
			</Fragment>
		)
}
export default App
