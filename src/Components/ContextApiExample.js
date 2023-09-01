import React from 'react'
import { UserData } from '../contexts/GlobalContext'
// I am using it like a APP file example
function ContextApiExample() {

    const [name,setName] = useState("Raha");
    const [age, setAge] = useState(30)
  return (
    <div>
       <UserData.Provider value={{name, setName, age}}>
        < HomeContext />
        <ProfileContext />
        </UserData.Provider>
    </div>
  )
}

export default ContextApiExample