import {useEffect, useState} from "react";

function UseStateExample(){
  const [users,setUsers]= useState([])
  const [numbers, setNumbers]=useState([1,2,3,4,5,6,7,8,9,10])

  useEffect(() => {
   fetch("https://jsonplaceholder.typicode.com/users")
   .then((response)=>response.json())
   .then((json)=>setUsers(json));
  }, []);

  const mapData=()=>{
    // let mappedArray = users.map((user)=>user.id*2)
    // console.log(mappedArray)
  
  //   let flterData = users.filter((user)=>{

  //     return user.name.includes("a")
  //   })
  // console.log(flterData)
  // setUsers(flterData)

  // let squareRoot = numbers.map((number)=>{
  //  return number*number;
  // })
  // console.log(squareRoot)

  // let numberlessThan5 =numbers.filter((number)=>{
  //    return number<5;
  // }) 
  // .map((filterdNumbers)=> {
  //   return filterdNumbers * filterdNumbers;
  // })
  // setNumbers(numberlessThan5)


  let numberlessThan5 =numbers
 .map((filterdNumbers)=> {
   return filterdNumbers * filterdNumbers;
 }).filter((number)=>{
  return number >50;
}) 
 setNumbers(numberlessThan5)
  }
  const [name, setName] = useState("Hirendra")

  // const ChangeNme=()=>{
  //   setName("Raja")
  // }

  const ChangeNme =(value)=>{
    console.log(value)
    setName(value);
  }
  return(
    <div className="app">
      {/* <h1>Users</h1> */}
      {/* <div className="card">
        {users.map((user)=>(
          <div className="card-inner">
            <p>{user.name}</p>
            <p>{user.username}</p>
          </div>
        ))}
      </div> */}

      

      {/* OR */}

      <button  onClick={()=>setName('Raja')}>Change Name</button>


      <h1>NUMBERS</h1>
      <div className="card">
        {numbers.map((number)=>(
          <div className="card-inner">{number}</div>
        ))}
      </div>
      <button onClick={mapData}>See mapped Array</button>
    </div>
  )
}
export default UseStateExample;

// set state using class based components

// import React, { Component } from 'react'

// export default class App extends Component {
//   constructor(){
//     super();
//     this.state={
//       name:"Hirendra",
//       age:26,
//       profession:"developer",
//       array:[1,2,3,45,5]
//     }
//     changeState=()=>{
//    this.setState({age:this.state.age*2,
//                 name:"raja",
//   })
//     }
//   }
//   render() {
//     return (
//       <div>
//         <h1>{this.state.name}</h1>
//        <button onClick={this.changestatus}>Change State</button>
//       </div>
//     )
//   }
// }

