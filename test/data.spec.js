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

describe('Para la function Order', () => {
  it('La function Order debe retornar un array de mayor a menor Máx-HP', () => {
    
    const resultOrder= order();
    expect(typeof order).toBe('function');
  });

  it('returns `example`', () => {
    expect(order()).toBe('example');
  });
});