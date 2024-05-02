import React, {useState} from 'react'

const PokeForm = ({blankPokemon}) => {
  const[currentPokemon, setCurrentPokemon] = useState({...blankPokemon});
  const[resetKey, setResetKey] = useState(0);

  const handleReset = (e) => {
    e.preventDefault();
    setCurrentPokemon({...blankPokemon});
    setResetKey(prevKey => prevKey + 1);
  }

  const handleOnChange = (e) => {
    if (e.target.name === 'ability') {
      const abilities = e.target.value.split(', ').map(name => ({ ability: { name } }));
      setCurrentPokemon(prevState => ({ ...prevState, abilities }));
    } else {
      setCurrentPokemon({...currentPokemon, [e.target.name]: e.target.value});
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(currentPokemon);
  }
  
  return (

    <>
    <div>{JSON.stringify(currentPokemon)}</div>
    <form class="form-inline" onSubmit={handleSubmit} key={resetKey}>
      <input type='text' id='id' name='id' placeholder='ID' readOnly onChange={handleOnChange} value={currentPokemon.id}/>
      <input type='text' id='name' name='name' placeholder='Name' onChange={handleOnChange} value={currentPokemon.name}/>
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
      <input type='text' id='ability' name='ability' placeholder='Ability' value={currentPokemon.abilities ? currentPokemon.abilities.slice(0, 3).map(ability => ability.ability.name).join(', ') : ''
  } onChange={handleOnChange}/>
      <button type='button' onClick={handleReset}>Reset</button>
      <button type='button' onClick={handleSubmit}>Submit</button>
    </form>
    </>
  )
}


export default PokeForm;
