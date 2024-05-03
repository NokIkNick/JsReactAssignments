import React, { useEffect, useState } from 'react'
import './App.css'
import PokeForm from './components/PokeForm.jsx'
import PokeList from './components/PokeList.jsx'
import {fetchAll, deletePokemonById, createPokemon, updatePokemonCrud} from './util/crud.js'

function App() {
  const blankPokemonTemplate = {
    id: '',
    name: '',
    types: [{ type: { name: '' } }, { type: { name: '' } }],
    abilities: [{ ability: { name: '' } }, { ability: { name: '' } }, { ability: { name: '' } }],
  };

  const[pokemons, setPokemons] = useState([]);
  const[blankPokemon, setBlankPokemon] = useState(blankPokemonTemplate);
  const[pokemonToEdit, setPokemonToEdit] = useState(blankPokemonTemplate);


  const mutatePokemon = (pokemon) => {
    if(pokemon.id != ''){
      updatePokemon(pokemon);
    }else{
      createPokemon(pokemon, (newPokemon) => {setPokemons([...pokemons, newPokemon])});
    }
  }

  const editPokemon = (pokemon) => {
    setPokemonToEdit(pokemon);
  }

  const updatePokemon = (pokemon) => {
    updatePokemonCrud(pokemon, (data) => {
      const updatedPokemons = pokemons.map(p => p.id === data.id ? data : p);
      setPokemons(updatedPokemons);
    });
  }

  const deletePokemon = (pokemon) => {
    deletePokemonById(pokemon, (data) => {
      const updatedPokemons = pokemons.filter(p => p.id !== data.id);
      setPokemons(updatedPokemons);
    });

  }

  useEffect(() => {
    fetchAll((data) => setPokemons(data)).then(() => console.log('Pokemons fetched!'));
  }, [])

  return (
    <>
      <PokeForm pokemonToEdit={pokemonToEdit} blankPokemon={blankPokemon} mutatePokemon={mutatePokemon}/>
      {pokemons && <PokeList pokemons={pokemons} deletePokemon={deletePokemon} editPokemon={editPokemon}/>}
    </>
  )
}

export default App
