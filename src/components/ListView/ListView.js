import React from 'react'
import { IconButton, Tooltip } from 'evergreen-ui'


const ListView = props => {
    return (
      
        <Tooltip content="List View">
        <IconButton marginRight={12} icon="grid-view" height={35} {...props} appearance="minimal"/>
        </Tooltip>
      
    )
}

export default ListView