import React, {useContext} from 'react'
import { UserContext } from '../contexts/UserContext';

const SettingContext = () => {
  const {age} = useContext(UserContext);
  return (
    <>
        <h1>The age is {age}!</h1>   
    </>
  )
}

export default SettingContext