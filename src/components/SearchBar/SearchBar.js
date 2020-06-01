import React from 'react'
import { SearchInput } from 'evergreen-ui'
import './SearchBar.css'

const SearchBar = props => {
    return (
<SearchInput placeholder="Search Notes..." height={45} {...props} className="search"/>
    )
}

export default SearchBar