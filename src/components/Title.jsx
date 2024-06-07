import React, { useEffect } from 'react'

const Title = () => {
    useEffect(()=>{
        
        setInterval(() => {
            document.title="Windows"
            
        }, 1000);
    },[])
    useEffect(()=>{
        setInterval(() => {
            document.title="iOS"
            
        }, 1500);
    },[])
    useEffect(()=>{
        setInterval(() => {
            document.title="Android"
            
        }, 2000);
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Title
