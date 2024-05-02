
function fetchAll(callback){
    fetch('http://localhost:3001/pokemon')
    .then(res => res.json()).then(data => callback(data)).catch(err => console.log(err));
}


function createPokemon(pokemon, callback){
    const {id, pokemonWithoutId} = pokemon;
    fetch('http://localhost:3001/pokemon', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pokemonWithoutId)
    }).then(res => res.json()).then(data => callback(data)).catch(err => console.log(err));
}

function updatePokemon(pokemon, callback){
    fetch(`http://localhost:3001/pokemon/${pokemon.id}`, {method: 'PUT', headers: {'Content-Type':'application/json'}, body: JSON.stringify(pokemon)})
    .then(res => res.json()).then(data => callback(data))
    .catch(err => console.log(err));
}

function deletePokemon(pokemon, callback){
    fetch(`http://localhost:3001/pokemon/${pokemon.id}`, {method: 'DELETE', headers: {'Content-Type':'application/json}'}})
    .then(res => res.json()).then(data => callback(data))
    .catch(err => console.log(err));
}

export {fetchAll, createPokemon, updatePokemon, deletePokemon};