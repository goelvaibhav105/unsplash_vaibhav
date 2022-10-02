import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import ScrollableCategory from './ScrollableCategory';
import {Link} from 'react-router-dom'

export default function Header({handleKeyDown,clearData,setValue,value,fetchImageData}) {
  return (
    <header className="text-gray-600 sticky top-0 bg-white shadow-lg border-box mb-3 z-10">
    <div className="  flex  p-5 px-0  items-center">
      <Link to="/" onClick={()=>{window.location.reload()}} className='mx-3'>
        <svg width="32" height="32" className="hic6U" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false"><desc lang="en">Unsplash logo</desc><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
      </Link>
      <div className='bg-[#f5f5f5] flex content-center items-center px-2 mx-1 rounded-3xl'>
        <SearchIcon fontSize="medium" color="red" />
        <input onKeyDown={handleKeyDown} type={"text"} placeholder="Search free high-resolution photos" className='h-10 p-3 mx-0  bg-[#f5f5f5] inputSearch' value={value} onChange={(e) => { setValue(e.target.value) }} />
        {value ?
          <ClearIcon onClick={clearData} fontSize="small" className="mr-2 cursor-pointer" /> : <div className='w-7 h-7'></div>
        }
      </div>
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
