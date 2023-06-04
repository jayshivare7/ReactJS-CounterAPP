
import "./App.css";
import { useState } from "react";

function App() {
  // let count=0;
const[count,setCount]= useState(0);
function decreaseHandeler(){
  setCount(count-1);
}
function increaseHandeler(){
  setCount(count+1);
}
function resetHandeler(){
  setCount(0);
}


  return (
    <div className=" w-[100vw] h-[100vh] flex justify-center flex-col items-center gap-10 bg-[#344151]   ">
<h1 className="text-[#0398d4] font-medium text-2xl"> Increment and Decrement</h1>
<div className=" bg-[#FFFFFF] flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#344151]">



  <button onClick={decreaseHandeler} className=" border-r-2 text-center w-20 text-5xl border-[#bfbfbf] "> -</button>
  <div className=" font-bold gap-12 text-5xl ">
    {count}
  </div>
  <button onClick={increaseHandeler} className="border-l-2 text-center w-20 text-5xl border-[#bfbfbf] ">+</button>
</div>
<div>
  <button onClick={resetHandeler} className="bg-[#0398d4] text-lg text-white px-5 py-2 rounded-sm">
    Reset
  </button>
</div>

    </div>
  );
}

export default App;
