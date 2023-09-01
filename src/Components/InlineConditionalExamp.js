import {useEffect} from "react";

import React from 'react'

function InlineCondition() {
    let age=26;
    let name="Nishant";
    useEffect(() => {
    let age=26;
    let name="Nishant";
    // if(age>26){
    //     console,log("you are now old")
    // }
    // else if(name === "hiren" && age=== 26){
    //     console.log("i am 26 year old");
    //     console.log("Hiren is my name");
    // }
    // else{
    //     console.log("hiren is not my name");
    //     console.log("i am less than 26 year old");
    // }
age>26 ? console.log("you are now old") : 
age===26 && name==="hiren" ?(
    <>
    {console.log("i am 26 year old")}
    {console.log("Hiren is my name")}
    </>):
    (
        <>
        { console.log("hiren is not my name")};
        {console.log("i am less than 26 year old")}
        </>
    )

}, []);

  return (
    <div>
{
    age>26 ? 
    <h1>you are now old</h1>
   :
    age===26 && name==="hiren" ?(
        <>
        <h1>i am 26 year old</h1>
        <h1>Hiren is my name</h1>
        </>):
        (
            <>
            <h1>hiren is not my name</h1>
           <h1>i am less than 26 year old</h1>
           
            </>
        )
    
}
    </div>
  )
}

export default InlineCondition;