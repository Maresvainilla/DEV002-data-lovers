import {
  filtros

} from '../src/data.js';
const inputTest = [
  {
    "num": "001",
    "name": 'bulbasaur',
    "type": ['grass', 'poison'],
    "stats": {
      "base-attack": "118",
      "base-defense": "111",
      "base-stamina": "128",
      "max-cp": "1115",
      "max-hp": "113"
    }
  },
  { "num": "002",
  "name": "ivysaur",
  "type": [ "grass", "poison" ],
  "stats": {
    "base-attack": "151",
    "base-defense": "143",
    "base-stamina": "155",
    "max-cp": "1699",
    "max-hp": "134"
  }
},
{
  "num": "003",
  "name": "venusaur",
  "type": [ "grass","poison" ],
  "stats": {
    "base-attack": "198",
    "base-defense": "189",
    "base-stamina": "190",
    "max-cp": "2720",
    "max-hp": "162"
  }
},
{
  "num": "004",
  "name": "charmander",
  "type": [ "fire" ],
  "stats": {
    "base-attack": "116",
    "base-defense": "93",
    "base-stamina": "118",
    "max-cp": "980",
    "max-hp": "105"
  }
},
  {
    "num": "005",
    "name": 'charmander',
    "type": ['fire'],
    "stats": {
      "base-attack": "158",
      "base-defense": "126",
      "base-stamina": "151",
      "max-cp": "1653",
      "max-hp": "131"
    }
  },
  {
    "num": "006",
    "name": "charizard",
    "type": [ "fire", "flying" ],
    "stats": {
      "base-attack": "223",
      "base-defense": "173",
      "base-stamina": "186",
      "max-cp": "2889",
      "max-hp": "158"
    },
  }
]

describe('Pruebas para la function Filtros.', () => {

  it('Filtros debería ser una función.', () => {
    expect(typeof filtros).toBe('function');
  });

  it('La function filtros debe retornar un array por tipo de pokemon.', () => {
    const resultadoFilter= filtros(inputTest,'fire')
    const ResultadoPrueba=   [
     {
      "num": "004",
      "name": "charmander",
      "type": [ "fire" ],
      "stats": {
        "base-attack": "116",
        "base-defense": "93",
        "base-stamina": "118",
        "max-cp": "980",
        "max-hp": "105"
      }
    },
      {
        "num": "005",
        "name": 'charmander',
        "type": ['fire'],
        "stats": {
          "base-attack": "158",
          "base-defense": "126",
          "base-stamina": "151",
          "max-cp": "1653",
          "max-hp": "131"
        }
      },
      {
        "num": "006",
        "name": "charizard",
        "type": [ "fire", "flying" ],
        "stats": {
          "base-attack": "223",
          "base-defense": "173",
          "base-stamina": "186",
          "max-cp": "2889",
          "max-hp": "158"
        },
      }
    ]
    expect(resultadoFilter ).toEqual(ResultadoPrueba);
  });

})

import {order,changeOrder} from '../src/data.js';

describe('Pruebas para la function Order', () => {
  it('Order debería ser una function', () => {

    expect(typeof order).toBe('function');
  });

  it('La function Order debe retornar un array ordenado ascendentemente en base a su propiedad num si su parametro sortBY es num', () => {
   
    const resultSort= order(inputTest,'num');
    const ResultadoPrueba= [
      {
        "num": "001",
        "name": 'bulbasaur',
        "type": ['grass', 'poison'],
        "stats": {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113"
        }
      },
      { "num": "002",
      "name": "ivysaur",
      "type": [ "grass", "poison" ],
      "stats": {
        "base-attack": "151",
        "base-defense": "143",
        "base-stamina": "155",
        "max-cp": "1699",
        "max-hp": "134"
      }
    },
    {
      "num": "003",
      "name": "venusaur",
      "type": [ "grass","poison" ],
      "stats": {
        "base-attack": "198",
        "base-defense": "189",
        "base-stamina": "190",
        "max-cp": "2720",
        "max-hp": "162"
      }
    },
    {
      "num": "004",
      "name": "charmander",
      "type": [ "fire" ],
      "stats": {
        "base-attack": "116",
        "base-defense": "93",
        "base-stamina": "118",
        "max-cp": "980",
        "max-hp": "105"
      }
    },
      {
        "num": "005",
        "name": 'charmander',
        "type": ['fire'],
        "stats": {
          "base-attack": "158",
          "base-defense": "126",
          "base-stamina": "151",
          "max-cp": "1653",
          "max-hp": "131"
        }
      },
      {
        "num": "006",
        "name": "charizard",
        "type": [ "fire", "flying" ],
        "stats": {
          "base-attack": "223",
          "base-defense": "173",
          "base-stamina": "186",
          "max-cp": "2889",
          "max-hp": "158"
        },
      }
    ]
    expect(resultSort).toEqual(ResultadoPrueba);
  });

  it('La function Order debe retornar un array ordenado ascendentemente en base a su stats si su parametro sortBY no es num. Caso max-hp.', () => {

    const resultSort=order(inputTest,'max-hp')
    const ResultadoPrueba=[
      {
        "num": "004",
        "name": "charmander",
        "type": [ "fire" ],
        "stats": {
          "base-attack": "116",
          "base-defense": "93",
          "base-stamina": "118",
          "max-cp": "980",
          "max-hp": "105"
        }
      },
      {
        "num": "001",
        "name": 'bulbasaur',
        "type": ['grass', 'poison'],
        "stats": {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113"
        }
      },
      {
        "num": "005",
        "name": 'charmander',
        "type": ['fire'],
        "stats": {
          "base-attack": "158",
          "base-defense": "126",
          "base-stamina": "151",
          "max-cp": "1653",
          "max-hp": "131"
        }
      },
      { "num": "002",
      "name": "ivysaur",
      "type": [ "grass", "poison" ],
      "stats": {
        "base-attack": "151",
        "base-defense": "143",
        "base-stamina": "155",
        "max-cp": "1699",
        "max-hp": "134"
      }
    },
    {
      "num": "006",
      "name": "charizard",
      "type": [ "fire", "flying" ],
      "stats": {
        "base-attack": "223",
        "base-defense": "173",
        "base-stamina": "186",
        "max-cp": "2889",
        "max-hp": "158"
      },
    },
    {
      "num": "003",
      "name": "venusaur",
      "type": [ "grass","poison" ],
      "stats": {
        "base-attack": "198",
        "base-defense": "189",
        "base-stamina": "190",
        "max-cp": "2720",
        "max-hp": "162"
      }
    },
    ]
    expect(resultSort).toEqual(ResultadoPrueba);
  });

  it('La function Order debe retornar un array ordenado ascendentemente en base a su stats si su parametro sortBY no es num. Caso max-cp.', () => {

    const resultSort=order(inputTest,'max-cp')
    const ResultadoPrueba=  [
      {
        "num": "004",
        "name": "charmander",
        "type": [ "fire" ],
        "stats": {
          "base-attack": "116",
          "base-defense": "93",
          "base-stamina": "118",
          "max-cp": "980",
          "max-hp": "105"
        }
      },
      {
        "num": "001",
        "name": 'bulbasaur',
        "type": ['grass', 'poison'],
        "stats": {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113"
        }
      },
      {
        "num": "005",
        "name": 'charmander',
        "type": ['fire'],
        "stats": {
          "base-attack": "158",
          "base-defense": "126",
          "base-stamina": "151",
          "max-cp": "1653",
          "max-hp": "131"
        }
      },
      { "num": "002",
      "name": "ivysaur",
      "type": [ "grass", "poison" ],
      "stats": {
        "base-attack": "151",
        "base-defense": "143",
        "base-stamina": "155",
        "max-cp": "1699",
        "max-hp": "134"
      }
    },

    {
      "num": "003",
      "name": "venusaur",
      "type": [ "grass","poison" ],
      "stats": {
        "base-attack": "198",
        "base-defense": "189",
        "base-stamina": "190",
        "max-cp": "2720",
        "max-hp": "162"
      }
    },
    {
        "num": "006",
        "name": "charizard",
        "type": [ "fire", "flying" ],
        "stats": {
          "base-attack": "223",
          "base-defense": "173",
          "base-stamina": "186",
          "max-cp": "2889",
          "max-hp": "158"
        },
      }
    ]
    expect(resultSort).toEqual(ResultadoPrueba);
  });
});

describe('Pruebas para la function changeOrder', () => {
  it('ChangeOrder debería ser una function', () => {

    expect(typeof changeOrder).toBe('function');
  });
  it('La function changeOrder debe retornar un array ordenado descendentemente. ', () => {
   
    const resultChangeOrder= changeOrder(inputTest);
    const ResultadoPrueba= [
      {
        "num": "006",
        "name": "charizard",
        "type": [ "fire", "flying" ],
        "stats": {
          "base-attack": "223",
          "base-defense": "173",
          "base-stamina": "186",
          "max-cp": "2889",
          "max-hp": "158"
        },
      },
        {
          "num": "005",
          "name": 'charmander',
          "type": ['fire'],
          "stats": {
            "base-attack": "158",
            "base-defense": "126",
            "base-stamina": "151",
            "max-cp": "1653",
            "max-hp": "131"
          }
        },
        {
          "num": "004",
          "name": "charmander",
          "type": [ "fire" ],
          "stats": {
            "base-attack": "116",
            "base-defense": "93",
            "base-stamina": "118",
            "max-cp": "980",
            "max-hp": "105"
          }
        },
        {
          "num": "003",
          "name": "venusaur",
          "type": [ "grass","poison" ],
          "stats": {
            "base-attack": "198",
            "base-defense": "189",
            "base-stamina": "190",
            "max-cp": "2720",
            "max-hp": "162"
          }
        },  
      { "num": "002",
      "name": "ivysaur",
      "type": [ "grass", "poison" ],
      "stats": {
        "base-attack": "151",
        "base-defense": "143",
        "base-stamina": "155",
        "max-cp": "1699",
        "max-hp": "134"
      }
    },
      {
        "num": "001",
        "name": 'bulbasaur',
        "type": ['grass', 'poison'],
        "stats": {
          "base-attack": "118",
          "base-defense": "111",
          "base-stamina": "128",
          "max-cp": "1115",
          "max-hp": "113"
        }
      },
    ]
    expect(resultChangeOrder).toEqual(ResultadoPrueba);
  });
});