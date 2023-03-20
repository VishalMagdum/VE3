import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';
function Searchicon() {
    return (
        <span className='search'><Link to='/search'><SearchIcon /></Link></span>
    )
}

export default Searchicon