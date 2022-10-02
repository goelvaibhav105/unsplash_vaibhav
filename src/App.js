
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import LoadingBar from 'react-top-loading-bar'
import SearchedComponent from './components/SearchedComponent';
import {
  Routes,
  Route,
} from "react-router-dom";
import Explore from './components/Explore';
import Advertise from './components/Advertise';
import Blog from './components/Blog';


function App() {
  const [value, setValue] = useState("")
  const [showvalue, setShowValue] = useState("")
  const [results, setResults] = useState([])
  const [progress, setProgress] = useState(0)

  const clearData = () => {
    setValue('');
  }

  const fetchImageData = () => {
    fetch(`https://api.unsplash.com/search/photos/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&query=${value}&orientation=squarish&per_page=20`)
      .then(res => res.json())
      .then(data => {
        setResults(data.results)
      })
  }

  const handleKeyDown = event => {
    if (event.key === 'Enter' && value) {
      fetchImageData()
      setShowValue(value)
    }else{
      fetchImageData()
    }
  };

    
  useEffect(() => {
    fetchImageData(); 
    // eslint-disable-next-line
}, [value])

  return (

    <div className="App">
      <Header
        handleKeyDown={handleKeyDown}
        clearData={clearData}
        setValue={setValue}
        value={value}
        fetchImageData={fetchImageData}
      />

      <LoadingBar
        height={3}
        color='#f11946'
        progress={progress}
      />
      <div>

      </div>
     <Routes>
     <Route path="/" element={<div>
        {!(showvalue || value) ? <Home setProgress={setProgress} /> : <SearchedComponent
          value={value}
          results={results}
          setResults={setResults}
          showvalue={showvalue}
        />}
        </div>} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/advertise" element={<Advertise />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>

    </div>
  );
}

export default App;
