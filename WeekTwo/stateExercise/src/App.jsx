import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './components/Counter'
import ListDemo from './components/ListDemo'

function App() {


  return (
    <>
      <Counter initial={0} incrimentAmount={5}/>
      <ListDemo/>
    </>
  )
}

export default App
