const { Sweet } = require('../model/sweet');

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

const { addSweet } = require('../controller/sweetshop');
const sweets = require('../model/sweet');

beforeEach(() => sweets.length = 0); // clear sweets before each test

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

