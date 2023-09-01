import React, { useState, useEffect } from 'react'

function ReactRestApiExample() {

    // POST ,GET , PATCH OR PUT and DELETE
    const [name, setName] =useState('')
    const [users, setUsers] = useState([])


    // Add data
    const postData =()=>{
        axios.post('https://54366eii.io/users', {
        name:name,  
        age:26,
            hobbies:["writing","reading","listening","playing"],
        })
        .then((res)=>{
            console.log(res.data)
        })
        .catch((error)=>{
            console.error(error)
        })
    }


// Update
  const updateData = (id)=>{
     console.log(id);
     axios.put(`https://54366eii.io/users/${id}`,{
        name:name,  
        age:27,
        hobbies:["writing","reading","listening","playing","singing"],

     })
     .then((res)=>{
        console.log(res.data)
    })
    .catch((error)=>{
        console.error(error)
    });

  }


//   Delete
  const deleteData = (id)=>{
    console.log(id);
    axios.delete(`https://54366eii.io/users/${id}`)
    .then((res)=>{
        getData()
   })
   .catch((error)=>{
       console.error(error)
   });

 }

// get request
 const getData =()=>{
    axios.get('https://54366eii.io/users')
    .then((res)=>{
     setUsers(res.data)
 })
 .catch((error)=>{
     console.error(error)
 })
}

useEffect(() => {
    
    getData()
}, []);

  return (
    <div>
       
        <input type="text" placeholder='Name' onChange={(event)=>setName(event.target.value)} />
        <button onClick={postData}>Add Data</button>
       {users.map((user)=>{
       return (
        <>
        <h2>{`${user,id}.${user.name}`}</h2>
        <button onClick={()=>updateData(user.id)}>Update Data</button>
        <button onClick={()=>deleteData(user.id)}>Delete Data</button>
        </>
    )
})}

        </div>
  )
}

export default ReactRestApiExample