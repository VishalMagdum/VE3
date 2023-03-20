import React from 'react'
import './ModulePage.css'
import home_png from '../images/home.png'
import EastIcon from '@mui/icons-material/East';
import { Link } from 'react-router-dom';
function ModulePage({ data }) {
    return (
        <>
            <div className='homeContainer'>
                <div><img src={home_png} style={{ width: "200px" }} /></div>
                <div>
                    <ul>
                        {data && data.map((item, index) => (
                            <div>
                                <Link to={`/module-${item.module}`}><li>Module {item.module}</li></Link></div>

                        ))}
                    </ul>
                    <div className='enter'>Select Module &nbsp;&nbsp;&nbsp;&nbsp;<EastIcon /></div>
                </div>
            </div>
        </>
    )
}

export default ModulePage