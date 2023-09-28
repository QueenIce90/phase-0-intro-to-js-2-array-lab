// index.js
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyPrependCat(name) {
  cats.unshift(name);
}

// Export any necessary variables or functions if needed
module.exports = {
  cats,
  destructivelyPrependCat,
};

function destructivelyAppendCat(name) {
  cats.push(name);
}

// Export any necessary variables or functions if needed
module.exports = {
  cats,
  destructivelyAppendCat,
};

function destructivelyRemoveLastCat() {
  cats.pop();
}

// Export any necessary variables or functions if needed
module.exports = {
  cats,
  destructivelyRemoveLastCat,
};

function destructivelyRemoveLastCat() {
  cats.pop();
}

// Export any necessary variables or functions if needed
module.exports = {
  cats,
  destructivelyRemoveLastCat,
};

function destructivelyRemoveFirstCat() {
  cats.shift();
}

// Export any necessary variables or functions if needed
module.exports = {
  cats,
  destructivelyRemoveFirstCat,
};

function appendCat(name) {
  // Create a new array with the new cat appended to the end
  const newCatsArray = [...cats, name];
  return newCatsArray;
}

// Export any necessary variables or functions if needed
module.exports = {
  cats,
  appendCat,
};

function prependCat(name) {
  // Create a new array with the new cat prepended to the beginning
  const newCatsArray = [name, ...cats];
  return newCatsArray;
}

// Export any necessary variables or functions if needed
module.exports = {
  cats,
  prependCat,
};

function removeLastCat() {
  // Create a new array without the last cat
  const newCatsArray = [...cats.slice(0, -1)];
  return newCatsArray;
}

// Export any necessary variables or functions if needed
module.exports = {
  cats,
  removeLastCat,
};

function removeFirstCat() {
  // Create a new array without the first cat
  const newCatsArray = [...cats.slice(1)];
  return newCatsArray;
}

// Export any necessary variables or functions if needed
module.exports = {
  cats,
  removeFirstCat,
};
