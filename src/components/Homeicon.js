import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

function Homeicon() {
    return (
        <span className='home'><Link to='/'><HomeIcon /></Link></span>
    )
}

export default Homeicon