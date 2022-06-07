import React from 'react'
import Typewriter from 'typewriter-effect'
import './App.css'


function App(){
  return <div className='App'>
  <Typewriter 
    onInit={(typewriter)=>{
      typewriter.typeString(``)
      .deleteAll()
      .pauseFor(3000)
      .typeString('')
      .deleteAll()
      // .pauseFor(3000)

      .start()
    }}
    />


  </div>
}

export default App