import React, {useState} from 'react'
import {FaArrowCircleUp} from 'react-icons/fa';

const TopButton = () => {
    const [visible, setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };

  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      
    });
  };
  window.addEventListener('scroll', toggleVisible);
  return (
    <button className=" flex w-full sticky place-content-end ml-28 bottom-24 h-12 z-10 cursor-pointer text-4xl text-red-400 scroll-smooth ">
        <FaArrowCircleUp onClick={scrollToTop} 
     style={{display: visible ? 'inline' : 'none'}} />
    </button>
  )
}

export default TopButton