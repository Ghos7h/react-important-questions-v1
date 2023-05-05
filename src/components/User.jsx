import React, {useContext} from 'react'
import { UserContext } from "../contexts/UserContext";

const User = () => {
  const {setName} = useContext(UserContext);
  return (
    <div>
        <button onClick={()=>{setName('Name-V2')}}>Change Name</button>
    </div>
  )
}

export default User