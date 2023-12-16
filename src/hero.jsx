import React from "react";
import { useState } from "react";
function Hero() {
    const [start, setStart] = useState(0)
    
    const inc = ()=> {
       setStart(start+1);

       
    }
    const dec = ()=> {
        if(start > 0){
        setStart(start -1)
        }
     }

     const reset = () => {
        setStart(0);
     }
 


  return (
    <div>
      <div className="text-center mt-32">
        <h1 className="text-9xl"  style={{color: start == 10 ? "red" : "black"}} >{start}</h1>
        <button
          id="inc"
          onClick={inc}
          className="border-2 border-black text-4xl p-4 rounded-xl hover:bg-sky-200 mt-20"
        >
          Increment
        </button>
        <button
          id="dec"
          onClick={dec}
          className="border-2 border-sky-500 text-4xl p-4 rounded-xl hover:bg-orange-300 "
        >
          Decrement
        </button>
        <button
          id="reset"
          onClick={reset}
          className="border-2 border-red-500 text-4xl p-4 rounded-xl hover:bg-pink-300 "
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Hero;