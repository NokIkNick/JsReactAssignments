import React, {useState} from 'react'

const pokeList = ({pokemons, editPokemon, deletePokemon}) => {

  
  return (
    <>
    <div>{pokemons && pokemons.length > 0 ? <h2>GEN 1 POKÉMON:</h2> : 'No pokemon'}
    
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Typings</th>
          <th>Abiliies</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {pokemons.map((pokemon) => {
          return (
            <tr key={pokemon.id}>
              <td>
              <td>{pokemon.name.toUpperCase()}</td>
              </td>
              <td>
              {pokemon.types.map((type) => {
                return (
                  <td class={type.type.name}>{type.type.name.toUpperCase()}</td>
                );
              })}
              </td>
              <td>
              {pokemon.abilities.map((ability) => {
                return (
                  <td class={"slot"+ JSON.stringify(ability.slot)}>{ability.ability.name.toUpperCase()}</td>
                );
              })}
              </td>
              <td>
                <button onClick={() => editPokemon(pokemon)} class="edit">Edit</button>
                <button onClick={() => deletePokemon(pokemon)} class="delete">Delete</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
    </div>
    </>
  )
}

export default pokeList;
