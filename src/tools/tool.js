export const getSumPrices = (cards) =>
  cards
    .filter((card) => card.isAdded)
    .map((card) => card.price)
    .reduce((sum, price) => sum + price, 0);

const sortById = (a, b) => a.id - b.id;

export const findFromCardsByText = (cards, text) =>
  cards
    .filter((card) =>
      card.description.toLowerCase().includes(text.toLowerCase())
    )
    .sort(sortById);

export const getOnlyAdded = (cards) =>
  cards.filter((card) => card.isAdded).sort(sortById);
