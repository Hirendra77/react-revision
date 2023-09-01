import React from 'react'
import { useContext } from 'react'
import { UserData } from '../../contexts/GlobalContext'

function Profile() {
  let {setName}= useContext(UserData);
  return (
    <div><h1>Profile</h1>
    <button onClick={()=>setName("hiren")}>Change the name</button>
    </div>
  )
}

export default Profile