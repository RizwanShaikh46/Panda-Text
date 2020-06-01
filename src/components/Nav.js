import React from 'react'
import { Pane } from 'evergreen-ui'
import SideMenu from './SideMenu/SideMenu.js'
import Logo from './Logo/Logo'
import SearchBar from './SearchBar/SearchBar'
import ListView from './ListView/ListView'
import ProfileIcon from './ProfileIcon/ProfileIcon'


const Nav = props => {
    return (
   <Pane 
   height={75}
   display="flex"
   alignItems="center"
   justifyContent="space-around"
   border="default"
   elevation={1}
   
   >
   <SideMenu flex="auto" marginLeft={10}/>
   <Logo/>
   <SearchBar 
     width="85%"
   />
   <ListView />
   <ProfileIcon marginRight={20} height={40}/>
   </Pane>
    )
}

export default Nav