import React from 'react'
import { Avatar, Tooltip } from 'evergreen-ui'
 

const ProfileIcon = props => {
    return (
        <Tooltip content="Profile">
        <Avatar name="Jeroen Ransijn" size={40} {...props}/>
        </Tooltip>
    )
}

export default ProfileIcon