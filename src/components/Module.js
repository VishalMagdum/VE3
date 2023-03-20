import React from 'react'
import { SyntheticEvent } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from 'react';
import './Module.css'

function Module({ data }) {
    const [value, setValue] = useState('1');

    const handleChange = (event: SyntheticEvent, newValue: string) => {
        setValue(newValue);
    };
    return (
        <div>
            <h1 className='moduleTitle'>Module {data.module}</h1>
            <div className='moduleContainer'>

                <Box sx={{ width: '100%', typography: 'body1' }}>
                    <TabContext value={value}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList className='tabBox' onChange={handleChange} aria-label="lab API tabs example">
                                <Tab label="Tab 1 " value="1" />
                                <Tab label="Tab 2" value="2" />
                                <Tab label="Tab 3" value="3" />
                            </TabList>
                        </Box>
                        {data && data.tabs.map((item, index) => (

                            <TabPanel value={`${index + 1}`}><div className='tabs'>
                                <div><img src={item.tabImage} alt="image" /> </div>
                                <div className='tabText'><h2>{item.tabTitle}</h2>
                                    <p>{item.tabDes}</p></div>
                            </div>
                            </TabPanel>



                        ))}

                    </TabContext>
                </Box>
            </div>
        </div>
    )
}

export default Module