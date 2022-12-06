
import data from './data/pokemon/pokemon.js'
const pokemonList = data.pokemon;
const containerPokemons = document.querySelector('#container-card');
const orderBy = document.querySelector('#order-by');

import {
  filtros,
  order,
  /**/changeOrder,
  calculo
} from './data.js';

//-----------------------------------------------------

//Historia 1: mostrar pokemones, contador

const TypePokemon = (arrayType) => {
  let imgEachPokemon = '';
  arrayType.forEach((type) => {
    imgEachPokemon += `<img src="imagenes/tipoPOK/${type}.png" />`;
  });
  return imgEachPokemon;
};

 const tarjetasPokemones = (list) => { //crear un metodo que mueve la info del objeto que son los pokemones o la lista de ellos 
  let count = 0; //contar las tarjetas
 
  list.forEach((poks) => {  // crear arreglo de los pokemones
    const card = document.createElement('div'); //crear elemento div 
    card.className = 'pokemonCharts';
    card.innerHTML = `
    <div class="RedSquare">
      
        <div class="num-type">
          <p class="poke-num">${poks.num}</p>
          <div class="TypesPoke">${TypePokemon(poks.type)}</div>
        </div>

        <div class="poke-img">
        <img src="${poks.img}">
        </div>       

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
  document.getElementById('calculoP').innerHTML = calculo(count);
  return containerPokemons;
};

tarjetasPokemones(pokemonList); //usar el metodo con la data 

// porcentajes 



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

let modal=document.createElement('div');

const getTypes = (arr) => {
  let types = '';
  arr.forEach((eachType) => {
    types += `${eachType} `;
  });
  return types;
};



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
      <p class="sub">Type: ${getTypes(poks.type)} </p>
      <p class="sub">Height: ${poks.size.height} </p>
      <p class="sub">Weight: ${poks.size.weight} </p>
    </div>
    
    <div class="evolucion">
      <p class=titulo>Evolución</p>
      <div class="evo1">
      
      <p class="sub">Candy:${poks.evolution.candy} </p>
     
      </div>
    </div>
    <div class="otroModal">
      <p class="flecha"> -> </p>
    </div>
  </div>
</div>`
     
modal.className = 'modal'
// <p class="sub">Candy-cost: ${poks.evolution["next-evolution"][0]["candy-cost"]} </p>

//seleccionar donde se va a poner el nodo - elemento padre
let elementoPadre=document.querySelector('.container-modal')

//agregar nodo
elementoPadre.appendChild(modal);


//cerrar modal
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

//empieza modal 2 
modal.querySelector('.otroModal').addEventListener('click', () => {
  
const modal2=document.createElement('div');

const getInfo = (arr) => {
  let ataques = '';
  arr.forEach((eachType) => {
    ataques += `<li class='lista'>${eachType} </li>`;
  });
  return ataques; 
};


const obtainNames = (attack) => {
  const names = attack.map(name => name.name);
  return names;
};
const obtainTypes = (attack) => {
  const types = attack.map(type => type.type);
  return types;
};



  modal2.innerHTML=
`<div class="cuadro">
  <div class="modal-flex">
    <div class="head-modal">
      <p class="nombre">${poks.num} - ${poks.name}</p>
      <p class="cerrar"> X </p>
    </div>  
     
    <div class="debilidades">
      <p class="titulo1">Debilidades:</p> 
      <div class='debi'>
       <p >${getInfo(poks.weaknesses)}</p>   
      </div>     
    </div>
    
    <div class="resistencia">
      <p class="titulo1">Resistencia:</p> 
      <div class='debi'>
        <p >${getInfo(poks.resistant)}</p>      
      </div>  
    </div>

    <div class="ataques">
      <p class=titulo>Ataques</p>
      <div class='nombreA'>
      <li class='lista'> <span class='desc'>Name</span> ${getInfo(obtainNames(poks['special-attack']))}</li>
      </div>
      <div class='typeA'>
      <li class='lista'><span class='desc'>Type</span> ${getInfo(obtainTypes(poks['special-attack'])) }</li>
      </div>
    </div>

    <div class="anteriorModal">
    <p class="flecha"> <- </p>
  </div>
  </div>
</div>`;
modal2.className = 'modal';
modal2.style.background = 'none';
let containerModal=document.querySelector('.container-modal')

//agregar nodo
containerModal.appendChild(modal2);

modal2.querySelector('.anteriorModal').addEventListener('click',()=>{
  modal2.classList.remove('modal')
}
)
modal2.querySelector('.cerrar').addEventListener('click', () => {
  
  elementoPadre.innerHTML = '';
});
const modalF = document.querySelector('.modal');
window.addEventListener('click', (evento) => {
  if (evento.target === modalF) {
    
    elementoPadre.innerHTML = '';
  }
});
});



return modal;
};




//Historia 2

/*orderBy.addEventListener('change', () => {
  switch (orderBy.value) {
    case 'num':
      containerPokemons.innerHTML = '';
      tarjetasPokemones(order(pokemonList, 'num'));
      break;
    case 'cp':
      containerPokemons.innerHTML = '';
      // eslint-disable-next-line no-case-declarations
      const orderCP = order(pokemonList, 'max-cp');
      tarjetasPokemones(changeOrder(orderCP));
      console.log(orderCP);
      break;
      case 'hM':
      containerPokemons.innerHTML = '';
      tarjetasPokemones(order(pokemonList, 'max-hpM'));
      break;
    case 'hp':
      containerPokemons.innerHTML = '';
      tarjetasPokemones(order(pokemonList, 'max-hp'));
      break;
    default:
  }
});

let ordenar=document.getElementById('order-by');
*/
orderBy.addEventListener('change', ()=>{
 if(orderBy.value=='hpR'){
  containerPokemons.innerHTML='';
  tarjetasPokemones(changeOrder(order(pokemonList, 'max-hp')));
 } else{ 
  containerPokemons.innerHTML='';
  return tarjetasPokemones(order(pokemonList, orderBy.value));
   } }
  
  )


//HU3-Filtros
let filtro= document.getElementById('lista');

filtro.addEventListener('change', ()=>{
  if(filtro.value=='todos'){
    containerPokemons.innerHTML='';
    tarjetasPokemones(pokemonList);
  } else {
  containerPokemons.innerHTML='';
   tarjetasPokemones(filtros(pokemonList,filtro.value));
    }
  }
  )


