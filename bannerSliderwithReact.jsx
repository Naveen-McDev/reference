import React, { useEffect, useRef, useState } from 'react';
import Slider1 from "./assets/slider/slider1.png";
import Slider2 from "./assets/slider/slider2.png";
import Slider3 from "./assets/slider/slider3.png";


/* 
css file

@keyframes fadeAnim {
    from {
        opacity: 0;
    }

    to {
        opacity: 1;
    }
}


@tailwind base;
@tailwind components;
@tailwind utilities;
*/


let count = 0;
let slideInterval;
const App = () => {

  const [currentIndex, setCurrentIndex] = useState(0)

  const slideRef = useRef();

  const bannerList = [
    {
      id: 1,
      imageUrl: Slider1
    },
    {
      id: 2,
      imageUrl: Slider2
    },
    {
      id: 3,
      imageUrl: Slider3
    },
  ];

  const handleRightSlide = () => {
    count = (count + 1) % bannerList.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  }

  const handleLeftSlide = () => {
    const productsLength = bannerList.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  }

  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    startSlider();
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlide);
    slideRef.current.addEventListener("mouseleave", startSlider);
    return () => {
      pauseSlide()
    }
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleRightSlide();
    }, 3000);
  };

  const pauseSlide = () => {
    clearInterval(slideInterval)
  }

  return (
    <div>
      <div ref={slideRef} className='w-full select-none relative mb-10'>
        <div className="aspect-w-16 aspect-h-9">
          <img src={bannerList[currentIndex].imageUrl} alt="" />
        </div>

        <div className='w-full absolute top-1/2 transform -translate-y-1/2 flex justify-between px-10'>
          <button onClick={handleLeftSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>

          </button>
          <button onClick={handleRightSlide}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-12 h-12">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      </div>
      <h1>Hello</h1>
    </div>
  )
}

export default App