import data from './data/pokemon/pokemon.js'

const pokemonList = data.pokemon;
const containerPokemons = document.querySelector('#container-card');
const containerModal = document.querySelector('.container-modal');

pokemonList.forEach((obj) => {
  const at = obj['quick-move'];
  const names = at.map((name) => {
    return name.name;
  });
  
  console.log(names);

});

/*const showModal = (pokemon) => {
  const modal = document.createElement('div');
  modal.classList.add('modal');
  modal.innerHTML = <div class="modal-flex"> 
                      <div class="container-modal">${pokemon.type[0]} >
                    
                      <div class="img-modal"><img src=${pokemon.img}> 
                          
                          <div class="modal-info">
                            <p class="poke-name-card bold">${pokemon.name} N°<spam>${pokemon.num}</spam></p>
                            <p class="about">${pokemon.about}</p>
                            <div class="size-pokemon">
                              <div class="comun-modal contenido">
                                
                                <div>
                                  <p class="bold">Height</p>
                                  <p>${pokemon.size.height}</p>
                                </div>                                
                              </div>
                              <div class="comun-modal contenido">
                               
                                <div>
                                  <p class="bold">Egg</p>
                                  <p>${pokemon.egg}</p>
                                </div>
                              </div>
                              <div class="comun-modal contenido">
                                
                                <div>
                                  <p class="bold">Weight</p>
                                  <p>${pokemon.size.weight}</p>
                                </div>
                              </div>
                            </div>
                            <div class="resist-weakne">
                              <div class="comun-modal comun bold">
                                <p>Resistant</p>
                                <div class="resistant">${resistant(pokemon.resistant)}</div>
                              </div>
                              <div class="comun-modal comun bold">
                                <p>Weaknesses</p>
                                <div class="resistant">${weaknesses(pokemon.weaknesses)}</div>
                              </div>
                            </div>
                            <p class="bold comun title">Quick move</p>
                            <div class="comun bold quick-move">
                              <p class="encabezado">Name</p>
                              <p class="encabezado">STAB</p>
                              <p class="encabezado">DPS</p>
                              <p class="encabezado">EPS</p>
                            </div>
                            <div class="quick-move">
                              <div>${showsAttacks(obtainNames(pokemon['quick-move']))}</div>
                              <div>${showsAttacks(calculateStab(pokemon['quick-move'], pokemon.type))}</div>
                              <div>${showsAttacks(calculateDps(pokemon['quick-move'], pokemon.type))}</div>
                              <div>${showsAttacks(calculateEps(pokemon['quick-move']))}</div>
                            </div>
                            <p class="bold comun title">Special attack</p>
                            <div class="comun bold quick-move">
                              <p class="encabezado">Name</p>
                              <p class="encabezado">STAB</p>
                              <p class="encabezado">DPS</p>
                              <p class="encabezado">EPS</p>
                            </div>
                            <div class="quick-move">
                              <div>${showsAttacks(obtainNames(pokemon['special-attack']))}</div>
                              <div>${showsAttacks(calculateStab(pokemon['special-attack'], pokemon.type))}</div>
                              <div>${showsAttacks(calculateDps(pokemon['special-attack'], pokemon.type))}</div>
                              <div>${showsAttacks(calculateEps(pokemon['special-attack']))}</div>
                            </div>
                          </div>
                      </div>
                    </div>;
  document.querySelector('.container-modal').appendChild(modal);

  modal.style.display = 'block';
  modal.querySelector('.close').addEventListener('click', () => {
    modal.classList.remove('modal');
    containerModal.innerHTML = '';
  });
  const modalFlex = document.querySelector('.modal-flex');
  window.addEventListener('click', (evento) => {
    if (evento.target === modalFlex) {
      modal.classList.remove('modal');
      containerModal.innerHTML = '';
    }
  });
  return modal;
};

// Historia 1 y 2: mostrar pokemones y realizar un contador
const showPokemon = (list) => {
  let count = 0;
  list.forEach((pokem) => {
    const card = document.createElement('div');
    card.className = 'pokemon-group';
    card.innerHTML = `
      <div class="poke-img">
        <p class="poke-num">${pokem.num}</p>
        <img src="${pokem.img}">
      </div>
      <div class="container-info">
        <p class="poke-name">${pokem.name}</p>
        <p class="poke-info bold"> CP Máx: ${pokem.stats['max-cp']}</p>
        <p class="poke-info bold"> HP Máx: ${pokem.stats['max-hp']}</p>
        <div class="comun">${TypePokemon(pokem.type)}</div>
      </div>`;

    card.addEventListener('click', () => {
      const show = showModal(pokem);
      show.classList.add('modal');
    });
    count += 1;
    containerPokemons.appendChild(card);
  });
  document.getElementById('quantity').innerHTML = count;
  return containerPokemons;
};

showPokemon(pokemonList); // llamado al metodo
btnAll.addEventListener('click', () => {
  containerPokemons.innerHTML = '';
  showPokemon(order(pokemonList, 'num'));
});

// Historia 3: filtrar pokemones por tipo
elementTypeFilter.addEventListener('change', () => {
  if (elementTypeFilter.value === 'all') {
    containerPokemons.innerHTML = '';
    showPokemon(pokemonList);
  } else {
    const catchFilter = filterByType(pokemonList, elementTypeFilter.value);
    containerPokemons.innerHTML = '';
    showPokemon(catchFilter);
  }
});



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
});*/