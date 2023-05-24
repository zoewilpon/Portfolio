import './App.css'
import React from 'react'
import Info from './components/Info'
import Resources from './components/Resources'
import Videos from './components/Videos'

import myImage from './assets/steve1.jpg'

const App = () => {


  return (
    <>
      <h1>Welcome to the Ultimate Steve Jobs Fan Website!</h1>
      <img src={myImage} alt="Steve Jobs" />
      <Info />
      <Resources />
      <Videos />
    </>
  )
}

export default App
