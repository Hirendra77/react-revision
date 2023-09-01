import React from 'react'

import HigherOrder from '../HigherOrder';

function Users({data}) {


  return (
    <div>
        <h2>Hello from Users</h2>
    {data.slice(0,10).map((user)=>{
        return <p>{user.name}</p>
    })}
    </div>
  )
}

const  Userscomp = HigherOrder("Users",Users)

export default  Userscomp;