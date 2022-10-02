import React,{useState,useEffect} from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import ScrollableCategory from './ScrollableCategory';
import {Link} from 'react-router-dom'
import { Button } from '@mui/material';


export default function Header({handleKeyDown,clearData,setValue,value,fetchImageData}) {
  const [isFocus, setIsFocus] = useState(false)
  const [results, setResults] = useState([])
  const fetchTopics = () => {
    fetch(`https://api.unsplash.com/topics?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&order_by=latest&per_page=6`)
      .then(res => res.json())
      .then(data => {
        setResults(data)
      })
  }

  useEffect(() => {
    fetchTopics(); 
    // eslint-disable-next-line
}, [])



  return (
    <header className="text-gray-600 sticky top-0 bg-white shadow-lg border-box mb-3 z-10">
    <div className="  flex  p-5 px-0  items-center">
      <Link to="/" onClick={()=>{window.location.reload()}} className='mx-3'>
        <svg width="32" height="32" className="hic6U" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false"><desc lang="en">Unsplash logo</desc><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
      </Link>
      <div className='bg-[#f5f5f5] flex content-center items-center px-2 mx-1 rounded-3xl'>
        <SearchIcon fontSize="medium" color="red" />
        <input onKeyDown={handleKeyDown} onFocus={()=>{setIsFocus(true)}} onBlur={()=>{setIsFocus(false)}} type={"text"} placeholder="Search free high-resolution photos" className='h-10 p-3 mx-0  bg-[#f5f5f5] inputSearch' value={value} onChange={(e) => { setValue(e.target.value) }} />
        {value ?
          <ClearIcon onClick={clearData} fontSize="small" className="mr-2 cursor-pointer" /> : <div className='w-7 h-7'></div>
        }
      </div>
      {isFocus && 
        <div className='w-[45vw] h-[30vw] absolute left-20 top-16 bg-white rounded-r-md shadow-md z-50 pt-5 p-5'>
          <h1 className='text-black'>Trending Searches</h1>
          {results && results.map((result,index)=>{
            return <Button onClick={()=>{setValue(result.title)}} onFocus={()=>{setIsFocus(true)}} className='border-l-gray-600 p-2 mt-10 hover:text-black' style={{textTransform:"capitalize",color:"grey",backgroundColor:"#fff"}}>{result.title}</Button>
          })}
        </div>
      }
      <div className='mx-5 hover:text-black '>
      <Link to="/explore">Explore</Link>
      </div>
       <div className='mx-5 hover:text-black '>
      <Link to="/advertise">Advertise</Link>
      </div>
       <div className='mx-5 hover:text-black '>
      <Link to="/blog">Blog</Link>
      </div>
    </div>
    <ScrollableCategory setValue={setValue} fetchImageData={fetchImageData}/>
  </header>
  )
}
