import React, { useEffect, useState } from 'react'
import './App.css'
import PokeForm from './components/PokeForm.jsx'
import PokeList from './components/PokeList.jsx'
import {fetchAll} from './util/crud.js'

function App() {
  const[pokemons, setPokemons] = useState([]);

  useEffect(() => {
    fetchAll(data => setPokemons(data));
  }, )

  return (
    <>
      <PokeForm />
      <PokeList pokemons={pokemons} />
    </>
  )
}

export default App
