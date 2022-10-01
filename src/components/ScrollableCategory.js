
import React, { useEffect } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

function ScrollableCategory({setValue,fetchImageData}) {
  const [items, setItems] = React.useState([]);
  const [selected, setSelected] = React.useState([]);
  const [position, setPosition] = React.useState(0);


  
const getItems = () => {
    fetch(`https://api.unsplash.com/topics/?client_id=UwHPV-3b3eHF0eq1T8jZftTABLZbr09xy0pHsvqjcQI&query&per_page=20`)
      .then(res => res.json())
      .then(data => {
        setItems(data)
      })
  }

  
  useEffect(() => {
    getItems(); 
    // eslint-disable-next-line
}, [])

//   const isItemSelected = (id) => !!selected.find((el) => el === id);

//   const handleClick =
//     (id) =>
//     ({ getItemById, scrollToItem }) => {
//       const itemSelected = isItemSelected(id);

//       setSelected((currentSelected) =>
//         itemSelected
//           ? currentSelected.filter((el) => el !== id)
//           : currentSelected.concat(id)
//       );
//     };
console.log(items,"items")

  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((item) => (
        <Item
          title={item.title}
          setValue={setValue}
        />
      ))}
    </ScrollMenu>
  );
}

function LeftArrow() {
  const { isFirstItemVisible, scrollPrev } =
    React.useContext(VisibilityContext);

  return (
    <div disabled={isFirstItemVisible} className="cursor-pointer flex items-center p-3" onClick={() => scrollPrev()}>
        { !isFirstItemVisible &&  <ArrowBackIosIcon fontSize="medium" color="red" />}
    </div> 
  );
}

function RightArrow() {
  const { isLastItemVisible, scrollNext } = React.useContext(VisibilityContext);

  return ( 
    <div disabled={isLastItemVisible}  className="cursor-pointer flex items-center p-3" onClick={() => scrollNext()}>
       <ArrowForwardIosIcon fontSize="medium" color="red" />
    </div>
  );
}

function Item({ onClick, fetchImageData, title, setValue }) {

    const setValueFunc =(title)=>{
        setValue(title)
        fetchImageData(title)
    }
  return (
      <button className="item h-4 p-3 text-lg hover:text-black focused:border-b-2 border-black inline-block whitespace-nowrap " style={{
        width: '100%',
      }}  onClick={() => setValueFunc(title)}>
       {title}
      </button>
  );
}

export default ScrollableCategory;
