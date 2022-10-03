import React, { useEffect, useState } from 'react'
import Spinner from './commons/Spinner'

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
     return (
      <div>
          <img src={'https://images.unsplash.com/photo-1651604454911-fdfb0edde727?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjgzMjR8MHwxfGFsbHwyMDk4Mnx8fHx8fDJ8fDE2NjQ3NzU4NTk&ixlib=rb-1.2.1&q=80&w=1080'} className="w-[100%] h-[500px] mt-[-20px] object-cover"  alt="" />
          <div className='absolute top-[30%] left-[15%] backdrop-blur-2xl bg-white/1  h-[250px] w-[70%] p-[3%]'>
              <h1 className='font-[700] text-[55px] text-white'>Unsplash</h1>
              <p className=' text-[20px] text-white'>The internet’s source for visuals.</p>
              <p className=' text-[20px] text-white'>Powered by creators everywhere</p>
          </div>
      </div>
    )
}

const coverImage = results.urls.regular

  return (
    <div>
        <img src={coverImage} className="w-[100%] h-[500px] mt-[-20px] object-cover"  alt="" />
        <div className='absolute top-[30%] left-[15%] backdrop-blur-2xl bg-white/1  h-[250px] w-[70%] p-[3%]'>
            <h1 className='font-[700] text-[55px] text-white'>Unsplash</h1>
            <p className=' text-[20px] text-white'>The internet’s source for visuals.</p>
            <p className=' text-[20px] text-white'>Powered by creators everywhere</p>
        </div>
    </div>
  )
}
