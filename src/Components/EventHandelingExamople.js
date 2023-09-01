import React from 'react'

function EventHandelingExamople() {

    const getInput=(event)=>{
        console.log(event.target.value)
    }

    const addNums=(num1,num2)=>{
console.log(num1+num2)
    }
  return (
    <div>
        <input type="text" placeholder='Add Something' onChange={getInput} name='input'/>
        <button onClick={()=>addNums(2,3)}>Add Numbers</button>
    </div>
  )
}

export default EventHandelingExamople;