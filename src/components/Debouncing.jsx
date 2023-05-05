import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import {
    useState
} from 'react'

const Debouncing = () => {
    const [pin, setPin] = useState('');

    useEffect(()=>{
        const debounce = setTimeout(()=>{
            axios.get(`https://api.postalpincode.in/pincode/${pin}`).then((res)=> {
            console.log('res = ', res.data[0].PostOffice)
            }).catch((err)=>{
                console.log(err)
            })
        }, 2000);
        return () => {

            console.log('clear timeout')
            clearTimeout(debounce);
        }
    }, [pin])
    return (
        <div>
            <input type="text" placeholder='Enter pin code ' onChange={(e)=> setPin(e.target.value)}/>
        </div>
    )
}

export default Debouncing