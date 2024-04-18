import { useState } from "react"
import { CiEdit } from "react-icons/ci";
import { FaRegSave } from "react-icons/fa";


export default function Player({name,symbol}){
    const [change,setChange]=useState(false)
    const [newname,setnewname]=useState(name)
    
    const displayName=()=>{
        setChange(!change)
    }
   
    return(
        <>
        <div class="flex text-white">
        <span class="mt-2 ml-6"><button class="ml-12 px-4 pl-6 py-2 bg-yellow-300 text-black">{symbol}</button></span>

       {!change? <ol >
         <li class="mt-2 ml-4 pr-20 pl-8 border border-black bg-gray-700 px-2 py-2 rounded-md">
               <span class="ml-10 ">{newname}</span>
            </li>

        </ol>:<input type="text" value={newname} onChange={(event)=>setnewname(event.target.value)} class="ml-4 border border-black bg-gray-700 px-2 py-2 rounded-md" required/>}
            <button class="mt-2 ml-4 px-6 py-2 bg-yellow-300 text-black" type="button" onClick={()=>displayName()}>{!change ?<CiEdit />:<FaRegSave />}</button>
        </div>
        </>
    )
}