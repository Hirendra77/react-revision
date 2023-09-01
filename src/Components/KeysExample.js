import React from 'react'

function KeysExample() {
    const num =[1,2,3,4,5,6,7];
    const details = [
        {
            id:1,
        name:"hiren",
        age:26,
    },
    {
        id:2,
        name:"Raga",
        age:25,
    },
    {
        id:3,
        name:"Veere",
        age:27,
    },
    {
        id:4,
        name:"Nitesh",
        age:24,
    },
]
  return (
    <div>
        {/* <ul>
            {num.map((item)=>{
               return  <li key={item}>{item}</li>
            })}
        </ul> */}
        <ul>
            {details.map((detail)=>{
                return <div key={detail.id}>
                <li >{detail.name}</li>
                <li >{detail.age}</li>
                </div>
            })}
        </ul>

        {/* OR */}
        <ul>
            {details.map((detail,index)=>{
                return <div key={index}>
                <li >{detail.name}</li>
                <li >{detail.age}</li>
                </div>
            })}
        </ul>
    </div>
  )
}

export default KeysExample;