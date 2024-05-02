// Задание 1

const itemAndPrice = {
  potato: 100,
  bred: 200,
  carrot: 150,
};

const reducePrices = (products) => {
  const reducedPrices = {};
  for (const key in products) {
    reducedPrices[key] = products[key] * 0.9;
  }
  return reducedPrices;
};

const reducedProducts = reducePrices(itemAndPrice);
console.log(reducedProducts);

// Задание 2

const students = [
  { name: 'Dmitriy', grade: 85 },
  { name: 'Inna', grade: 92 },
  { name: 'Valera', grade: 88 },
  { name: 'Viktor', grade: 91 },
  { name: 'Alexey', grade: 95 },
  { name: 'Irina', grade: 90 },

];

const goodStudents = students.filter((sudent) => sudent.grade >= 90);
console.log(goodStudents);