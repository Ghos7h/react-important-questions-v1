import React from 'react'
import { useState } from 'react';
import { UserContext } from '../contexts/UserContext';
import Home from './Home';
import User from './User';

const DemoContext = () => {
const [name, setName] = useState('Name-V1');
const [age, setAge] = useState(100);
  return (
    <>
        <UserContext.Provider value={{name, setName, age}}>
          <Home/>
          <User/>
        </UserContext.Provider>
    </>
  )
}

export default DemoContext