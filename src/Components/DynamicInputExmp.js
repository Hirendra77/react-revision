import React from 'react'
import {useState} from "react"
function DynamicInputExmp() {
    const [inputs, setInputs] = useState({})
    const getInputValues =(data)=>{
        // destructure the name and data

        let {name,value}=data.target;
        let input =  ({[name]:value})
        setInputs({...inputs,...input})
    };
    console.log(inputs);

  return (
    <div className='form'>
        <div className='input-container'>
        <input type="text" placeholder='name'  name='name' onChange={getInputValues}/>
        <input type="text" placeholder='age'  name='age' onChange={getInputValues}/>
        <input type="text"  placeholder='Year of experience'  name='age' onChange={getInputValues}/>

        </div>
        <button>Add New group</button>
    </div>
  )
}

export default DynamicInputExmp;