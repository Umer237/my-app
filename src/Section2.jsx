import React from 'react'
import './Section2.css'
import Girl from './images/Girl.jpeg'
const Section2 = () => {
  return (
    <>
    <div className='Section2-Text'>
    <h3>BUILD UP A COMMUNITY</h3>
    <h1>Join the biggest community of Travellers</h1>
    </div>
    <div style={{display:'flex',justifyContent:'center'}}>
    {/* <div className='Team-1'>
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
    </div> */}
     <div className="Team-Flex">
    <div className="Background-Team">
    <div className="Team-1">
      <img src={Girl} alt="" />
      <h1>Zulabia Idrees</h1>
      <p>
       Pakistan
      </p>
      </div>
      </div>
      </div>
      <div className="Team-Flex">
    <div className="Background-Team">
    <div className="Team-2">
      <img src={Girl} alt="" />
      <h1>Zulabia Idrees</h1>
      <p>
       Pakistan
      </p>
      </div>
      </div>
      </div>
      <div className="Team-Flex">
    <div className="Background-Team">
    <div className="Team-3">
      <img src={Girl} alt="" />
      <h1>Zulabia Idrees</h1>
      <p>
       Pakistan
      </p>
      </div>
      </div>
      </div>
      <div className="Team-Flex">
    <div className="Background-Team">
    <div className="Team-4">
      <img src={Girl} alt="" />
      <h1>Zulabia Idrees</h1>
      <p>
       Pakistan
      </p>
      </div>
      </div>
      </div>
      <div className="Team-Flex">
    <div className="Background-Team">
    <div className="Team-5">
      <img src={Girl} alt="" />
      <h1>Zulabia Idrees</h1>
      <p>
       Pakistan
      </p>
      </div>
      </div>
      </div>
    </div>
    
    </>
  )
}

export default Section2