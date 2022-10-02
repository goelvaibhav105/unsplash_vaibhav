import React,{useEffect} from 'react'
import Spinner from '../Spinner';

export default function Photos({showValue,rowOne,rowTwo,rowThree,loading}) {
    const [items, setItems] = React.useState([]);
    const getItems = () => {
        fetch(`https://api.unsplash.com/topics/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&query=${showValue}&per_page=20`)
          .then(res => res.json())
          .then(data => {
            setItems(data)
          })
      }
      useEffect(() => {
        getItems();
        // eslint-disable-next-line
    }, [showValue])

    if(loading){
        return <Spinner/>
    }

  return (
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
            rowThree && rowThree.map((result, index) => {
                const imageSrc = result.urls.regular;
                return <img className='imageMain' src={imageSrc} alt="no Result Found" key={index} />


            })
        }
    </div>

</div>
  )
}
