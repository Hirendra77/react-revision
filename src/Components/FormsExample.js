import React, { useState } from 'react'

function FormsExample() {
   const [objData,setObjData]=useState({})
    const getInput=(value,name)=>{
     let data ={[name]:value};

     setObjData({...objData,...data});
    };

    const submit=(e)=>{
        e.preventDefault();
        console.log(objData);
    }
  return (
    <form onSubmit={submit}>
    <div>
       
        <input type="text" placeholder='write your name' 
        onChange={(event)=>getInput(event.target.value,event.target.name)}
        name='name'
        />
        <input type="number" placeholder='write your age'
        onChange={(event)=>getInput(event.target.value,event.target.name)}
        name='age'
         />
        <input type="text" placeholder='write your Hobbies'
        onChange={(event)=>getInput(event.target.value,event.target.name)}
        name='hobbies'
        />
        <input type="date" placeholder='write a date' 
        onChange={(event)=>getInput(event.target.value,event.target.name)}
        name='date'
        />
        <input type="file" placeholder='upload' 
        onChange={(event)=>getInput(event.target.value,event.target.name)}
        name='date'
        />
        {/* <button onClick={submit}>Submit</button> */}
       <button type='submit'>submit</button>
       <button type='reset'>Reset</button>
    </div>
    </form>
  )
}

export default FormsExample;