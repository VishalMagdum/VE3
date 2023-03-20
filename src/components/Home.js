import React from 'react'
import './Home.css'
import home_png from '../images/home.png'
import EastIcon from '@mui/icons-material/East';
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    return (
        <>
            <div className='homeContainer'>
                <div><div className='image'><img src={home_png} /></div></div>
                <div><h1>Fusce sem magna, pharetra vel cursus</h1>
                    <p>Morbi tincidunt nisi id vulputate consequat. Morbi arcu libero, pellentesque eu bibendum non, eleifend ut nisi. Phasellus mattis nibh ullamcorper euismod sodales. Donec metus eros, euismod dapibus fermentum non, gravida id ex Duis vitae dui sit amet lectus ultrices lacinia eget in tellus. Vivamus lacinia lectus id justo fermentum tincidunt. Duis consectetur porttitor tincidunt. Sed dapibus nulla vitae risus elementum dictum.</p>
                    <Link to="/select-module"><div className='enter'>Enter &nbsp;&nbsp;&nbsp;&nbsp;<EastIcon /></div></Link>
                </div>
            </div>
        </>
    )
}

export default Home