import React from 'react'
import HigherOrder from '../HigherOrder';
function Posts({data}) {
  
  return (
    <div>

        <h2>Hello from Posts</h2>
        <h2>Posts</h2>
    {data.slice(0,10).map((user)=>{
        return <p>{user.title}</p>
    })}
    </div>
  )
}

const  Postscomp = HigherOrder("Posts",Posts,"posts")

export default  Postscomp;