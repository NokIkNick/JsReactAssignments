import React, { useEffect, useState } from 'react'
import './App.css'
import PokeForm from './components/PokeForm.jsx'
import PokeList from './components/PokeList.jsx'
import {fetchAll} from './util/crud.js'

function App() {
  const blankPokemonTemplate = {
    id: '',
    name: '',
    types: [{ type: { name: '' } }, { type: { name: '' } }],
    abilities: [{ ability: { name: '' } }, { ability: { name: '' } }, { ability: { name: '' } }],
  };

  const[pokemons, setPokemons] = useState([]);
  const[blankPokemon, setBlankPokemon] = useState(blankPokemonTemplate);

  useEffect(() => {
    fetchAll((data) => setPokemons(data)).then(() => console.log('Pokemons fetched!'));
  }, [])

  return (
    <>
      <PokeForm/>
      {pokemons && <PokeList pokemons={pokemons} blankPokemon={blankPokemon}/>}
    </>
  )
}

export default App
