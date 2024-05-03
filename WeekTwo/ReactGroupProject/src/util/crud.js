
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
    const {id, ...pokemonWithoutId} = pokemon;

    try {
        const response = await fetch(API_URL, {method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(pokemonWithoutId)});
        const data = await response.json();
        callback(data);
    }catch(err){
        console.log(err);
    }
}

async function updatePokemonCrud(pokemon, callback){
    try {
        const response = await fetch(`${API_URL}/${pokemon.id}`, {method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(pokemon)});
        const data = await response.json();
        callback(data);
    }catch(err){
        console.log(err);
    }
}

async function deletePokemonById(pokemon, callback){
    try {
        const response = await fetch(`${API_URL}/${pokemon.id}`, {method: 'DELETE', headers: {'Content-Type':'application/json'}});
        const data = await response.json();
        callback(data);
    }catch(err){
        console.log(err);
    }
}

export {fetchAll, createPokemon, updatePokemonCrud, deletePokemonById};