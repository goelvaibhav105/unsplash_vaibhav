import React, { useEffect, useState } from 'react'

import Spinner from '../commons/Spinner';
import InfiniteScroll from "react-infinite-scroll-component";
import Banner from '../Banner';

const Home = (props) => {
    const [homeResult, setHomeResult] = useState([])
    const [rowOne, setRowOne] = useState([])
    const [rowTwo, setRowTwo] = useState([])
    const [rowtThree, setRowThree] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)


    const fetchImageData = () => {
        setLoading(true)
        fetch(`https://api.unsplash.com/photos/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&per_page=30&page=700`)
            .then(res => res.json())
            .then(data => {
                const row1 = data.slice(0,10)
                const row2 = data.slice(10,20)
                const row3 = data.slice(20,30)
                setRowOne(row1)
                setRowTwo(row2)
                setRowThree(row3)
                setHomeResult(data)
                setLoading(false)
            })
    }


    useEffect(() => {
        fetchImageData();
        // eslint-disable-next-line
    }, [])


    const fetchMoreData = async () => {
        setPage(page + 1)
        fetch(`https://api.unsplash.com/photos/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&per_page=30&page=${page}`)
            .then(res => res.json())
            .then(data => {
                setHomeResult(homeResult.concat(data))
                const row1 = data.slice(0,10)
                const row2 = data.slice(10,20)
                const row3 = data.slice(20,30)
                setRowOne(rowOne.concat(row1))
                setRowTwo(rowTwo.concat(row2))
                setRowThree(rowtThree.concat(row3))
                setHomeResult(homeResult.concat(data))
                setLoading(false)
                setLoading(false)
            })
    };

    const array = homeResult
    

    return (
        <>
            <div className='flex justify-center items-center  border-box'>
                {loading && <Spinner />}
            </div>
            <div>
                <Banner/>
            </div>
            <InfiniteScroll
                dataLength={homeResult && homeResult.length}
                next={fetchMoreData}
                loader={<Spinner />}
                hasMore={true}
            >
                <div className='mainImage ' >
                    <div className='imageItem'>
                        {
                            rowOne && rowOne.map((result, index) => {
                                const imageSrc = result.urls.regular;
                                return <img className='imageMain' src={imageSrc} alt="no Result Found" key={index} />


                            })
                        }
                    </div>
                    <div className='imageItem'>
                        {
                            rowTwo && rowTwo.map((result, index) => {
                                const imageSrc = result.urls.regular;
                                return <img className='imageMain' src={imageSrc} alt="no Result Found" key={index} />


                            })
                        }
                    </div>
                    <div className='imageItem'>
                        {
                            rowtThree && rowtThree.map((result, index) => {
                                const imageSrc = result.urls.regular;
                                return <img className='imageMain' src={imageSrc} alt="no Result Found" key={index} />


                            })
                        }
                    </div>

                </div>
            </InfiniteScroll>
        </>
    )

}


export default Home