
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';



function App() {
  const [value, setValue] = useState("")
  const [showvalue, setShowValue] = useState("")
  const [results, setResults] = useState([])

  const clearData = () => {
    setValue('');
  }

  // Client-ID UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI

  const fetchImageData = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&query=${value}&orientation=squarish`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results)
      })
  }

  const handleKeyDown = event => {

    if (event.key === 'Enter' && value) {
      fetchImageData()
      setShowValue(value)
    }
  };




  return (
    <div>
      <header className="text-gray-600 body-font bg-slate-400">
        <div className=" mx-auto flex  p-5 px-0  items-center">
          <div className="mx-2">
            <svg width="32" height="32" className="hic6U" viewBox="0 0 32 32" version="1.1" aria-labelledby="unsplash-home" aria-hidden="false"><desc lang="en">Unsplash logo</desc><title id="unsplash-home">Unsplash Home</title><path d="M10 9V0h12v9H10zm12 5h10v18H0V14h10v9h12v-9z"></path></svg>
          </div>
          <div className='bg-[#f5f5f5] flex content-center items-center px-2 mx-1 rounded-3xl'>
            <SearchIcon fontSize="medium" color="red" />
            <input onKeyDown={handleKeyDown} type={"text"} placeholder="Search Photos" className='h-10 p-3 mx-0 w-[300px] bg-[#f5f5f5] inputSearch' value={value} onChange={(e) => { setValue(e.target.value) }} />
            {value ?
              <ClearIcon onClick={clearData} fontSize="small" className="mr-2 cursor-pointer" /> : <div className='w-7 h-7'></div>
            }
          </div>
        </div>
      </header>
      <div className='body'>
        {
          results && results.map((result, index) => {
            const imageSrc = result.urls.regular;
            return <div key={result.id} >
              <img src={imageSrc} alt="s" />
            </div>
          })
        }
        {
          !(results.length > 0) &&
          <div>
            <h1 className='text-3xl font-bold '>{showvalue}</h1>
            <div className='flex justify-center items-center'>
              <img className='h-[50%] w-[50%] mt-[-40px]' src="https://unsplash.com/a/img/empty-states/photos.png" alt="no Result Found" />
            </div>
          </div>
        }
      </div>
    </div>
  );
}

export default App;
