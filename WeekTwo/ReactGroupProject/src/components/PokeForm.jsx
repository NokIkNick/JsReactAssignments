import React, {useEffect, useState} from 'react'

const PokeForm = ({blankPokemon, pokemonToEdit, mutatePokemon}) => {
  const[currentPokemon, setCurrentPokemon] = useState({...pokemonToEdit}); //The currentPokemon that is being created or edited
  const[resetKey, setResetKey] = useState(0); //The key to reset the form needed to remount.


  useEffect(() => {
    setCurrentPokemon(pokemonToEdit);
  }, [pokemonToEdit])

  const handleReset = (e) => {
    e.preventDefault();
    setCurrentPokemon(blankPokemon);
    setResetKey(prevKey => prevKey + 1); //Remount the form
  }

  const handleOnChange = (e) => {
    if (e.target.name === 'ability') { //Because the ability is an array of objects, and we don't know for sure if a pokemon has 1 or more abilities, we need to split the string and map it to an array of objects.
      const abilities = e.target.value.split(', ').map(name => ({ ability: { name } }));
      setCurrentPokemon(prevState => ({ ...prevState, abilities }));
    }else if (e.target.name === 'type1'){
      const type = { type: { name: e.target.value } };
      setCurrentPokemon(prevState => ({ ...prevState, types: [type, prevState.types[1] || { type: { name: '' } }]}));
    }else if(e.target.name === 'type2'){
      const type = { type: { name: e.target.value } };
      setCurrentPokemon(prevState => ({ ...prevState, types: [prevState.types[0], type || { type: { name: '' } }]}));
    }else {
      setCurrentPokemon({...currentPokemon, [e.target.name]: e.target.value});
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    mutatePokemon(currentPokemon);
    setCurrentPokemon(blankPokemon);
  }
  
  return (

    <>
    <h1>POKÉDEX</h1>
    <form class="form-inline" onSubmit={handleSubmit} key={resetKey}>
      <input type='text' id='id' name='id' placeholder='ID' readOnly onChange={handleOnChange} value={currentPokemon.id}/>
      <input type='text' id='name' name='name' placeholder='Name' onChange={handleOnChange} value={currentPokemon.name}/>
      {/*Checking if the currentPokemon types array is not undefined, and currentPokemon.types[0].type is not undefined.*/}
      <select id='type1' name='type1' onChange={handleOnChange} value={currentPokemon.types && currentPokemon.types[0].type ? currentPokemon.types[0].type.name : ''}>
        <option defaultChecked>Select typing 1</option>
        <option value='normal'>Normal</option>
        <option value='grass'>Grass</option>
        <option value='fire'>Fire</option>
        <option value='water'>Water</option>
        <option value='electric'>Electric</option>
        <option value='ice'>Ice</option>
        <option value='fighting'>Fighting</option>
        <option value='poison'>Poison</option>
        <option value='ground'>Ground</option>
        <option value='flying'>Flying</option>
        <option value='psychic'>Psychic</option>
        <option value='bug'>Bug</option>
        <option value='rock'>Rock</option>
        <option value='ghost'>Ghost</option>
        <option value='dark'>Dark</option>
        <option value='dragon'>Dragon</option>
        <option value='steel'>Steel</option>
        <option value='fairy'>Fairy</option>
      </select>
      {/*Checking if the currentPokemon types array is not undefined, and currentPokemon.types[1].type is not undefined.*/}
      <select id='type2' name='type2' onChange={handleOnChange} value={currentPokemon.types && currentPokemon.types[1].type ? currentPokemon.types[1].type.name : ''}>
        <option defaultChecked>Select typing 2</option>
        <option value='normal'>Normal</option>
        <option value='grass'>Grass</option>
        <option value='fire'>Fire</option>
        <option value='water'>Water</option>
        <option value='electric'>Electric</option>
        <option value='ice'>Ice</option>
        <option value='fighting'>Fighting</option>
        <option value='poison'>Poison</option>
        <option value='ground'>Ground</option>
        <option value='flying'>Flying</option>
        <option value='psychic'>Psychic</option>
        <option value='bug'>Bug</option>
        <option value='rock'>Rock</option>
        <option value='ghost'>Ghost</option>
        <option value='dark'>Dark</option>
        <option value='dragon'>Dragon</option>
        <option value='steel'>Steel</option>
        <option value='fairy'>Fairy</option>
      </select>
      {/*Checking if the currentPokemon.abilites array is not undefined, and if so, we splice it upto 3 times, because a pokemon can have a max of 3 abilites*/}
      <input type='text' id='ability' name='ability' placeholder='Ability' value={currentPokemon.abilities ? currentPokemon.abilities.slice(0, 3).map(ability => ability.ability.name).join(', ') : ''
  } onChange={handleOnChange}/>
      <button type='button' onClick={handleReset}>Reset</button>
      <button type='button' onClick={handleSubmit}>Submit</button>
    </form>
    </>
  )
}


export default PokeForm;
