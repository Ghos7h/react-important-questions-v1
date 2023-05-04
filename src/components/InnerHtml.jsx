import React from 'react'
import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'

const InnerHtml = () => {
    const data = '<p style="font-size=20px; color: blue">This is my Home</p>';
    const [quill, setQuill]= useState('');
    const getQuill = (data) => {
        setQuill(data);
    }
    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: data}}></div>
            
            <div dangerouslySetInnerHTML={{__html: quill}}></div>

            <ReactQuill onChange = {getQuill}></ReactQuill>
        </div>
    )
}

export default InnerHtml