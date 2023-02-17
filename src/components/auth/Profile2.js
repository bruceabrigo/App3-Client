import React from 'react'
import { useState, useEffect } from 'react'
import { userProfile } from '../../api/auth'
import { useParams } from 'react-router-dom'
import Update from './Update'

const Profile2 = (props) => {

    const {user, triggerRefresh, updated} = props
    const [userid, setUserid] = useState(null)
    const { userId } = useParams()

    console.log(`PROFILE 2 PROPS`, props)
    

    useEffect(()=> {
        userProfile(userId)
            .then((res)=> setUserid(res.data.user._id))
            .then(()=> triggerRefresh())



    }, [updated])


  return (
    <div>
      {user.name}

    </div>
  )
}

export default Profile2
