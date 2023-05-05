import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'

const User = ({data}) => {
  return (
    <>
    <h1>User</h1>
    {data.slice(0, 10).map((user)=>{
      return <p key={user.id}>{user.name}</p>
    })}
  </>
  )
}

export default HigherOrderComponent('Users', User);