import React from 'react'
import HigherOrderComponent from './HigherOrderComponent'

const Posts = ({data}) => {
  return (
    <>
        <h1>Posts</h1> 
        {data.slice(0, 10).map((post)=>{
            return <p key={post.id}>{post.title}</p>
        })}
    </>
  )
}

export default HigherOrderComponent('Posts', Posts);