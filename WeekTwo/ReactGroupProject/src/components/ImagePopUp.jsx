import React, {useState} from 'react'
import '../styles/imagePopUp.css';

export const ImagePopUp = ({pokemonToShow, show, setShow}) => {
    const[shiny, setShiny] = useState(false);
  
    return (
    <div class="pop-up">
        <button class="close" onClick={() => setShow(!show)}>Close</button>
        <h1>{pokemonToShow.name.toUpperCase()}</h1>
        {pokemonToShow.sprites ? <img class="bigPicture" onClick={() => setShiny(!shiny)} src={shiny ? pokemonToShow.sprites.front_shiny : pokemonToShow.sprites.front_default}></img> : <img class="bigPicture" onClick={() => setShiny(!shiny)} src={shiny ? 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/201-question.png' : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201-question.png'}></img>}
    </div>
  )
}
