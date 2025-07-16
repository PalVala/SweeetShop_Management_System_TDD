const { Sweet, sweets } = require('../model/sweet');

function addSweet(sweetData) {
  const sweet = new Sweet(
    sweetData.id,
    sweetData.name,
    sweetData.category,
    sweetData.price,
    sweetData.quantity
  );
  sweets.push(sweet);
}

const { Sweet, sweets } = require('../model/sweet');

function addSweet(sweetData) {
  const { id, name, category, price, quantity } = sweetData;

  
  const exists = sweets.find(s => s.id === id);
  if (exists) throw new Error('Sweet with this ID already exists');

  const sweet = new Sweet(id, name, category, price, quantity);
  sweets.push(sweet);
}

module.exports = {
  addSweet,
  
};
