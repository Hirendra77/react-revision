import React from 'react'
import { useContext } from 'react'
import { UserData } from '../../contexts/GlobalContext'
import {Setting} from './Setting'
function Home() {
  let {name} = useContext(UserData);
  return (
    <div>
      <h3>Name is {name}</h3>  
      <Setting/>
    </div>
  )
}

export default Home