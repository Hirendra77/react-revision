import React from 'react'
import axios from "axios";
import {useEffect, useState} from "react"
// A Debounce function makes sure that your code is only triggered once per user input, 
// search box suggestions , text-field auto-saves, and eliminating double-button  clicks  are all use cases for debounce
// uses for performance

const pinAPI = "https://api.postalpincode.in/pincode/"
function DebounceExample() {
  const [pin, setPin]= useState("");
   useEffect(() => {
    const debouncing = setTimeout(()=>{
      axios.get(pinAPI+pin).then((res)=>{
        console.log(res.data[0].Postoffice);
    }).catch((err)=>{
        console.log(err);
    })
    },2000)
    return ()=>{
      clearTimeout(debouncing)
    }
   }, [pin]);
  //  if we will use debouncing function outside the useEffect then it cause triggered the api on every type inside the input
  return (
    <div>
        <input type="text" onChange={(event)=>setPin(event.target.value)} placeholder='Enter your pincode' />
    </div>
  )
}

export default DebounceExample