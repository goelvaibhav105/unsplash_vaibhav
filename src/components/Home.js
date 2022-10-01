import React, {useEffect, useState} from 'react'

import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

const Home = (props)=>{
    const [homeResult, setHomeResult] = useState([])
    const [homeResult2, setHomeResult2] = useState([])
    const [homeResult3, setHomeResult3] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
    

    const fetchImageData = () => {
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

    const fetchImageDataROw2 = () => {
        setLoading(true)
        fetch(`https://api.unsplash.com/photos/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&page=901`)
          .then(res => res.json())
          .then(data => {
            setHomeResult2(data)
            setLoading(false)
          })
      }

      const fetchImageDataROw3 = () => {
        setLoading(true)
        fetch(`https://api.unsplash.com/photos/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&page=800`)
          .then(res => res.json())
          .then(data => {
            setHomeResult3(data)
            setLoading(false)
          })
      }


    useEffect(() => {
        fetchImageData();
        fetchImageDataROw2(); 
        fetchImageDataROw3(); 
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
      console.log(homeResult,"homeResult")
 
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
                   <div className='mainImage ' >
                   <div className='imageItem'>
        {
          homeResult && homeResult.map((result, index) => {
            const imageSrc = result.urls.regular;
            return <img  className='imageMain' src={imageSrc} alt="no Result Found" key={index} />
            
  
          })
        }
         </div>
         <div className='imageItem'>
        {
          homeResult2 && homeResult2.map((result, index) => {
            const imageSrc = result.urls.regular;
            return <img  className='imageMain' src={imageSrc} alt="no Result Found" key={index} />
            
  
          })
        }
         </div>
         <div className='imageItem'>
        {
          homeResult3 && homeResult3.map((result, index) => {
            const imageSrc = result.urls.regular;
            return <img  className='imageMain' src={imageSrc} alt="no Result Found" key={index} />
            
  
          })
        }
         </div>
    
                 </div>
                </InfiniteScroll>
            </>
        )
    
}


export default Home