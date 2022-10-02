import React, { useEffect, useState } from 'react'

import Spinner from './Spinner';
import InfiniteScroll from "react-infinite-scroll-component";

import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';

import CollectionsIcon from '@mui/icons-material/Collections';
import LayersIcon from '@mui/icons-material/Layers';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import Photos from './FullSearchMenus.js/Photos';
import Collections from './FullSearchMenus.js/Collections';
import Users from './FullSearchMenus.js/Users';


export default function FullSearch({showvalue}) {
    const [users, setUsers] = useState([])
    const [collections, setCollections] = useState([])
    const [totalUsers, setTotalUsers] = useState('')
    const [totalCollections, setTotalCollections] = useState('')
    const [photos, setPhotos] = useState([])
    const [totalPhotos, setTotalPhotos] = useState('')
    const [rowOne, setRowOne] = useState([])
    const [rowTwo, setRowTwo] = useState([])
    const [rowThree, setRowThree] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [submenu, setSubMenu] = useState(1)

    const fetchUsers = () => {
        setLoading(true)
        fetch(`https://api.unsplash.com/search/users/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&query=${showvalue}`)
            .then(res => res.json())
            .then(data => {
                // const row1 = data.slice(0,10)
                // const row2 = data.slice(10,20)
                // const row3 = data.slice(20,30)
                // setRowOne(row1)
                // setRowTwo(row2)
                // setRowThree(row3)
                setUsers(data.results)
                setTotalUsers(data.total)
                setLoading(false)
            })
    }

    const fetchCollections = () => {
        setLoading(true)
        fetch(`https://api.unsplash.com/search/collections/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&query=${showvalue}`)
            .then(res => res.json())
            .then(data => {
                // const row1 = data.slice(0,10)
                // const row2 = data.slice(10,20)
                // const row3 = data.slice(20,30)
                // setRowOne(row1)
                // setRowTwo(row2)
                // setRowThree(row3)
                setCollections(data.results)
                setTotalCollections(data.total)
                setLoading(false)
            })
    }

    const fetchPhotos = () => {
        setLoading(true)
        fetch(`https://api.unsplash.com/photos/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&query=${showvalue}&per_page=30`)
            .then(res => res.json())
            .then(data => {
                const row1 = data.slice(0,10)
                const row2 = data.slice(10,20)
                const row3 = data.slice(20,30)
                setRowOne(row1)
                setRowTwo(row2)
                setRowThree(row3)
                setPhotos(data.results)
                setLoading(false)
            })
    }

    const fetcTotalPhotos = () => {
        setLoading(true)
        fetch(`https://api.unsplash.com/search/photos/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&query=${showvalue}&per_page=30`)
            .then(res => res.json())
            .then(data => {
                setTotalPhotos(data.total)
                setLoading(false)
            })
    }




    
    useEffect(() => {
        fetchUsers();
        fetchCollections();
        fetchPhotos();
        fetcTotalPhotos();
        // eslint-disable-next-line
    }, [showvalue])


  return (
    <div>
 {showvalue &&  <h1 className='text-3xl font-bold p-5 pb-0 capitalize '>{showvalue}</h1>}
  
   <ButtonGroup variant="text" aria-label="outlined primary button group" className="p-3 px-3 text-gray-400">
      <Button className="m-2" onClick={()=>{setSubMenu(1)}} style={submenu===1 ?{color:'black',textTransform:"capitalize"}:{color:'grey',textTransform:"capitalize"}} >        <CollectionsIcon fontSize="medium" className="m-2" /> Photos {totalPhotos}</Button>
      <Button className="m-2"  onClick={()=>{setSubMenu(2)}} style={submenu===2 ?{color:'black',textTransform:"capitalize"}:{color:'grey',textTransform:"capitalize"}}>         <LayersIcon fontSize="medium" className="m-2"  /> Collections {totalCollections}</Button>
      <Button className="m-2"  onClick={()=>{setSubMenu(3)}} style={submenu===3 ?{color:'black',textTransform:"capitalize"}:{color:'grey',textTransform:"capitalize"}}>         <PeopleAltIcon fontSize="medium" className="m-2"   />Users {totalUsers}</Button>
   
    </ButtonGroup>

    {submenu === 1 && <Photos showValue={showvalue} rowOne={rowOne} rowTwo={rowTwo} rowThree={rowThree}/>

   }
   {submenu === 2 && <Collections collections={collections}/>

   }
   {submenu === 3 && <Users users={users}/>

   }
    </div>
  )
}
