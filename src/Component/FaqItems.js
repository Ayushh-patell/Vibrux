import React, { useEffect, useRef, useState } from 'react';

const FaqItem = ({faq}) => {

    const { question, answer } = faq;
    const [clicked, setClicked] = useState(false);
    const contentEl = useRef();
    const handleToggle = () => {
        setClicked((prev) => !prev);
      };

      useEffect(() => {// ANSWER IS ADDED HERE    
        if(document.getElementById(question)) {
          document.getElementById(question).innerHTML = `${answer}`
        }
      }, [])


  return (
    <div className=" w-full bg-[#020042] font-chakra">
    <p
    onClick={handleToggle}

      className="cursor-pointer pointer-events-auto flex justify-between items-center p-7 pl-10"
    >
    {/*     THE QUESTION BAR     */}
      <span className=' text-lg text-left'>{question}</span>
      <img src="../Arrow.svg" alt="arrow" className={` h-3 transition-all ${clicked?" -rotate-90":" rotate-90"} `} />
    </p>
    <div
    ref={contentEl}
    style={
          clicked
            ? { height: contentEl.current.scrollHeight }
            : { height: "0px" }
        }
      className={` accordianBody overflow-hidden md:text-xl transition-[height] duration-300 text-base text-left   `}
    >
    {/*     ANSWER BAR:ANSWER IS ADDED PROGRAMATICALLY    */}
      <p id={`${question}`} className=" text-left p-5 text-sm">
        
        
      </p>
    </div>
  </div>
  )
}

export default FaqItem
