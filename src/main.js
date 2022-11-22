
import data from './data/pokemon/pokemon.js'
const pokemonList = data.pokemon;
const containerPokemons = document.querySelector('#container-card');
//const containerModal = document.querySelector('.container-modal');


//-----------------------------------------------------

//Historia 1: mostrar pokemones, contador


 const tarjetasPokemones = (list) => { //crear un metodo que mueve la info del objeto que son los pokemones o la lista de ellos 
  let count = 0; //contar las tarjetas
  list.forEach((poks) => {  // crear arreglo de los pokemones
    const card = document.createElement('div'); //crear elemento div 
    card.className = 'pokemonCharts';
    card.innerHTML = `
    <div class="cuadroRojo">
    <div class="poke-img">
        <p class="poke-num">${poks.num}</p>
        <img src="${poks.img}">
        <div
      <div class="container-info">
        <p class="poke-name">${poks.name}</p>
        
        </div>
       </div>`;
       //<p class="poke-info"> GEN#: ${poks.generation['num']}</p> opciones para mostrar info 
       //<p class="poke-info"> GEN name: ${poks.generation['name']}</p> 
       
       card.addEventListener('click', () => {
        const mostrar = mostrarModal(poks);
        mostrar.classList.add('modal');}) 

    count += 1;
    containerPokemons.appendChild(card);
  });
  document.getElementById('quantity').innerHTML = count;
  return containerPokemons;
};

tarjetasPokemones(pokemonList); //usar el metodo con la data 



//arrow top FLCEHA PARA VOLVER ARRIBA 
window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector('.container-btn-top').classList.add('show');
  } else {
    document.querySelector('.container-btn-top').classList.remove('show');
  }
};
document.querySelector('.container-btn-top').addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});


//1.2 Información pokemon-modal


const mostrarModal=(poks)=>{
//identificar los elementos
/*let nombrePokemon= data.pokemon[0].name;
let imgPokemon=data.pokemon[0].img;
let numero=data.pokemon[0].num;
let generacion=data.pokemon[0].generation.num;
let tipo= data.pokemon[0].type[0];
let size=data.pokemon[0].size.height;
let nextEvolucion1=data.pokemon[0].evolution['next-evolution'][0]['name'] ;
*/

//crear un nodo

let modal=document.createElement('div');
 modal.innerHTML=
`<div class="cuadro">
  <div class="modal-flex">
    <div class="head-modal">
      <p class="nombre">${poks.num} - ${poks.name}</p>
      <p class="cerrar"> X </p>
    </div>  
    <img class="imagen" src="${poks.img}">
    <div class="info">
    
      <p class="sub">Generation:</p>
      <p class="sub">${poks.generation.num}</p>
      <p class="sub">${poks.generation.name} </p>
      <p class="sub">Type: ${poks.type[0]} </p>
      <p class="sub">Height: ${poks.size.height} </p>
      <p class="sub">Weight: ${poks.size.weight} </p>
    </div>
    <div class="evolucion">
      <p class=titulo>Evolución</p>
      <div class="evo1">
      <p class=sub>Next evolution:${poks.evolution["next-evolution"][0].name} </p>
      <p class="sub">Candy:${poks.evolution.candy} </p>
      <p class="sub">Candy-cost:${poks.evolution["next-evolution"][0]["candy-cost"]} </p>
      </div>
      </div>
  </div>
</div>`
modal.className = 'modal'

//seleccionar donde se va a poner el nodo - elemento padre
let elementoPadre=document.querySelector('.container-modal')

//agregar nodo
elementoPadre.appendChild(modal);

modal.style.display = 'flex';
modal.querySelector('.cerrar').addEventListener('click', () => {
  modal.classList.remove('modal');
  elementoPadre.innerHTML = '';
});
const modalF = document.querySelector('.modal');
window.addEventListener('click', (evento) => {
  if (evento.target === modalF) {
    modal.classList.remove('modal');
    elementoPadre.innerHTML = '';
  }
});
return modal;
};




//Historia 2