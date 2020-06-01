import React from 'react'
import { Menu, Popover, Position, IconButton, Tooltip} from 'evergreen-ui'
const SideMenu = props => {
    return (
        
        <Popover
  position={Position.BOTTOM_LEFT}
  content={
    <Menu>
      <Menu.Group>
        <Menu.Item icon="people">Share...</Menu.Item>
        <Menu.Item icon="circle-arrow-right">Move...</Menu.Item>
        <Menu.Item icon="edit" secondaryText="⌘R">
          Rename...
        </Menu.Item>
      </Menu.Group>
      <Menu.Divider />
      <Menu.Group>
        <Menu.Item icon="trash" intent="danger">
          Delete...
        </Menu.Item>
      </Menu.Group>
    </Menu>
  }
><Tooltip content="Main menu">
  <IconButton marginRight={16} icon="menu" height={45} appearance="minimal"/>
  </Tooltip>
</Popover>

    )
}

export default SideMenu