//objects and arrays

let customer = {
    name: 'John',
    lastName: 'Doe',
    cars: ['volvo', 'Toyota', 'Tesla'],
};
customer.name = 'Mike';

console.log(customer);
console.log(`${customer.name} ${customer.lastName}`);
console.log(customer['name']);
console.log(customer.cars[1]);

//arrays
let cars = ['volvo', 'Toyota', 'Tesla'];
cars[1] = 'BMW';
console.log(cars[0]);
console.log(cars);
