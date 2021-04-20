import React from 'react';
import UserCard from '../components/UserCard/UserCard'

function Profile(props) {
    return(
    <div>
        <UserCard {...props}/>
    </div>
    )
}

export default Profile;