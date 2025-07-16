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
