/*import { example, anotherExample } from '../src/data.js';


describe('Para la function Order', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});
*/
import {order,changeOrder} from '../src/data.js';

describe('Pruebas para la function Order', () => {
  it('La function Order debe retornar un array ordenado ascendentemente en base a su propiedad num si su parametro sortBY es num', () => {
   
    const dataPrueba = [
      {"num": "001",
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      }},
     { "num": "002",
      "name": "ivysaur",
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
      "stats": {
        "base-attack": "116",
        "base-defense": "93",
        "base-stamina": "118",
        "max-cp": "980",
        "max-hp": "105"
      }
    }
    ]
    const resultSort= order(dataPrueba,'num');
    expect(resultSort).toEqual(dataPrueba);
  });

  it('La function Order debe retornar un array ordenado ascendentemente en base a su stats si su parametro sortBY no es num`', () => {
    const dataPrueba = [
      {"num": "001",
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      }},
     { "num": "002",
      "name": "ivysaur",
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
      "stats": {
        "base-attack": "116",
        "base-defense": "93",
        "base-stamina": "118",
        "max-cp": "980",
        "max-hp": "105"
      }
    }
    ]
    const resultSort=order(dataPrueba,'max-hp')
    const dataSort=[
      {
        "num": "004",
        "name": "charmander",
        "stats": {
          "base-attack": "116",
          "base-defense": "93",
          "base-stamina": "118",
          "max-cp": "980",
          "max-hp": "105"
        }
      },
      {"num": "001",
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      }},
     { "num": "002",
      "name": "ivysaur",
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
      "stats": {
        "base-attack": "198",
        "base-defense": "189",
        "base-stamina": "190",
        "max-cp": "2720",
        "max-hp": "162"
      }
    },

    ]
    expect(resultSort).toEqual(dataSort);
  });

  it('La function Order debe retornar un array ordenado ascendentemente en base a su stats si su parametro sortBY no es num`', () => {
    const dataPrueba = [
      {"num": "001",
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      }},
     { "num": "002",
      "name": "ivysaur",
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
      "stats": {
        "base-attack": "116",
        "base-defense": "93",
        "base-stamina": "118",
        "max-cp": "980",
        "max-hp": "105"
      }
    }
    ]
    const resultSort=order(dataPrueba,'max-cp')
    const dataSort=[
      {
        "num": "004",
        "name": "charmander",
        "stats": {
          "base-attack": "116",
          "base-defense": "93",
          "base-stamina": "118",
          "max-cp": "980",
          "max-hp": "105"
        }
      },
      {"num": "001",
      "name": "bulbasaur",
      "stats": {
        "base-attack": "118",
        "base-defense": "111",
        "base-stamina": "128",
        "max-cp": "1115",
        "max-hp": "113"
      }},
     { "num": "002",
      "name": "ivysaur",
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
      "stats": {
        "base-attack": "198",
        "base-defense": "189",
        "base-stamina": "190",
        "max-cp": "2720",
        "max-hp": "162"
      }
    },

    ]
    expect(resultSort).toEqual(dataSort);
  });
});

describe('Pruebas para la function changeOrder', () => {
  it('La function changeOrder debe retornar un array ordenado descendentemente ', () => {
   
    const dataPrueba = [1,2,3,4,5,6]
    const resultChangeOrder= changeOrder(dataPrueba);
    const dataChangeOrder= [6,5,4,3,2,1]
    expect(resultChangeOrder).toEqual(dataChangeOrder);
  });
});