const { Sweet, sweets } = require('../model/sweet'); 
const { addSweet,deleteSweet } = require('../controller/sweetshop');


describe('Sweet class', () => {
  test('sweet object creation test', () => {
    const sweet = new Sweet(1, 'Kaju Katli', 'Nut-Based', 50, 20);

    expect(sweet.id).toBe(1);
    expect(sweet.name).toBe('Kaju Katli');
    expect(sweet.category).toBe('Nut-Based');
    expect(sweet.price).toBe(50);
    expect(sweet.quantity).toBe(20);
  });
});


beforeEach(() => sweets.length = 0); 

test('addSweet() should add a new sweet using Sweet class', () => {
  const sweetData = {
    id: 1,
    name: 'Kaju Katli',
    category: 'Nut-Based',
    price: 50,
    quantity: 20
  };

  addSweet(sweetData);

  expect(sweets.length).toBe(1);
  expect(sweets[0]).toMatchObject(sweetData);
  expect(sweets[0]).toBeInstanceOf(Object);
});



test('deleteSweet() should remove sweet by ID', () => {
  // Add 2 sweets
  addSweet({ id: 1, name: 'Kaju Katli', category: 'Nut-Based', price: 50, quantity: 20 });
  addSweet({ id: 2, name: 'Gulab Jamun', category: 'Milk-Based', price: 30, quantity: 15 });

  deleteSweet(1);

  expect(sweets.length).toBe(1);
  expect(sweets[0].id).toBe(2);
});

test('deleteSweet() should do nothing if ID not found', () => {
  addSweet({ id: 3, name: 'Barfi', category: 'Milk-Based', price: 25, quantity: 10 });

  deleteSweet(99); // non-existent ID

  expect(sweets.length).toBe(1); // nothing was deleted
  expect(sweets[0].id).toBe(3);
});
