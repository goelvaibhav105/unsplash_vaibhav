import React, {useEffect, useState} from 'react'

import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const Home = (props)=>{
    const [homeResult, setHomeResult] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    

    const fetchImageData = (value) => {
        setLoading(true)
        fetch(`https://api.unsplash.com/photos/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&page=1000`)
          .then(res => res.json())
          .then(data => {
            setHomeResult(data)
            setLoading(false)
          })
      }


    useEffect(() => {
        fetchImageData(); 
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {   
        setPage(page+1) 
        fetch(`https://api.unsplash.com/photos/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&page=${page}`)
        .then(res => res.json())
        .then(data => {
          setHomeResult(homeResult.concat(data))
          setLoading(false)
        })
      };
 
        return (
            <>
              <div className='flex justify-center items-center  border-box'>
                {loading && <Spinner />}
              </div>
                <InfiniteScroll
                    dataLength={ homeResult && homeResult.length}
                    next={fetchMoreData}
                    loader={<Spinner/>}
                    hasMore={true}
                > 
                   <div className='flex flex-row flex-wrap border-box ' >
        {
          homeResult && homeResult.map((result, index) => {
            const imageSrc = result.urls.regular;
            return  <img className='w-[30%] h-[100%] mx-[1%] my-3' src={imageSrc} alt="no Result Found" key={index} />
  
          })
        }
                 </div>
                </InfiniteScroll>
            </>
        )
    
}


export default Home