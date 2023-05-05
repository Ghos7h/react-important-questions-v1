import React, { useEffect,useState } from 'react'

const HigherOrderComponent = (title, WrappedComponent) => {
    return function HOC() {
      const [data, setData] = useState([])
    const getData = async () => {
        const path = title === 'Posts' ? 'posts' : 'users';
        let data = await fetch(`https://jsonplaceholder.typicode.com/${path}`).then((res)=>{
            // console.log('response = ', res)
            return res.json()
        }).then((data)=>{
            return data;
        }).catch((err)=> {
            throw err;
        })
        // console.log(data)
        setData(data);
    }

    useEffect(()=>{
        getData();
    }, [])
    return (<div>
        <h1>{title}</h1>
        <WrappedComponent data = {data}/>
    </div>)
  }
}

export default HigherOrderComponent