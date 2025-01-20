import './App.css';
import React,{useState,useEffect,useCallback} from "react";

function App() {

  const [length,setLength]=useState(0);
  const [checkNum,setCheckNum]=useState(false);
  const [checkChar,setCheckChar]=useState(false);
  const [password,setPassword]=useState("");

  const passwordGenerator=useCallback(()=>{
    let pass='';
    let s='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (checkNum) s+="0123456789";
    if (checkChar) s+="~!@#$%^&*_+=";
    for (let i=1;i<=length;i++){
      let ind=Math.floor(Math.random()*s.length+1);
      let char=s.charAt(ind);
      pass+=char;
    }
    setPassword(pass);

  },[length,checkNum,checkChar,setPassword]);

  useEffect(()=>{
    passwordGenerator();
  },[length,checkNum,checkChar,passwordGenerator])

  return (
    <>
    <div className="bg-gray-900 h-screen grid place-content-center">
      <div className="bg-gray-300 w-[550px] h-[160px] rounded-lg border-4 border-orange-700 p-2">
        <div>
          <input type="range" className='w-[330px] mt-3' min={0} max={50} value={length}
          onChange={(e)=>setLength(e.target.value)}/>
          <label htmlFor='range' className=' mx-5 text-lg font-bold text-black'>Length: {length}</label>
          <div className='flex'>
          <div className='flex justify-between w-[330px] text-lg font-bold text-blue-900'>
            <p>0</p>
            <p>50</p>
          </div>
          <div className="flex flex-col mx-10 mt-2">
            <div className='mx-1'>
            <input type="checkbox" id="checknumbers" defaultChecked={checkNum} onChange={()=>{setCheckNum((prev)=>!prev);}}/>
            <label htmlFor='checknumbers' className='mx-2 text-md font-bold text-blue-900'>Numbers</label>
            </div>
            <div className='mx-1'>
            <input type="checkbox" id="checkcharacters" defaultChecked={checkChar} onChange={()=>{setCheckChar((prev)=>!prev);}}/>
            <label htmlFor='checkcharacters' className='mx-2 text-md font-bold text-blue-900'>Characters</label>
            </div>
          </div>
          </div>
        </div>
        <div className='mt-1'>
          <input type='text' value={password} placeholder='password generating...' 
          className='w-[500px] h-8 rounded-md p-2 border-2 border-gray-700 text-orange-900 font-semibold' readOnly/>
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
