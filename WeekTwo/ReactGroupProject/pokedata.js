

const pokedata = {pokemon:[]};


async function fetchdata(id){
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`).then((response => response.json())).then((data) => pokedata.pokemon.push(data)); 
}

for (let i = 1; i <= 151; i++){
    await fetchdata(i);
    //await sleep(1000);
}

console.log(JSON.stringify(pokedata));

