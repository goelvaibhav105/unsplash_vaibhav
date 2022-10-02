import React from 'react'
import Spinner from '../commons/Spinner'
import './collections.css'

export default function Collections({ collections ,loading}) {
    if(loading){
        return <Spinner/>
    }
    return (
        <div className='flex-row flex flex-wrap justify-center text-center'>

            {collections && collections.map((collection,index) => {
                const coverImage = collection.cover_photo.urls.regular
                const name = collection.user.first_name + ' ' + collection.user.last_name
                return (  <img key={index} className='w-[32%]  bg-cover p-[1%] p-auto rounded-2xl ' src={coverImage} alt="" />
)
            })}
        </div>
    )
}
