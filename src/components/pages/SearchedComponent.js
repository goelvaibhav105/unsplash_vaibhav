import React from 'react'
import { useEffect, useState } from 'react';
import FullSearch from '../FullSearch';

export default function SearchedComponent({ 
    value,
    results,
    setResults,
    showvalue}) {



  return (
    <div>
      <div className='flex flex-row flex-wrap ' >
        {
          results && results.map((result, index) => {
            const imageSrc = result.urls.regular;
            return  <img className='w-[10%] p-1' src={imageSrc} alt="no Result Found" key={result.id} />
  
          })
        }
                 </div>
                 <div>
                    <FullSearch showvalue={showvalue}/>
                 </div>

        {
          !(results.length > 0) && value && 
          <div>
            <h1 className='text-3xl font-bold '>{showvalue}</h1>
            <div className='flex justify-center items-center'>
              <img className='h-[50%] w-[50%] mt-[-40px]' src="https://unsplash.com/a/img/empty-states/photos.png" alt="no Result Found" />
            </div>
          </div>
        }
    </div>
  )
}
