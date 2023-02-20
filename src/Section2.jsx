import React from 'react'
import './Section2.css'
import Team from './Team'
const Section2 = () => {
  return (
    <>
    <div className='Section2-Text'>
    <h3>BUILD UP A COMMUNITY</h3>
    <h1>Join the biggest community of Travellers</h1>
    </div>
    <div style={{display:'flex',justifyContent:'center'}}>
    <div className='Team-1'>
    <Team/> 
    </div>
    <div className='Team-2'>
    <Team/>
    </div>
    <div className='Team-3'>
    <Team/>
    </div>
    <div className='Team-4'>
    <Team/>
    </div>
    <div className='Team-5'>
    <Team/>
    </div>
    </div>
    </>
  )
}

export default Section2