/**
 * Shuffles the elements of an array using the Fisher-Yates algorithm.
 * @param {Array} cards - The array to be shuffled.
 * @returns {Array} - A new array with shuffled elements.
 */
const shuffle = (cards) => {
  if (!Array.isArray(cards)) {
    throw new TypeError("Expected an array as input to shuffle()");
  }

  const newCardsArray = [...cards];
  let current = newCardsArray.length;

  while (current !== 0) {
    const randomIndex = Math.floor(Math.random() * current);
    current--;

    [newCardsArray[current], newCardsArray[randomIndex]] = [
      newCardsArray[randomIndex],
      newCardsArray[current],
    ];
  }

  return newCardsArray;
};

export { shuffle };
