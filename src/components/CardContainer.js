import React from 'react'
import { Pane } from 'evergreen-ui'

const CardContainer = props => {
    return (<Pane {...props}>
        {props.children}
    </Pane>)
}

export default CardContainer