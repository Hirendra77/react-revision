import React from 'react'

function UncontrolledComponent() {

    let name =React.createRef();
    let age = React.createRef()

const getName =(event)=>{
console.log(event.target.value);
}

const getAge =(event)=>{
    console.log(event.target.value);
    }

    const submit =()=>{
        console.log(name.current.value);
        console.log(age.current.value)
    }
  return (
    <div>
        {/* Uncontrolled Components -- data is handled by DOM itsef and getting value only from DOM */}
        <input type="text" placeholder='Name' ref={name}/>
        <input type="text" placeholder='Age' ref={age} />

        {/* Controlled Components -- Form data is handled by react component and our component will be refreshed */}

        <input type="text" placeholder='Name' onChange={getName} />
        <input type="text" placeholder='Age' onChange={getAge}  />
        <button onClick={submit}>Submit</button>
    </div>
  )
}

export default UncontrolledComponent