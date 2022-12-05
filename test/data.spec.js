import {
  filtros

} from '../src/data.js';

const inputTest = [
  {
    num: 1,
    name: 'bulbasaur',
    type: ['grass', 'poison'],
  },

  {
    num: 5,
    name: 'charmander',
    type: ['fire'],
  },
  {
    num: 58,
    name: 'growlithe',
    type: ['fire'],
  },
  {
    num: 152,
    name: 'chikorita',
    type: ['grass'],
  },
  {
    num: 250,
    name: 'ho-oh',
    type: ['fire', 'flying'],
  },]

describe('Filtrar por tipo de elemento', () => {
  it('Deberia ser un objeto', () => {
    expect(typeof filtros).toBe('object');
  });

  it('Deberia ser un objeto', () => {
    expect(typeof inputTest).toBe('object');
  });

  it('la funcion filtros devuelve los tipos de pokemon', () => {
    const resultadoFilter= filtros.filterData (inputTest,'fire')
    const ResultadoPrueba=   [
    {
      num: 5,
      name: 'charmander',
      type: ['fire'],
    },
    {
      num: 58,
      name: 'growlithe',
      type: ['fire'],
    },

    {
      num: 250,
      name: 'ho-oh',
      type: ['fire', 'flying'],
    },]
    expect(resultadoFilter ).toEqual(ResultadoPrueba);
  });

})