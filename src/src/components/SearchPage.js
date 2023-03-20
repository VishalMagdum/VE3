import React, { useMemo } from 'react'
import './SearchPage.css'
import { useState, useEffect } from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
function SearchPage({ search }) {
    const [data, setData] = useState([...search])
    const [currentPage, setCurrentPage] = useState(1)
    // const [keyword, setKeyword] = useState("")






    const rows = 3
    const totalPageCount = Math.ceil(data.length / rows)

    let trimStart = (currentPage - 1) * rows
    let trimEnd = trimStart + rows
    const [paginatedData, setPaginatedDada] = useState(data.slice(trimStart, trimEnd))

    const handleSearch = (e) => {
        const keyword = e.target.value;
        var result = [...search]
        result = result.filter((data) => {

            return data.title.toLowerCase().indexOf(keyword.toLowerCase()) !== -1
        })
        setData(result);
        setPaginatedDada(data.slice(trimStart, trimEnd))


    }














    return (
        <div className='container'>
            <div className='searchPage'>
                <p>type here to search</p>
                <input onChange={handleSearch} />
                <p>showing {data && data.length} results....</p>

                <div className='searchResult'>
                    {console.log(paginatedData)}
                    {data && paginatedData && paginatedData.map((item, index) => (
                        <div className='resultCard'>
                            <div><img src={item.image} /></div>
                            <div><h2>{item.title}</h2>
                                <p>{item.description}</p></div>
                        </div>
                    ))}

                    <span><button className={currentPage <= 1 ? "disable" : "active"} onClick={() => {
                        setCurrentPage(currentPage - 1);
                        setPaginatedDada(data.slice(trimStart, trimEnd))
                    }}><ArrowBackIosNewIcon /></button>&nbsp; <button className={currentPage >= totalPageCount ? "disable" : "active"} onClick={() => {
                        setCurrentPage(currentPage + 1);
                        setPaginatedDada(data.slice(trimStart, trimEnd))
                    }}><ArrowForwardIosIcon /></button> </span>
                </div>
            </div>
        </div>

    )
}

export default SearchPage