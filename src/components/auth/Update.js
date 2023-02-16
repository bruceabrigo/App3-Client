import { useState } from "react";
import LoadingScreen from "../shared/LoadingScreen";
// import { Link } from "react-router-dom";
import { userProfile, signUp } from "../../api/auth";
import messages from '../shared/AutoDismissAlert/messages'
import { Navigate, useNavigate } from "react-router-dom";




const Update = props => {

    const { user } = props
    

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [name, setName] = useState('');
    const [profilePicture, setProfilePicture] = useState('');
    const [coverPicture, setCoverPicture] = useState('');
    const [description, setDescription] = useState('');
    const [active, setActive] = useState(false);

    const navigate = useNavigate();
    console.log(`UPDATE PAGE PROPS`, props)

    const onUpdate = (event) => {
        event.preventDefault();

        const { msgAlert, user, setUser } = props;

        
        const updatedUser = {
          ...user,
          name,
          profilePicture,
          coverPicture,
          description
        };
        console.log(`Updated User`, updatedUser)
    

        signUp(updatedUser)
        .then((res) => setUser(res.data.user))
        .then(() => {
            msgAlert({
            heading: 'Update Success',
            message: messages.updateSuccess,
            variant: 'success'
            });
        })
        .catch((error) => {
            setName(user.name);
            setProfilePicture(user.profilePicture);
            setCoverPicture(user.coverPicture);
            setDescription(user.description);
            msgAlert({
            heading: `Update Failed with error: ${error.message}`,
            message: messages.updateFailure,
            variant: 'danger'
            });
        });
    }


    

    
    return(
        <>
            UPDATE USER ID
        </>
    )

}

export default Update