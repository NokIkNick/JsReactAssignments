import React, { useEffect, useState } from 'react'
import './App.css'
import PokeForm from './components/PokeForm.jsx'
import PokeList from './components/PokeList.jsx'
import { ImagePopUp } from './components/ImagePopUp.jsx'
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
  const[pokemonToShow, setPokemonToShow] = useState(blankPokemonTemplate);
  const [show, setShow] = useState(false);


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

  const pickPokemonToShow = (pokemon) => {
    setShow(true);
    setPokemonToShow(pokemon);
  }


  useEffect(() => {
    fetchAll((data) => setPokemons(data)).then(() => console.log('Pokemons fetched!'));
  }, [])

  return (
    <>
      <PokeForm pokemonToEdit={pokemonToEdit} blankPokemon={blankPokemon} mutatePokemon={mutatePokemon}/>
      {show && <ImagePopUp pokemonToShow={pokemonToShow} show={show} setShow={setShow}/>}
      {pokemons && <PokeList pokemons={pokemons} deletePokemon={deletePokemon} editPokemon={editPokemon} setShow={setShow} show={show} pickPokemonToShow={pickPokemonToShow}/>}
    </>
  )
}

export default App
