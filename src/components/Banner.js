import React, { useEffect, useState } from 'react'
import Spinner from './Spinner'

export default function Banner() {
    const [loading, setLoading] = useState(true)
    const [results, setResults] = useState([])

    const fetchRandomPhoto = () => {
        setLoading(true)
      fetch(`
      https://api.unsplash.com/photos/random/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&orientation=landscape`)
        .then(res => res.json())
        .then(data => {
          setResults(data)
          setLoading(false)
        })
    }
  
    useEffect(() => {
      fetchRandomPhoto(); 
      // eslint-disable-next-line
  }, [])
  if(loading){
    return null
}

const coverImage = results.urls.regular

  return (
    <div>
        <img src={coverImage} className="w-[100%] h-[500px] mt-[-20px] object-cover"  alt="" />
        <div className='absolute top-[50%] left-[15%] backdrop-blur-2xl bg-white/1  h-[250px] w-[70%] p-[3%]'>
            <h1 className='font-[700] text-[55px] text-white'>Unsplash</h1>
            <p className=' text-[20px] text-white'>The internet’s source for visuals.</p>
            <p className=' text-[20px] text-white'>Powered by creators everywhere</p>
        </div>
    </div>
  )
}
