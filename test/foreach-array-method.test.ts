import { getIndexAndElement, getNewString } from '../array_basic_methods/foreach-array-method';

getIndexAndElement(['apple', 'banana', 'cherry']);

it('check foreach method', () => {
    expect(getNewString(['Hello', 'World'])).toEqual('Hello World');
});
