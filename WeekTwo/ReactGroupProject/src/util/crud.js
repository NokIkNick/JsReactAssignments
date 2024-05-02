
const API_URL = 'http://localhost:3001/pokemon';

async function fetchAll(callback){
    try{
        const response = await fetch(API_URL);
        const data = await response.json();
        callback(data);
    }catch(err){
        console.log(err);
    }
}


async function createPokemon(pokemon, callback){
    const {id, pokemonWithoutId} = pokemon;
    fetch(API_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemonWithoutId)
    }).then(res => res.json()).then(data => callback(data)).catch(err => console.log(err));
}

async function updatePokemon(pokemon, callback){
    fetch(`${API_URL}/${pokemon.id}`, {method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(pokemon)})
    .then(res => res.json()).then(data => callback(data))
    .catch(err => console.log(err));
}

async function deletePokemon(pokemon, callback){
    fetch(`${API_URL}/${pokemon.id}`, {method: 'DELETE', headers: {'Content-Type':'application/json}'}})
    .then(res => res.json()).then(data => callback(data))
    .catch(err => console.log(err));
}

export {fetchAll, createPokemon, updatePokemon, deletePokemon};