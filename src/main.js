
import data from './data/pokemon/pokemon.js'
const pokemonList = data.pokemon;
const containerPokemons = document.querySelector('#container-card');
const containerModal = document.querySelector('.container-modal');






/*let users = [
  {firstName : "Susan", lastName: "Steward"},
  {firstName : "Daniel", lastName: "Longbottom"},
  {firstName : "Jacob", lastName: "Black"}
];

let userFullnames = users.map(function(element){
    return `${element.firstName} ${element.lastName}`;
})

console.log(userFullnames)*/






 const tarjetasPokemones = (list) => { //crear un metodo que mueve la info del objeto que son los pokemones o la lista de ellos 
  let count = 0; //contar las tarjetas
  list.forEach((poks) => {  // crear arreglo de los pokemones
    const card = document.createElement('div'); //crear elemento div 
    card.className = 'pokemonCharts';
    card.innerHTML = `
      <div class="poke-img">
        <p class="poke-num">${poks.num}</p>
        <img src="${poks.img}">
      </div>
      <div class="container-info">
        <p class="poke-name">${poks.name}</p>
        <p class="poke-info"> GEN#: ${poks.generation['num']}</p>
        <p class="poke-info"> GEN name: ${poks.generation['name']}</p>
       </div>`;
      
    
    count = 1;
    containerPokemons.appendChild(card);
  });
  document.getElementById('quantity').innerHTML = count;
  return containerPokemons;
};

tarjetasPokemones(pokemonList); //usar el metodo con la data 